export type Tags = [
	'HEADER',
	'GALLERY',
	'HEIGHT',
	'WEIGHT',
	'URL'
]

// export type block = {
// 	id: string
// 	tag: string
// 	html: string
// 	images?: string[]
// }

export type CommandBlock = {
	id: string
	tag: 'COMMAND'
	command: string
}

export type HeaderBlock = {
	id: string
	tag: 'HEADER'
	html: string
}

export type GalleryBlock = {
	id: string
	tag: 'GALLERY'
	images: string[]
}

export type HeightBlock = {
	id: string
	tag: 'HEIGHT'
	height: string
}

export type WeightBlock = {
	id: string
	tag: 'WEIGHT'
	weight: string
}

export type MeetBlock = {
	id: string
	tag: 'MEET'
	meet: string
}

export type UrlBlock = {
	id: string
	tag: 'URL'
	url: string
	image: string
	title: string
	description: string
}

export type block = HeaderBlock | GalleryBlock | HeightBlock | WeightBlock | UrlBlock | CommandBlock | MeetBlock

export type osi = {
	id: string
	name: string
	tags: string[]
	image: string
	blocks: block[]
}

export const data: osi[] = [
	{
		id: 'a',
		name: '大園桃子',
		tags: ['アイドル', '乃木坂'],
		image: 'https://thetv.jp/i/nw/1017396/10153976.jpg?w=615',
		blocks: [
			{id: 'c', tag: 'HEIGHT', height: '100'},
			{id: 'ava', tag: 'COMMAND', command: ''},
			{id: 'd', tag: 'WEIGHT', weight: '40'},
			{id: 'aaa', tag: 'COMMAND', command: ''},
			// {id: 'e', tag: 'GALLERY', images: ['https://www.nogizaka46.com/smph/member/img/oozonomomoko_prof.jpg','','','','','','','']},
			// {id: 'aac', tag: 'COMMAND', command: ''},
		],
	},
	{
		id: 'b',
		name: '大谷映美里',
		tags: ['アイドル', '=LOVE'],
		image: 'https://pics.prcm.jp/dd4d0e22774bf/83761604/jpeg/83761604_220x275.jpeg',
		blocks: [{id: 'aaa', tag: 'COMMAND', command: ''},],
	},
	{
		id: 'c',
		name: '与田祐希',
		tags: ['アイドル', '乃木坂'],
		image: 'https://thetv.jp/i/nw/1017396/10153976.jpg?w=615',
		blocks: [{id: 'aaa', tag: 'COMMAND', command: ''},],
	},
	{
		id: 'd',
		name: '山下美月',
		tags: ['アイドル', '=LOVE'],
		image: 'https://pics.prcm.jp/dd4d0e22774bf/83761604/jpeg/83761604_220x275.jpeg',
		blocks: [{id: 'aaa', tag: 'COMMAND', command: ''},],
	},
	{
		id: 'e',
		name: 'ああ',
		tags: [],
		image: 'https://placehold.jp/400x400.png',
		blocks: [{id: 'aaa', tag: 'COMMAND', command: ''},],
	}
]