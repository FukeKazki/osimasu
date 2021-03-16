import React, { useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { WeightBlock } from '../../../lib/data'

type Props = {
	block: WeightBlock
	className?: string
}

const WeightEditableBlock: React.FC<Props> = ({ block, className }) => {
	const [html, setHtml] = useState(block.weight)

	const handleChange = (e) => {
		setHtml(e.target.value)
	}


	return (
		<div className={['py-20 bg-pink text-center text-white', className].join(' ')}>
			<h3 className='text-xl mb-2'>体重</h3>
			<ContentEditable tagName='span' html={html} onChange={handleChange} className='text-6xl'/>
			<span className='text-sm'>kg</span>
		</div>
	)
}

export default WeightEditableBlock