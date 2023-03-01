import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  className?: string
  theme?: ButtonTheme
  children?: ReactNode
  backgroundColor?: string
  square?: boolean
  size?: ButtonSize
}

export const Button = (props: ButtonProps): React.ReactElement => {
  const { className, children, theme = ButtonTheme.CLEAR, square = false, size = ButtonSize.M, ...otherProps } = props

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true
  }

  return (
    <button className={classNames(cls.Button, mods, [className])} {...otherProps} >
      {children}
    </button>
  )
}
