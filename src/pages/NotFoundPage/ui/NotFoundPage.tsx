import React, { type HTMLProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('page_not_found')}
    </div>
  )
}
