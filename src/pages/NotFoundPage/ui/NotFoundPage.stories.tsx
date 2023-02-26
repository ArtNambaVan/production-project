import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage

} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
