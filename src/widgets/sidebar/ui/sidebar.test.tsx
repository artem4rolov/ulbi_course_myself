import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from 'app/providers/tests'
import { SideBar } from './sidebar'

describe('Тест рендера компонента SideBar', () => {
  it('Проверка присутствия в DOM', async () => {
    renderWithProviders(<SideBar />)
    waitFor(() => expect(screen.getByTestId('sidebar')).toBeInTheDocument())
    screen.debug()
  })

  it('Тест работы кнопки по открытию сайдбара', () => {
    renderWithProviders(<SideBar />)
    const sidebar = screen.getByTestId('sidebar')
    const collapseBtn = screen.getByTestId('collapseBtn')

    fireEvent.click(collapseBtn)
    expect(sidebar).toHaveClass('opened')
  })
})
