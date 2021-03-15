import React from 'react'

type Props = {
	title: string
	className?: string
}

const Header: React.FC<Props> = ({ title, className, ...props }) => {
	return (
		<header className={[className].join(' ')} {...props}>
			<h1>{title}</h1>
		</header>
	)
}

export default Header