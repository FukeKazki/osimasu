import React from 'react'
import Link from 'next/link'

type Props = {
	title: string
	description: string
	image: string
	url: string
	className?: string
}

const UrlContainer: React.FC<Props> = ({ title, description, image, url,  className, ...props }) => {
	return (
		<Link href={url}>
			<div className='flex border rounded-2xl overflow-hidden border-pink-dark'>
				<div className='p-4'>
					<p className='text-sm text-pink-dark'>{title}</p>
				</div>
				<div className='w-2/3'>
					<img src={image} alt='' className='w-full h-full' />
				</div>
			</div>
		</Link>
	)
}

export default UrlContainer