import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Sidebar } from 'widgets/Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const storySidebar: ComponentMeta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar

}

export default storySidebar

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.agrs = {}

export const Dark = Template.bind({})
Dark.agrs = {}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
