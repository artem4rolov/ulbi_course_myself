import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Тест рендера компонента <Button />', () => {
  it('Рендер компонента Button без указания пропсов', () => {
    render(<Button children={''} />)
    screen.debug()
  })

  //   it('рендер компонента', () => {
  //     render(<Button children={''} />)
  //   })
})
