import React, { type HTMLProps, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useAppDispatch } from 'app/providers/StoreProvider/lib/hooks'

interface LoginFormProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const { setUsername, setPassword } = loginActions
  const { password, username } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(setUsername(value))
  }, [dispatch, setUsername])

  const onChangePassword = useCallback((value: string) => {
    dispatch(setPassword(value))
  }, [dispatch, setPassword])

  const onLoginClock = useCallback(() => {
    void dispatch(loginByUsername({ username, password })).then(() => {
      // do additional work
    })
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        label={t('input_username')}
        className={cls.input}
        name='username'
        value={username}
        onChange={onChangeUsername}
        autoFocus
      />
      <Input
        label={t('input_password')}
        name='password'
        value={password}
        onChange={onChangePassword}
        className={cls.input}
      />
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} onClick={onLoginClock}>
        {t('enter')}
      </Button>
    </div>
  )
})
