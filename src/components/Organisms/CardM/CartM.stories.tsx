import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import CardM, { Props } from './index'

export default {
	title: 'Example/CardM',
	component: CardM,
} as Meta

const Template: Story<Props> = args => <CardM {...args}/>

export const Primary = Template.bind({})

Primary.args = {
	title: 'タイトル',
	id: '',
	image: 'https://avex.jp/snowman/ogp.png',
	tags: ['タグ1', 'タグ2'],
}