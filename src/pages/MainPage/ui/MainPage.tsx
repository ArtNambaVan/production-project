import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Input } from 'shared/ui/Input/Input'

const MainPage = (): React.ReactElement => {
  const [value, setValue] = useState('')
  const { t } = useTranslation('main')

  const onChange = (value: string) => {
    setValue(value)
  }
  return (
    <div>
      <Input value={value} label='Введите текст ' onChange={onChange}/>
      <BugButton/>
      <div id='target'>TEST</div>
      {t('main_page')}
    </div>
  )
}

export default MainPage
