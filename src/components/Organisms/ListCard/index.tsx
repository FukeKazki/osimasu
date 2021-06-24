import React from 'react'
import Link from 'next/link'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


type Props = {
	image: string
	title: string
	tags: string[]
	id: string
	className?: string
}

const ListCard: React.FC<Props> = ({ image, title, tags, id, className, ...props }) => {
	return (
		<article {...props}>
			<Link href={`/contents/${id}`}>
				<div className={['flex justify-between center border-b-2 p-4 border-gray cursor-pointer', className].join(' ')}>
					{/* 画像 */}
					<div
						className='flex-initial rounded-full overflow-hidden h-12 w-12'
						style={{
							backgroundImage: `url(${image})`,
							backgroundSize: 'cover'
						}}
					/>
					<div className='flex-initial w-1/2'>
						{/* 名前 */}
						<p className='text-xl text-black'>{title}</p>
						{/*	タグ一覧 */}
						{tags.map((tag, index) => (
							<span className={['text-sm', index && 'ml-2'].join(' ')}>{tag}</span>
						))}
					</div>
					{/*	リンク */}
					<div className='flex items-center text-gray'>
						<FontAwesomeIcon icon={faChevronRight} />
					</div>
				</div>
			</Link>
		</article>
	)
}

export default ListCard