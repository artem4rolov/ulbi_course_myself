import { StateSchema } from '../../../../../app/providers/store-provider/lib/store.types'
import { DeepPartial } from '@reduxjs/toolkit'
import { getCounter } from './get-counter'

test('тест выбора слайса из стора redux', () => {
  const state: DeepPartial<StateSchema> = {
    counter: {
      value: 0,
    },
  }

  expect(getCounter(state)).toBe({ value: 0 })
})
