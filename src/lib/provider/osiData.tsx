import { createContext, Dispatch, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { osi, data } from '../data'
import { Firebase } from '../../firebase/database'

export const getDataByName = (data: osi[], name: string): osi => {
	return data.find(object => object.name === name)
}

export type Action = {
	type: 'GET_BY_ID',
	payload: {
		id: string
	}
} | {
	type: 'GET_BY_NAME',
	payload: {
		name: string
	}
} | {
	type: 'UPDATE_BY_NAME',
	payload: {
		id: string,
		data: osi,
	}
} | {
	type: 'ADD',
} | {
	type: 'FETCH_DATA',
} | {
	type: 'FETCH_DATA_SUCCESS',
	payload: {
		data: osi[]
	}
} | {
	type: 'UPLOAD_DATA',
	payload: {
		data: osi
	}
}

export type State = {
	data: osi[]
	current: osi
}

export const initialState: State = {
	data: data,
	current: {
		id: 'b',
		name: 'ぽよ',
		tags: ['アイドル', '=LOVE'],
		image: 'https://placehold.jp/400x400.png',
		blocks: []
	}
}

type Context = {
	state: State
	dispatch: Dispatch<Action>
}

export const OsiDataContext = createContext<Context>({
	state: initialState,
	dispatch: () => {
	}
})

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'GET_BY_NAME':
			return {
				...state,
				current: state.data.find(v => v.name === action.payload.name)
			}
		case 'GET_BY_ID':
			return {
				...state,
				current: state.data.find(v => v.id === action.payload.id)
			}
		case 'UPDATE_BY_NAME':
			console.log(state)
			return {
				...state,
				data: state.data.map(value => {
					if (value.id === action.payload.id) {
						return action.payload.data
					}
					return value
				}),
				current: action.payload.data
			}
		case 'ADD':
			const newData: osi = {
				id: uuidv4(),
				name: '名称未確定',
				tags: [],
				image: 'https://placehold.jp/400x400.png',
				blocks: [{ id: 'aaa', tag: 'COMMAND', command: '' }]
			}
			return {
				...state,
				data: [newData, ...state.data]
			}
		case 'FETCH_DATA':
			return {
				...state,
				data: [],
			}
		case 'FETCH_DATA_SUCCESS':
			return {
				...state,
				data: action.payload.data,
			}
		case 'UPLOAD_DATA':
			console.log('このデータをアップロードします', action.payload.data)
			Firebase.uploadData(action.payload.data)
		default:
			return state
	}
}

export const OsiDataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		const res = Firebase.imagesCollection().get().then(res => {
			return res.docs.map(value => value.data())
		}).then(res => {
			console.log('firebase data!')
			console.log(res)
			dispatch({type: 'FETCH_DATA_SUCCESS', payload: {data: res as osi[]}})
		})
	}, [])

	return (
		<OsiDataContext.Provider value={{ state, dispatch }}>
			{children}
		</OsiDataContext.Provider>
	)
}