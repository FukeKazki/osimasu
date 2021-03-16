import {JSDOM} from 'jsdom'
import jquery from 'jquery'

export default async ({ query: { ogp }}, res) => {
	const dom = await JSDOM.fromURL(ogp)
	const $ = jquery(dom.window)

	const title = $('title').text()
	const description = $("meta[property='og:description']").attr("content");
	const image = $("meta[property='og:image']").attr("content");
	console.log(title, description, image)

	res.json({
		title: title,
		description: description,
		image: image,
	})
}