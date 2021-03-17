import React, { useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { useAutoFocus } from '../../../lib/hooks/useAutoFocus'
import ContentsSelectMenu from '../../Molecules/ContentsSelectMenu'

const tags = [
	{
		name: 'HEADER',
		label: 'h1'
	},
	{
		name: 'MEET',
		label: '出会って何日?'
	},
	{
		name: 'WEIGHT',
		label: '体重'
	},
	{
		name: 'HEIGHT',
		label: '身長'
	}
	// {
	// 	name: 'GALLERY',
	// 	label: 'ギャラリー'
	// },
]

type Props = {
	addHeightBlockHandler: (index) => void
	addWeightBlockHandler: (index) => void
	addMeetBlockHandler: (index) => void
	addHeaderBlockHandler: (index) => void
	addUrlBlockHandler: (index, url, title, description, image) => void
	index: number
}
const CommandEditableBlock: React.FC<Props> = ({
												   addHeightBlockHandler,
												   addWeightBlockHandler,
												   addUrlBlockHandler,
												   addMeetBlockHandler,
												   addHeaderBlockHandler,
												   index
											   }) => {
	const contentEditable = useAutoFocus()
	const [command, setCommand] = useState('')
	const [tag, setTag] = useState('')
	const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false)

	const handleChange = (e) => {
		setCommand(e.target.value)
	}

	const onKeydownHandler = (e) => {
		if (e.key === '/') {
			openSelectMenuHandler()
		}
	}

	const openSelectMenuHandler = () => {
		setSelectMenuIsOpen(true)
		document.addEventListener('click', closeSelectMenuHandler)
	}

	const closeSelectMenuHandler = () => {
		setSelectMenuIsOpen(false)
		document.removeEventListener('click', closeSelectMenuHandler)
	}

	const isUrl = () => {
		const pattern = /^(https|http):/
		return pattern.test(command)
	}

	const fetchOGP = async () => {
		const url = command
		const encodedUrl = encodeURIComponent(url)
		const res = await fetch(`/api/${encodedUrl}`)
		const content = await res.json()
		const title = content.title ? content.title : ''
		const description = content.description ? content.description : ''
		const image = content.image ? content.image : ''

		addUrlBlockHandler(index, url, title, description, image)
		setCommand('')
	}

	const tagSelectionHandler = (tag: string) => {
		setTag(tag)
		if (tag === 'HEADER') {
			addHeaderBlockHandler(index)
		}
		if (tag === 'MEET') {
			console.log('meetを選びました')
			addMeetBlockHandler(index)
		}
		if (tag === 'HEIGHT') {
			console.log('heightを選びました')
			addHeightBlockHandler(index)
		}
		if (tag === 'WEIGHT') {
			console.log('weightを選びました')
			addWeightBlockHandler(index)
		}

		setCommand('')

		closeSelectMenuHandler()
	}

	return (
		<>
			{selectMenuIsOpen &&
			<ContentsSelectMenu tags={tags} onSelect={tagSelectionHandler} className='w-1/4 ml-4 shadow-2xl' />}
			{isUrl() && <button onClick={fetchOGP}>fetch</button>}
			<ContentEditable
				innerRef={contentEditable}
				html={command}
				tagName='p'
				onChange={handleChange}
				onKeyDown={onKeydownHandler}
			/>
		</>
	)
}

export default CommandEditableBlock