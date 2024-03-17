import { StateSchema } from 'app/providers/store-provider/lib/store.types'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../model/slice/counter-slice'
import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value'

export const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ color: 'red', fontSize: '20px' }}>{value}</span>
      <button
        onClick={() => dispatch(increment())}
        style={{ padding: '10px', color: 'red', maxWidth: '100px' }}
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ padding: '10px', color: 'red', maxWidth: '100px' }}
      >
        -
      </button>
    </div>
  )
}
