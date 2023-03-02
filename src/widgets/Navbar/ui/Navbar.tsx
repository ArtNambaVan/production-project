import React, { type HTMLProps, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): React.ReactElement => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
        {t('enter')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis cupiditate distinctio dolores, ea et eveniet excepturi exercitationem explicabo incidunt modi molestias natus odio optio quo quos voluptatum. Placeat, velit.'}
      </Modal>
    </div>
  )
}
