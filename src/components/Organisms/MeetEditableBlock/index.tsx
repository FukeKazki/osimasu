import React, { useState } from 'react'
import { MeetBlock } from '../../../lib/data'
import ContentEditable from 'react-contenteditable'

type Props = {
	block: MeetBlock
	className?: string
}

const MeetEditableBlock: React.FC<Props> = ({ block, className}) => {
	const [html, setHtml] = useState(block.meet)

	const handleChange = (e) => {
		setHtml(e.target.value)
	}


	return (
		<div className={['py-20 bg-pink text-center text-white', className].join(' ')}>
			<h3 className='text-xl mb-2'>出会って</h3>
			<ContentEditable className='text-6xl' tagName='span' html={html} onChange={handleChange}/>
			<span className='text-sm'>日</span>
		</div>
	)
}

export default MeetEditableBlock