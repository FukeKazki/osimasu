import { useContext } from 'react'
import Head from 'next/head'
import { ModeContext } from '../lib/provider/displayMode'
import {OsiDataContext} from '../lib/provider/osiData'
import Layout from '../components/Layout'
import Header from '../components/Organisms/Header'
import CardM from '../components/Organisms/CardM'
import ListCard from '../components/Organisms/ListCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faThLarge } from '@fortawesome/free-solid-svg-icons'

// 仮データ
// import { data } from '../lib/data'

export default function Home() {
	// 表示モード: GRID, LIST, MAP
	const { state, dispatch } = useContext(ModeContext)
	const osiContext = useContext(OsiDataContext)
	const data = osiContext.state.data
	console.log(state)

	return (
		<Layout>
			{/* Head: メタ要素 */}
			<Head>
				<title>Home</title>
			</Head>

			{/*	Header */}
			<Header title={'推しマス'} className='container' addHandler={() => osiContext.dispatch({type: 'ADD'})} />

			{/*	Main */}
			<main>
				{/*	Navigation */}
				<section className='container flex justify-end text-pink'>
					<FontAwesomeIcon icon={faListUl} size={'lg'} onClick={() => dispatch({type: 'LIST'})} className='cursor-pointer' />
					<FontAwesomeIcon icon={faThLarge} size={'lg'} className='ml-4 cursor-pointer' onClick={() => dispatch({type: 'GRID'})} />
				</section>
				{/*	Cards */}
				{state.mode === 'GRID' && (
					<section className='container grid grid-cols-2 gap-2 mt-4'>
						{data.map((osi, index) => {
							return (
								<CardM key={index} image={osi.image} title={osi.name} tags={osi.tags} id={osi.id} />
							)
						})}
					</section>
				)}
				{state.mode === 'LIST' && (
					<section className='mt-4'>
						{data.map((osi, index) => {
							return (
								<ListCard key={index} image={osi.image} title={osi.name} tags={osi.tags} id={osi.id} className={[!index && 'border-t-2'].join(' ')}/>
							)
						})}
					</section>
				)}
			</main>
		</Layout>
	)
}