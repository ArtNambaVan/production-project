import { type Story } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import React, { Suspense } from 'react'
import i18nForTests from 'shared/config/i18n/i18nForTests'

export const TranslationDecorator = (StoryComponent: Story) => {
  return (
    <I18nextProvider i18n={i18nForTests}>
      <Suspense fallback={''}>
        <StoryComponent />
      </Suspense>
    </I18nextProvider>
  )
}
