import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter = (): React.ReactElement => {
  const { t } = useTranslation()
  const count = useSelector(getCounterValue)
  const { increment, decrement } = counterActions
  const dispatch = useDispatch()

  return (
    <div>
      <h1 data-testid='value-title'>{count}</h1>
      <Button theme={ButtonTheme.OUTLINE} data-testid='increment-button' onClick={() => dispatch(increment())}>{t('increment')}</Button>
      <Button theme={ButtonTheme.OUTLINE} data-testid='decrement-button' onClick={() => dispatch(decrement())}>{t('decrement')}</Button>
    </div>
  )
}
