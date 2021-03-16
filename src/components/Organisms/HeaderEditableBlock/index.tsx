import React, { useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { useAutoFocus } from '../../../lib/hooks/useAutoFocus'
import { HeaderBlock } from '../../../lib/data'

type Props = {
	block: HeaderBlock
	className?: string
}

const HeaderEditableBlock: React.FC<Props> = ({ block, className }) => {
	const [html, setHtml] = useState(block.html)

	const handleChange = (e) => {
		setHtml(e.target.value)
	}

	return (
		<ContentEditable
			className={['text-center text-4xl font-bold', className].join(' ')}
			tagName='h1'
			html={html}
			onChange={handleChange}
		/>
	)
}

export default HeaderEditableBlock