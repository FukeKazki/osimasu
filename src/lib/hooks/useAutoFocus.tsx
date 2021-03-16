import { useRef, useEffect } from 'react'

export const useAutoFocus = () => {
	const inputRef = useRef(null)
	useEffect(() => {
		const node = inputRef.current
		if (node) {
			node.focus()
		}
	}, [])

	return inputRef
}