import { render, screen } from '@testing-library/react'
import Home from 'pages'

describe('Home', () => {
  it(`renders`, async () => {
    render(<Home />)
    screen.getByRole('heading', { name: /splitter/i })
  })
})
