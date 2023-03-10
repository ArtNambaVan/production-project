import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string
  children?: React.ReactNode
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

  return (
    <Link {...otherProps} to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  )
}
