import React, { type HTMLProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps): React.ReactElement => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
