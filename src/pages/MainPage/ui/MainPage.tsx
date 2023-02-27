import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage = (): React.ReactElement => {
  const { t } = useTranslation('main')

  return (
    <div>
      <BugButton/>
      {t('main_page')}
    </div>
  )
}

export default MainPage