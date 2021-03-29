import { useEffect, useState } from 'react'

interface Video {
	duration: string,
	views: number,
	video_id: string,
	rating: string,
	ratings: number,
	title: string,
	url: string,
	default_thumb: string,
	thumb: string,
	publish_date: string,
	thumbs: any[],
	tags: any[],
	pornstarts: any[],
	categories: any[],
	segment: string,
}

export default function Particle({ result }) {
	const [videos, setVideos] = useState<Video[]>([])
	const [query, setQuery] = useState('')

	// useEffect(() => {
	// 	const f = async () => {
	// 		const res = await fetch('/api/secret/jk')
	// 		const videos = await res.json()
	// 		setVideos(videos.videos)
	// 	}
	// 	f()
	// }, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		handleSearch(query)
	}

	const handleSearch = async (text) => {
		if (text === '') return undefined
		const res = await fetch(`/api/secret/${text}`)
		const videos = await res.json()
		setVideos(videos.videos)
	}

	return (
		<div>
			<div className='flex justify-center place-items-center h-16 shadow sticky top-0 bg-white mx-auto'>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='ドラゴン' value={query} onChange={e => setQuery(e.target.value)} />
					<input type='submit' value='検索'/>
				</form>
			</div>

			<div className='container mt-8 mx-auto'>
				<div className='shadow p-4 rounded-2xl'>
					<h3 className='text-center'>えっちな動画を探していることがバレにくいサイトです</h3>
					<p className='text-center mt-4 text-lg'>特徴</p>
					<ul>
						<li>
							<p>1. 履歴に残ってもURLからわからない</p>
						</li>
						<li>
							<p>2. 画像が無いので画面を見られても一瞬ではわからない</p>
						</li>
					</ul>
				</div>

			</div>

			<ul className='container mx-auto'>
				{videos.map(video => {
					return (
						<li key={video.video_id} className='border-b border-pink-light p-4'>
							<a href={video.url}>
								<p className='text-lg text-pink-dark'>{video.title}</p>
								<div className='flex flex-wrap'>
									{video.tags.map(tags => <p className='text-sm ml-1'>{tags.tag_name}</p>)}
								</div>
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
