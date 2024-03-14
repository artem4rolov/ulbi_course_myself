import { screen } from '@testing-library/react'
import { AboutPage } from './about-page'
import { renderWithProviders } from 'app'

describe('Тест рендера страницы <AboutPage />', () => {
  it('Проверка присутствия в DOM', () => {
    renderWithProviders(<AboutPage />)
    screen.debug()
    expect(screen.getByText('title')).toBeInTheDocument()
  })

  //   it('рендер компонента', () => {
  //     render(<Button children={''} />)
  //   })
})
