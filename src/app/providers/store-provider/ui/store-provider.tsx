import { FC } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../lib/store'
import { StateSchema } from '../lib/store.types'

// почему-то изначально нет такого типа в этой версии typescript
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
}) => {
  const store = createStore(initialState as StateSchema)

  return <Provider store={store}>{children}</Provider>
}
