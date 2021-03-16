import React, { useState, useEffect } from 'react'
import ContentEditable from 'react-contenteditable'
import { useAutoFocus } from '../../../lib/hooks/useAutoFocus'
import ContentsSelectMenu from '../../Molecules/ContentsSelectMenu'
import GalleyImage from '../../Molecules/GalleyImage'
import UrlContainer from '../../Molecules/UrlContainer'
import GalleryEditableBlock from '../GalleryEditableBlock'

const tags = [
	{
		name: 'HEADER',
		label: 'h1'
	},
	{
		name: 'countCard',
		label: '出会って何日?'
	},
	{
		name: 'WEIGHT',
		label: '体重'
	},
	{
		name: 'HEIGHT',
		label: '身長'
	},
	{
		name: 'GALLERY',
		label: 'ギャラリー'
	},
	{
		name: 'URL',
		label: 'url'
	}
]

type Props = {
	id: string
	tag: string
	html: string
	addBlock: () => void
	addHeightBlock: () => void
	updateBlock: (arg) => void
}

const EditableBlock: React.FC<Props> = (props) => {
	const contentEditable = useAutoFocus()
	const [html, setHtml] = useState(props.html)
	const [tag, setTag] = useState(props.tag)
	const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false)

	const [ogp, setOgp] = useState({
		title: '',
		description: '',
		image: '',
	})

	useEffect(() => {
		isUrl()
	}, [html])

	const [thumbnail, setThumbnail] = useState(null)

	const handleChange = (e) => {
		setHtml(e.target.value)
		props.updateBlock({
			id: props.id,
			html: e.target.value,
			tag: props.tag
		})
	}

	const onKeydownHandler = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			props.addBlock()
		}
		if (e.key === '/') {
			openSelectMenuHandler()
		}
	}

	const openSelectMenuHandler = () => {
		setSelectMenuIsOpen(true)
		document.addEventListener('click', closeSelectMenuHandler)
	}

	const closeSelectMenuHandler = () => {
		setSelectMenuIsOpen(false)
		document.removeEventListener('click', closeSelectMenuHandler)
	}

	const tagSelectionHandler = (tag: string) => {
		setTag(tag)
		if (tag === 'countCard') {
			setHtml('100')
			props.addBlock()
		}
		if (tag === 'HEIGHT') {
			props.addHeightBlock()
		}
		// if (tag === 'url') {
		// 	fetchOGP()
		// }

		closeSelectMenuHandler()
	}

	const imageLoadHandler = async (e) => {
		const file = e.target.files.item(0)
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			console.log(reader.result)
			setThumbnail(reader.result)
		}
	}

	const isUrl = () => {
		const pattern = /^(https|http):/
		return pattern.test(html)
	}

	const fetchOGP = async () => {
		const url = html
		const encodedUrl = encodeURIComponent(url)
		const res = await fetch(`/api/${encodedUrl}`)
		const content = await res.json()
		console.log(content)
		setOgp(content)
		setHtml('')
	}

	return (
		<>
			{isUrl() && <button onClick={fetchOGP}>取得する</button>}
			{selectMenuIsOpen && <ContentsSelectMenu tags={tags} onSelect={tagSelectionHandler} />}
			{tag === 'countCard' ? (
				<div className='text-center py-2 bg-pink-100'>
					<p>出会って</p>
					<ContentEditable innerRef={contentEditable} html={html} onChange={handleChange} tagName='span' />
					<span>日</span>
					<p>になりました</p>
				</div>
			) : tag === 'HEADER' ? (
				<h1 className='text-center text-4xl'>
					<ContentEditable html={html} onChange={handleChange} tagName={'span'}
									 onKeyDown={onKeydownHandler} />
				</h1>
			) : tag === 'WEIGHT' ? (
				<div className='text-center bg-pink-300'>
					<p>体重</p>
					<ContentEditable innerRef={contentEditable} html={html} onChange={handleChange} tagName='span' />
					<span>kg</span>
				</div>
			) : tag === 'GALLERY' ? (
				<div className='flex overflow-x-scroll'>
					<ul>
						<li>
							<GalleyImage className='w-28 h-28 bg-pink-300' handleChange={imageLoadHandler} image={thumbnail}/>
						</li>
						<li>
							<GalleyImage className='w-28 h-28 bg-pink-500' handleChange={imageLoadHandler} image={thumbnail}/>
						</li>
					</ul>
					<ul>
						<li>
							<div className='w-28 h-28 bg-pink-500'></div>
						</li>
						<li>
							<div className='w-28 h-28 bg-pink-300'></div>
						</li>
					</ul>
					<ul>
						<li>
							<div className='w-28 h-28 bg-pink-300'></div>
						</li>
						<li>
							<div className='w-28 h-28 bg-pink-500'></div>
						</li>
					</ul>
					<ul>
						<li>
							<div className='w-28 h-28 bg-pink-500'></div>
						</li>
						<li>
							<div className='w-28 h-28 bg-pink-300'></div>
						</li>
					</ul>
				</div>
			) : ogp.title !== '' ? (
				<section className='container'>
					<UrlContainer title={ogp.title} description={ogp.description} image={ogp.image}/>
				</section>
			) : (
				<ContentEditable
					innerRef={contentEditable}
					html={html}
					tagName={tag}
					onChange={handleChange}
					onKeyDown={onKeydownHandler}
				/>
			)}

		</>
	)
}

export default EditableBlock