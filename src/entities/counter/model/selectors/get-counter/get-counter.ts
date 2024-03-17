import {
  DeepPartial,
  StateSchema,
} from 'app/providers/store-provider/lib/store.types'

export const getCounter = (state: DeepPartial<StateSchema>) => state.counter
