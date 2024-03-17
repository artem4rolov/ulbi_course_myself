import { StateSchema } from 'app/providers/store-provider/lib/store.types'

export const getCounter = (state: StateSchema) => state.counter
