import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { OsiDataContext } from '../../lib/provider/osiData'
import Layout from '../../components/Layout'
import { block, HeaderBlock, HeightBlock, MeetBlock, UrlBlock, WeightBlock, CommandBlock } from '../../lib/data'
import GalleryEditableBlock from '../../components/Organisms/GalleryEditableBlock'
import UrlContainer from '../../components/Molecules/UrlContainer'
import CommandEditableBlock from '../../components/Organisms/CommandEditableBlock'
import HeaderEditableBlock from '../../components/Organisms/HeaderEditableBlock'
import HeightEditableBlock from '../../components/Organisms/HeightEditableBlock'
import WeightEditableBlock from '../../components/Organisms/WeightEditableBlock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import MeetEditableBlock from '../../components/Organisms/MeetEditableBlock'
import ImageSelectIcon from '../../components/Molecules/ImageSelectIcon'

const Contents = () => {
	const router = useRouter()
	const { name } = router.query
	const { state, dispatch } = useContext(OsiDataContext)

	useEffect(() => {
		console.log('name: ', name,)
		console.log(state)
		dispatch({ type: 'GET_BY_NAME', payload: { name: name as string } })
	}, [name])

	// useEffect(() => {
	// 	addCommandBlockHandler(state.current.blocks.length)
	// }, [state.current.blocks])

	const imageLoadHandler = async (e) => {
		const file = e.target.files.item(0)
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			updateImageHandler(reader.result as string)
			// setThumbnail(reader.result)
		}
	}


	const addHeaderBlockHandler = (index) => {
		const newBlock: HeaderBlock = { id: '', html: '', tag: 'HEADER' }
		const newData = state.current
		newData.blocks.splice(index + 1, 0, newBlock)

		dispatch({
			type: 'UPDATE_BY_NAME',
			payload: { name: name as string, id: state.current.id, data: newData }
		})
	}

	const addCommandBlockHandler = (index) => {
		const newBlock: CommandBlock = {
			id: '',
			tag: 'COMMAND',
			command: ''
		}
		const newData = state.current
		newData.blocks.splice(index + 1, 0, newBlock)

		dispatch({
			type: 'UPDATE_BY_NAME',
			payload: { name: name as string, id: state.current.id, data: newData }
		})
	}

	const addHeightBlockHandler = (index) => {
		const newBlock: HeightBlock = {
			id: '',
			tag: 'HEIGHT',
			height: '10'
		}
		const newData = state.current
		newData.blocks.splice(index + 1, 0, newBlock)

		dispatch({
			type: 'UPDATE_BY_NAME',
			payload: { name: name as string, id: state.current.id, data: newData }
		})
	}

	const addWeightBlockHandler = (index) => {
		const newBlock: WeightBlock = {
			id: '',
			tag: 'WEIGHT',
			weight: '10'
		}
		const newData = state.current
		newData.blocks.splice(index + 1, 0, newBlock)
		console.log(newData)

		dispatch({
			type: 'UPDATE_BY_NAME',
			payload: { name: name as string, id: state.current.id, data: newData }
		})
	}

	const addMeetBlockHandler = (index) => {
		const newBlock: MeetBlock = {
			id: '',
			tag: 'MEET',
			meet: '0'
		}
		const newData = state.current
		newData.blocks.splice(index + 1, 0, newBlock)

		dispatch({
			type: 'UPDATE_BY_NAME',
			payload: { name: name as string, id: state.current.id, data: newData }
		})
	}

	const addUrlBlockHandler = (index, url, title, description, image) => {
		const newBlock: UrlBlock = {
			id: '',
			tag: 'URL',
			url: url,
			image: image,
			title: title,
			description: description
		}

		const newData = state.current
		newData.blocks.splice(index + 1, 0, newBlock)
		console.log(newData)

		dispatch({
			type: 'UPDATE_BY_NAME',
			payload: { name: name as string, id: state.current.id, data: newData }
		})
	}

	const updateBlockHandler = (block: block) => {
		const newBlocks = state.current.blocks.map(v => {
			if (v.id === block.id) {
				return block
			}
			return v
		})
		dispatch({
			type: 'UPDATE_BY_NAME',
			payload: {
				name: name as string,
				id: state.current.id,
				data: {
					...state.current,
					blocks: newBlocks
				}
			}
		})
	}

	const updateImageHandler = (image: string) => {
		console.log(image)
		dispatch({
			type: 'UPDATE_BY_NAME',
			payload: {
				name: name as string,
				id: state.current.id,
				data: {
					...state.current,
					image: image
				}
			}
		})
	}



	return (
		<Layout>
			{state.current && (
				<>
					<div className='h-96 w-full bg-cover' style={{ backgroundImage: `url(${state.current.image})`}}>
						<header className='container flex justify-between'>
							<Link href='/home/'>
								<FontAwesomeIcon icon={faChevronLeft} className='text-white h-20 w-20' />
							</Link>
							<ImageSelectIcon handleChange={imageLoadHandler}/>
						</header>
					</div>
					<div className='mt-8'>
						<h1 className='text-5xl font-bold text-center'>{state.current.name}</h1>
					</div>
					<div className='flex justify-center mt-8'>
						{state.current.tags.map((tag, index) => (
							<span className={['', index && 'ml-2'].join(' ')}>#{tag}</span>
						))}
					</div>
				</>
			)}

			{state.current && state.current.blocks.map((block, index) => {
				if (block.tag === 'HEADER') {
					return (
						<HeaderEditableBlock block={block} className='mt-8' />
					)
				}
				if (block.tag === 'GALLERY') {
					return (
						<GalleryEditableBlock block={block} />
					)
				}
				if (block.tag === 'HEIGHT') {
					return (
						<HeightEditableBlock block={block} className='mt-8' />
					)
				}
				if (block.tag === 'WEIGHT') {
					return (
						<WeightEditableBlock block={block} className='mt-8' />
					)
				}
				if (block.tag === 'URL') {
					return (
						<div className='container'>
							<UrlContainer
								title={block.title}
								description={block.description}
								image={block.image}
								url={block.url}
							/>
						</div>
					)
				}
				if (block.tag === 'COMMAND') {
					return (
						<CommandEditableBlock
							index={index}
							addHeightBlockHandler={(index) => addHeightBlockHandler(index)}
							addWeightBlockHandler={(index) => addWeightBlockHandler(index)}
							addUrlBlockHandler={(index, url, title, description, image) => addUrlBlockHandler(index, url, title, description, image)}
							addMeetBlockHandler={(index) => addMeetBlockHandler(index)}
							addHeaderBlockHandler={(index) => addHeaderBlockHandler(index)}
						/>
					)
				}
				if (block.tag === 'MEET') {
					return (
						<MeetEditableBlock block={block} className='mt-8' />
					)
				}
			})}
		</Layout>
	)
}

export default Contents