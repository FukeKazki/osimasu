import React, { useState } from 'react'
import { GalleryBlock } from '../../../lib/data'
import GalleyImage from '../../Molecules/GalleyImage'

type Props = {
	block: GalleryBlock
}

const GalleryEditableBlock: React.FC<Props> = ({ block}) => {
	const [images, setImages] = useState(block.images)

	const imageLoadHandler = async (e, index) => {
		console.log(e, index)
		const file = e.target.files.item(0)
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			let newImages = images
			newImages[index] = reader.result as string
			setImages(newImages)
			// setThumbnail(reader.result)
		}
	}

	return (
		<div className='flex overflow-x-scroll'>
			{images.map((image, index) => {
				if (index % 2 == 0) {
					return (
						<ul>
							<li>
								<GalleyImage
									handleChange={imageLoadHandler}
									image={image}
									className='w-28 h-28 bg-pink-300'
									index={index}
								/>
							</li>
							<li><GalleyImage handleChange={imageLoadHandler} image={images[index+1]} className='w-28 h-28 bg-pink-500' index={index+1}/></li>
						</ul>
					)
				}
			})}
		</div>
	)
}

export default GalleryEditableBlock