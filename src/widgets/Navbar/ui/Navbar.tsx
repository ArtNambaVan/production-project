import React, { type HTMLProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): React.ReactElement => {
  const { t } = useTranslation(['main', 'about'])
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>{t('main_page', { ns: 'main' })}</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('about_page', { ns: 'about' })}</AppLink>
      </div>

    </div>
  )
}