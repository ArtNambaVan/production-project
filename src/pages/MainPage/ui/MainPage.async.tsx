import { lazy } from 'react'

// @ts-expect-error used for async pages
export const MainPageAsync = lazy(async () => await new Promise(resolve => { setTimeout(() => { resolve(import('./MainPage')) }, 1500) }))
