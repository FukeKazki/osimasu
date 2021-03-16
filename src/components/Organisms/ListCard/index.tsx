import React from 'react'
import Link from 'next/link'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


type Props = {
	image: string
	title: string
	tags: string[]
	className?: string
}

const ListCard: React.FC<Props> = ({ image, title, tags, className, ...props }) => {
	return (
		<article className={['flex justify-between m-4 center border-b-2 h-16', className].join(' ')} {...props}>
			{/* 画像 */}
			<div className="flex-initial rounded-full overflow-hidden mb-4 h-12 w-12">
				<img src={image} alt='' className="" />
			</div>
			<div className='flex-initial w-1/2'>
				{/* 名前 */}
				<p className="text-xl">{title}</p>
				{/*	タグ一覧 */}
				{tags.map((tag, index) => (
					<span className={['text-sm', index && 'ml-2'].join(' ')}>{tag}</span>
				))}
			</div>	
			{/*	リンク */}
			<div className='flex-initial m-4'>
				<Link href={`/comtents/${title}`}>
					<FontAwesomeIcon icon={faChevronRight} />
				</Link>
			</div>

		</article>
	)
}

export default ListCard