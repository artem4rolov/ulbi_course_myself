import { CounterSchema } from 'entities/counter/model/types/counter-slice.types'

export interface StateSchema {
  counter: CounterSchema
}

// почему-то изначально нет такого типа в этой версии typescript
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}
