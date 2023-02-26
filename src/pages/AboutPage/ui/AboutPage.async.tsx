import { lazy } from 'react'

// @ts-expect-error used for async pages
export const AboutPageAsync = lazy(async () => await new Promise(resolve => { setTimeout(() => { resolve(import('./AboutPage')) }, 1500) }))
