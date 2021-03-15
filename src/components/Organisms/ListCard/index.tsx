import React from 'react'

type Props = {
	image: string
	title: string
	tags: string[]
	className?: string
}

const CardM: React.FC<Props> = ({ image, title, tags, className, ...props }) => {
	return (
		<article className={[className].join(' ')} {...props}>
			{/* 画像 */}
			{/* 名前 */}
			<p>{title}</p>
			{/*	タグ一覧 */}
			{/*	リンク */}
		</article>
	)
}

export default CardM