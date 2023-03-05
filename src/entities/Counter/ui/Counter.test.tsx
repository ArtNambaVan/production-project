import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'

import { ComponentRender } from 'shared/config/tests/ComponentRender/ComponentRender'

describe('Counter', () => {
  test('Counter exist', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('Counter increment', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    fireEvent.click(screen.getByTestId('increment-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('Counter decrement', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    fireEvent.click(screen.getByTestId('decrement-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
