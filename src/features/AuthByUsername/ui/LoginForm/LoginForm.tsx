import React, { type HTMLProps, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useAppDispatch } from 'app/providers/StoreProvider/lib/useAppDispatch/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps extends Omit<HTMLProps<HTMLElement>, 'className'> {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    void dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('authenticate_form')}/>
        {error && <Text text={error} theme={TextTheme.ERROR} />}
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
        <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
          {t('enter')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
