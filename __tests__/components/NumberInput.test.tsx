import { render, screen } from '@testing-library/react'
import NumberInput from 'components/NumberInput'
import userEvent from '@testing-library/user-event'

describe('Number Input', () => {
  it(`displays error message if letter entered in bill input`, async () => {
    render(<NumberInput label="Bill" iconName="dollar" onChange={() => {}} />)
    const input = screen.getByLabelText(/bill/i)
    userEvent.type(input, 'F')
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it(`doesn't display error message if backspace entered in bill input`, async () => {
    render(<NumberInput label="Bill" iconName="dollar" onChange={() => {}} />)
    const input = screen.getByLabelText(/bill/i)
    userEvent.type(input, '55.0')
    userEvent.keyboard('{Backspace}')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it(`doesn't display error message if Tab entered in bill input`, async () => {
    render(<NumberInput label="Bill" iconName="dollar" onChange={() => {}} />)
    const input = screen.getByLabelText(/bill/i)
    userEvent.type(input, '55.0')
    userEvent.keyboard('{Tab}')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
