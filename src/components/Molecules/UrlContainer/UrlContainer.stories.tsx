import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import UrlContainer, { Props } from './index'

export default {
	title: 'Example/UrlContainer',
	component: UrlContainer,
} as Meta

const Template: Story<Props> = (args) => <UrlContainer
	{...args}
/>

export const Snowman = Template.bind({})
Snowman.args = {
	title: 'スノウマンオフィシャルサイト',
	description: 'primary',
	image: 'https://avex.jp/snowman/ogp.png',
	url: 'https://avex.jp/snowman/',
}

export const Nogizaka = Template.bind({})
Nogizaka.args = {
	title: '乃木坂46「9th YEAR BIRTHDAY LIVE」1期生・2期生ライブ特設サイト',
	description: '乃木坂46公式サイト　私たちには、超えなければならない目標がある！',
	image: 'http://www.nogizaka46.com/9thyear_birthday_live_1ki2ki/assets/images/ogpimg.png',
	url: 'http://www.nogizaka46.com/9thyear_birthday_live_1ki2ki/'
}