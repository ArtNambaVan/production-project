import React, { type HTMLProps, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routConfig/routConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps): React.ReactElement => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }
  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >{collapsed ? '>' : '<'}</Button>
      <div className={cls.items}>
        <div className={cls.item}>
          <AppLink
            to={RoutePath.main}
            className={cls.link}
            theme={AppLinkTheme.SECONDARY}
          >
            <MainIcon className={cls.icon}/>
            <span className={cls.linkName}>{t('main_page', { ns: 'main' })}</span>
          </AppLink>
        </div>
        <div className={cls.item}>
          <AppLink
            to={RoutePath.about}
            className={cls.link}
            theme={AppLinkTheme.SECONDARY}
          >
            <AboutIcon className={cls.icon}/>
            <span className={cls.linkName}>{t('about_page', { ns: 'about' })}</span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  )
}
