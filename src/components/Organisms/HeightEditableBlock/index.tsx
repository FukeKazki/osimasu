import React, { useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { HeightBlock } from '../../../lib/data'

type Props = {
	block: HeightBlock
	updateBlockHandler: (block) => void
	className?: string
}

const HeightEditableBlock: React.FC<Props> = ({ block, updateBlockHandler,  className }) => {
	const [html, setHtml] = useState(block.height)

	const handleChange = (e) => {
		setHtml(e.target.value)
		updateBlockHandler({
			id: block.id,
			tag: 'HEIGHT',
			height: e.target.value
		})
	}


	return (
		<div className={['py-20 bg-pink text-center text-white', className].join(' ')}>
			<h3 className='text-xl mb-2'>身長</h3>
			<ContentEditable className='text-6xl' tagName='span' html={html} onChange={handleChange}/>
			<span className='text-sm'>cm</span>
		</div>
	)
}

export default HeightEditableBlock