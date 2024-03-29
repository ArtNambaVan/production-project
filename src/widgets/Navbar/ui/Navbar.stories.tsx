import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const storyNavbar: ComponentMeta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar
}

export default storyNavbar

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.agrs = {}
Light.decorators = [StoreDecorator({
})]

export const Dark = Template.bind({})
Dark.agrs = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})]
