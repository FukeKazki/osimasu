import React, { useRef } from 'react'

type Props = {
	handleChange: (arg, index) => void
	image: string
	index: number
	className?: string
}

const GalleyImage: React.FC<Props> = ({ handleChange, image, index, className, ...props}) => {
	const inputRef = useRef(null)
	console.log(index, image)
	return (
		<div className={[className].join(' ')} onClick={() => inputRef.current.click()} {...props}>
			<input
				type='file'
				accept='image/*'
				className='hidden'
				ref={inputRef}
				onChange={(e) => handleChange(e, index)}
			/>
			{image && <img src={image} alt='' className='w-full h-full' />}
		</div>
	)
}

export default GalleyImage