import React, { type HTMLProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const PageError = ({ className }: PageErrorProps): React.ReactElement => {
  const { t } = useTranslation()
  const reloadPage = (): void => {
    window.location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('error_occurred')}</p>
      <Button onClick={reloadPage}>{t('reload_page')}</Button>
    </div>
  )
}
