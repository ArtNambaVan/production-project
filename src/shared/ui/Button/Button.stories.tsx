import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Button',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text Primary'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}

export const OutlineL = Template.bind({})
OutlineL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L
}

export const OutlineXL = Template.bind({})
OutlineXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND
}

export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND
}

BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const SquareM = Template.bind({})
SquareM.args = {
  children: '>',
  square: true,
  size: ButtonSize.M,
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const SquareL = Template.bind({})
SquareL.args = {
  children: '>',
  square: true,
  size: ButtonSize.L,
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const SquareXL = Template.bind({})
SquareXL.args = {
  children: '>',
  square: true,
  size: ButtonSize.XL,
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: '>',
  disabled: true,
  size: ButtonSize.XL,
  theme: ButtonTheme.BACKGROUND_INVERTED
}
