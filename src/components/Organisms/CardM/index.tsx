import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export type Props = {
	image: string
	title: string
	tags: string[]
	id: string
	className?: string
}

const CardM: React.FC<Props> = ({ image, title, tags, id, className, ...props }) => {
	return (
		<article className={['relative border rounded-2xl overflow-hidden border-gray', className].join(' ')} {...props}>
			{/* 画像 */}
			<div>
				<img src={image} alt='' className='w-full h-40' />
			</div>

			<div className='p-4'>
				{/* 名前 */}
				<p className='text-3xl text-black'>{title}</p>
				{/*	タグ一覧 */}
				<div>
					{tags.map((tag, index) => (
						<span className={['text-sm', index && 'ml-2'].join(' ')}>{tag}</span>
					))}
				</div>
			</div>
			{/*	リンク */}
			<div className='absolute bottom-2 right-2 text-gray cursor-pointer'>
				{/*<Link href={`/contents/${title}`}>*/}
				{/*	<FontAwesomeIcon icon={faChevronRight} />*/}
				{/*</Link>*/}
				<Link href={`/contents/${id}`}>
					<FontAwesomeIcon icon={faChevronRight} />
				</Link>
			</div>
		</article>
	)
}

export default CardM