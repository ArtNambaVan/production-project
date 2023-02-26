import React, { type HTMLProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

interface LoaderProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const Loader = ({ className }: LoaderProps): React.ReactElement => {
  return (
    <span className={classNames(cls.Loader, {}, [className])}/>
  )
}
