import React from 'react'
import Link from 'next/link'

export type Props = {
	title: string
	description: string
	image: string
	url: string
	className?: string
}

const UrlContainer: React.FC<Props> = ({ title, description, image, url,  className, ...props }) => {
	return (
		<Link href={url}>
			<div className={['flex border rounded-2xl overflow-hidden border-black cursor-pointer', className].join(' ')}>
				<div className='px-4 py-8 w-2/4 md:w-3/4'>
					<p className='text-sm text-black m-0 truncate'>{title}</p>
					<p className='text-sm text-gray m-0 truncate'>{url}</p>
				</div>
				<div className='w-2/4 md:w-1/4 bg-cover bg-center bg-pink-light' style={{backgroundImage: `url(${image})`}}>
				</div>
			</div>
		</Link>
	)
}

export default UrlContainer