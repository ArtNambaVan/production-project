import { useDispatch } from 'react-redux'
import { type createReduxStore } from 'app/providers/StoreProvider'

export const useAppDispatch = () => useDispatch<ReturnType<typeof createReduxStore>['dispatch']>()
