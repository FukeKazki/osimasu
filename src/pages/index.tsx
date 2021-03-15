import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<h1>hello</h1>
		</Layout>
	)
}
