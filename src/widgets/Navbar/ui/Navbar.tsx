import React, { type HTMLProps, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): React.ReactElement => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
        {t('enter')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
    </div>
  )
}
