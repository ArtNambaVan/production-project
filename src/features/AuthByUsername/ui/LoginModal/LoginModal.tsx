import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader/Loader'

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
