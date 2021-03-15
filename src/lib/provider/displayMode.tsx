import { createContext, Dispatch, useReducer } from 'react'

export type Action = {
	type: 'LIST'
} | {
	type: 'GRID'
} | {
	type: 'MAP'
}

export type State = {
	mode: string
}

export const initialState: State = {
	mode: 'GRID'
}

type Context = {
	state: State
	dispatch: Dispatch<Action>
}

export const ModeContext = createContext<Context>({
	state: initialState,
	dispatch: () => {
	},
})

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'GRID':
			return {
				...state,
				mode: 'GRID'
			}
		case 'LIST':
			return {
				...state,
				mode: 'LIST'
			}
		case 'MAP':
			return {
				...state,
				mode: 'MAP'
			}
		default:
			return state
	}
}

export const DisplayModeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<ModeContext.Provider value={{ state, dispatch }}>
			{children}
		</ModeContext.Provider>
	)
}