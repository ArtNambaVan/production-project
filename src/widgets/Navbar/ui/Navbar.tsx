import React, { type HTMLProps, useCallback, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, userActions } from 'entities/User'

interface NavbarProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): React.ReactElement => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserData)
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const authButton = useMemo(() => {
    return authData
      ? (
        <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
          {t('exit')}
        </Button>
        )
      : (
        <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
          {t('enter')}
        </Button>
        )
  }, [authData, onLogout, onShowModal, t])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {/* {!authData && ( */}
      {/*  <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}> */}
      {/*    {t('enter')} */}
      {/*  </Button> */}
      {/* )} */}
      {authButton}
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
    </div>
  )
}
