import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

type Props = {
	handleChange: (e) => void
	className?: string
}

const ImageSelectIcon: React.FC<Props> = ({ handleChange, className }) => {
	const inputRef = useRef(null)

	return (
		<div className={[className].join(' ')} onClick={() => inputRef.current.click()}>
			<input type='file' accept='image/*' className='hidden' ref={inputRef} onChange={handleChange} />
			<FontAwesomeIcon icon={faImage} className='text-white h-20 w-20'/>
		</div>
	)
}

export default ImageSelectIcon