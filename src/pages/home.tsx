import { useContext } from 'react'
import Head from 'next/head'
import { ModeContext } from '../lib/provider/displayMode'
import Layout from '../components/Layout'
import Header from '../components/Organisms/Header'
import CardM from '../components/Organisms/CardM'
import ListCard from '../components/Organisms/ListCard'

// 仮データ
import { data } from '../lib/data'

export default function Home() {
	// 表示モード: GRID, LIST, MAP
	const { state, dispatch } = useContext(ModeContext)

	return (
		<Layout>
			{/* Head: メタ要素 */}
			<Head>
				<title>Home</title>
			</Head>

			{/*	Header */}
			<Header title={'header'} className='container' />

			{/*	Main */}
			<main>
				{/*	Navigation */}

				{/*	Cards */}
				<section className='container grid grid-cols-2 gap-2'>
					{data.map((osi, index) => {
						return (
							<CardM key={index} image={osi.image} title={osi.name} tags={osi.tags} />
						)
					})}
					
				</section>
			</main>
		</Layout>
	)
}