import React, { type HTMLProps } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        label={t('input_username')}
        className={cls.input}
        autoFocus
      />
      <Input
        label={t('input_password')}
        className={cls.input}
      />
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
        {t('enter')}
      </Button>
    </div>
  )
}
