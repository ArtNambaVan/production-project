import React, { type HTMLProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

interface NavbarProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): React.ReactElement => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>/</div>

    </div>
  )
}
