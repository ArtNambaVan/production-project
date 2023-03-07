import 'app/styles/index.scss'
import { type Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import React from 'react'

export const StoreDecorator = (StoryComponent: Story): React.ReactElement => {
  return (
    <StoreProvider>
      <StoryComponent/>
    </StoreProvider>
  )
}
