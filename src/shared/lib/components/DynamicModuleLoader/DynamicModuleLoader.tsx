import React, { type FC, useEffect } from 'react'

import { useDispatch, useStore } from 'react-redux'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemeKey } from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemeKey]?: Reducer
}

type ReducersListEntry = [StateSchemeKey, Reducer]

interface DynamicModuleLoaderProps {
  children: React.ReactNode

  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props
  const dispatch = useDispatch()

  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@INIT ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>{children}</>
  )
}
