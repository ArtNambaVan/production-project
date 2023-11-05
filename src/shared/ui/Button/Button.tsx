import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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
  disabled?: boolean
}

export const Button = (props: ButtonProps): React.ReactElement => {
  const { className, children, theme = ButtonTheme.CLEAR, square = false, size = ButtonSize.M, disabled = false, ...otherProps } = props

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled
  }

  return (
    <button className={classNames(cls.Button, mods, [className])} disabled={disabled} {...otherProps} >
      {children}
    </button>
  )
}
