import { FC } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../lib/store'
import { DeepPartial, StateSchema } from '../lib/store.types'

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
