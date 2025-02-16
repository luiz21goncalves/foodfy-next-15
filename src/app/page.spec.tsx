import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from './page'

describe('Home',() => {
  it('should render the heading', () => {
    render(<Home/>)

    expect(screen.getByRole('heading')).toHaveTextContent("Home")
  })
})
