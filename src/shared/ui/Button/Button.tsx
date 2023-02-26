import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  className?: string
  theme?: ThemeButton
  children?: ReactNode
  backgroundColor?: string
}

export const Button = (props: ButtonProps): React.ReactElement => {
  const { className, children, theme, ...otherProps } = props
  return (
    <button className={classNames(cls.Button, {}, [theme && cls[theme], className])} {...otherProps} >
      {children}
    </button>
  )
}
