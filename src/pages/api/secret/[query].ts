import PornHub from '@bowwow/pornhub_api/index'

export default async ({ query: { query }}, res) => {
	const ph = new PornHub()
	const result = await ph.search({ search: query })

	res.json({
		videos: result.videos
	})
}