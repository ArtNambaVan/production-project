import 'app/styles/index.scss'
import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

export const RouterDecorator = (StoryComponent: Story): React.ReactElement => {
  return (
    <BrowserRouter>
      <StoryComponent/>
    </BrowserRouter>
  )
}
