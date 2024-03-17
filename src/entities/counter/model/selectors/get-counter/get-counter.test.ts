import { StateSchema, DeepPartial } from 'app/providers/store-provider'
import { getCounter } from './get-counter'

test('тест выбора слайса из стора redux', () => {
  const state: DeepPartial<StateSchema> = {
    counter: {
      value: 10,
    },
  }

  expect(getCounter(state)).toEqual({ value: 10 })
})
