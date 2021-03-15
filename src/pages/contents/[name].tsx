import { useRouter } from 'next/router'

const Contents = () => {
	const router = useRouter()
	const { name } = router.query

	return (
		<div>
			<p>Name: {name}</p>
		</div>
	)
}

export default Contents