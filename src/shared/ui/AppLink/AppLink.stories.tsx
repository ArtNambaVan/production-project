import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'shared/AppLink',
  component: AppLink,

  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  to: '/',
  theme: AppLinkTheme.PRIMARY
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text',
  to: '/',
  theme: AppLinkTheme.SECONDARY
}

export const Red = Template.bind({})
Red.args = {
  children: 'Text',
  theme: AppLinkTheme.RED
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY

}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY

}

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark = Template.bind({})
RedDark.args = {
  children: 'Text',
  theme: AppLinkTheme.RED
}

RedDark.decorators = [ThemeDecorator(Theme.DARK)]
