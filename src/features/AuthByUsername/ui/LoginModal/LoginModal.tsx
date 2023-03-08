import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps extends React.ComponentPropsWithoutRef<typeof Modal> {
  className?: string
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps): React.ReactElement => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [className])}
    >
      <LoginForm />
    </Modal>
  )
}
