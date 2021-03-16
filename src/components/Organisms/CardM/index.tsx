import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


type Props = {
	image: string
	title: string
	tags: string[]
	className?: string
}

const CardM: React.FC<Props> = ({ image, title, tags, className, ...props }) => {
	return (
		<article className={['relative border rounded-2xl overflow-hidden border-gray', className].join(' ')} {...props}>
			{/* 画像 */}
			<div>
				<img src={image} alt='' className='w-full h-40' />
			</div>

			<div className='p-4'>
				{/* 名前 */}
				<p className='text-3xl'>{title}</p>
				{/*	タグ一覧 */}
				<div>
					{tags.map((tag, index) => (
						<span className={['text-sm', index && 'ml-2'].join(' ')}>{tag}</span>
					))}
				</div>
			</div>
			{/*	リンク */}
			<div className='absolute bottom-2 right-2 text-gray'>
				<Link href={`/contents/${title}`}>
					<FontAwesomeIcon icon={faChevronRight} />
				</Link>
			</div>
		</article>
	)
}

export default CardM