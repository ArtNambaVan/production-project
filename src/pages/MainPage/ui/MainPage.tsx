import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Counter } from 'entities/Counter'

const MainPage = (): React.ReactElement => {
  const { t } = useTranslation('main')

  return (
    <div>
      <Counter />
      <BugButton/>
      {t('main_page')}
    </div>
  )
}

export default MainPage
