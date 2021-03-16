import React from 'react'

type Props = {
	tags: {
		name: string
		label: string
	}[]
	onSelect: (arg) => void
	className?: string
}

const ContentsSelectMenu: React.FC<Props> = ({ tags, onSelect, className }) => {
	return (
		<div className={['border rounded-2xl border-pink-dark', className].join(' ')}>
			{tags.map((tag, index) => {
				return (
					<div key={index} onClick={() => onSelect(tag.name)} className={['p-4 border-pink-dark', index && 'border-t'].join(' ')}>
						<p className='text-sm'>{tag.label}</p>
					</div>
				)
			})}
		</div>
	)
}

export default ContentsSelectMenu