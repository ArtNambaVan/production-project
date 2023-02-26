import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageError } from './PageError'

const storyPageError: ComponentMeta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError

}

export default storyPageError

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Light = Template.bind({})
Light.agrs = {}

export const Dark = Template.bind({})
Dark.agrs = {}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
