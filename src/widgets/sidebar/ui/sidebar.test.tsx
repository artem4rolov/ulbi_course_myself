import { render, screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from 'app/providers/tests'
import { SideBar } from './sidebar'

describe('Тест рендера компонента SideBar', () => {
  it('Проверка присутствия в DOM', async () => {
    renderWithProviders(<SideBar />)
    waitFor(() => expect(screen.getByTestId('sidebar')).toBeInTheDocument())
    screen.debug()

    // expect(screen.getByText('title')).toBeInTheDocument()
  })

  //   it('рендер компонента', () => {
  //     render(<Button children={''} />)
  //   })
})
