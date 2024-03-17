import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../../../entities/counter/model/slice/counter-slice'
import { StateSchema } from './store.types'

export function createStore(initialState: StateSchema) {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
