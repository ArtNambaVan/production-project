import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Input',
  component: Input

} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  value: 'Text Primary',
  label: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  value: 'Text Secondary',
  label: 'Secondary'
}

Secondary.decorators = [ThemeDecorator(Theme.DARK)]
