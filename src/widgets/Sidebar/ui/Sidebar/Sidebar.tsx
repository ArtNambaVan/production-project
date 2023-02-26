import React, { type HTMLProps, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

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
      <button
        data-testid='sidebar-toggle'
        onClick={onToggle}
      >{t('toggle')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
