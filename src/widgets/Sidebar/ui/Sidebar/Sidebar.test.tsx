import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

import { ComponentRender } from 'shared/config/tests/ComponentRender/ComponentRender'

describe('Sidebar', () => {
  test('Sidebar test 1', () => {
    ComponentRender(<Sidebar />, { route: '/' })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle sidebar', () => {
    ComponentRender(<Sidebar />, { route: '/' })
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
