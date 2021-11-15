import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TipForm from 'components/TipForm'

describe('TipForm', () => {
  it(`can calculate tip result for correct input`, () => {
    render(<TipForm />)
    userEvent.type(screen.getByLabelText('Bill'), '55.0')
    userEvent.type(screen.getByLabelText('Number of People'), '1')
    userEvent.type(screen.getByLabelText('15%'), '15')
    screen.getByRole('heading', { name: '$8.25' })
    screen.getByRole('heading', { name: '$63.25' })
  })

  it(`can calculate custom tip for correct input`, () => {
    render(<TipForm />)
    userEvent.type(screen.getByLabelText('Bill'), '55.0')
    userEvent.type(screen.getByLabelText('Number of People'), '1')
    userEvent.type(screen.getByLabelText('Custom Tip'), '15')
    screen.getByRole('heading', { name: '$8.25' })
    screen.getByRole('heading', { name: '$63.25' })
  })

  describe('reset button', () => {
    it(`disables reset button until value entered in a field`, async () => {
      render(<TipForm />)
      const reset = screen.getByRole('button', { name: /reset/i })
      expect(reset).not.toBeEnabled()
      userEvent.type(screen.getByLabelText('Bill'), '44.25')
      expect(reset).toBeEnabled()
    })

    it(`resets the form when reset clicked`, () => {
      render(<TipForm />)
      userEvent.type(screen.getByLabelText('Bill'), '55.0')
      userEvent.type(screen.getByLabelText('Number of People'), '1')
      userEvent.type(screen.getByLabelText('Custom Tip'), '15')
      const tipAmount = screen.getByRole('heading', { name: '$8.25' })
      const totalAmount = screen.getByRole('heading', { name: '$63.25' })
      screen.getByRole('heading', { name: '$63.25' })
      userEvent.click(screen.getByText('Reset'))
      expect(tipAmount).toHaveTextContent('$0.00')
      expect(totalAmount).toHaveTextContent('$0.00')
    })
  })

  it(`can recalculate tip after initial calculation`, async () => {
    render(<TipForm />)
    const bill = screen.getByLabelText('Bill')
    const numPeople = screen.getByLabelText('Number of People')
    userEvent.type(bill, '55.0')
    userEvent.type(numPeople, '1')
    userEvent.type(screen.getByLabelText('Custom Tip'), '15')
    const tip = screen.getByRole('heading', { name: '$8.25' })
    const total = screen.getByRole('heading', { name: '$63.25' })

    userEvent.clear(bill)
    userEvent.type(bill, '20.00')
    expect(tip).toHaveTextContent('3.00')
    expect(total).toHaveTextContent('$23.00')
  })

  it(`can set custom tip to zero`, async () => {
    render(<TipForm />)
    const bill = screen.getByLabelText('Bill')
    const numPeople = screen.getByLabelText('Number of People')
    const customTip = screen.getByLabelText('Custom Tip')
    userEvent.type(bill, '55.0')
    userEvent.type(numPeople, '1')
    userEvent.type(customTip, '0')
    screen.getByRole('heading', { name: '$55.00' })
  })

  it(`disables submit input for not complete state`, async () => {
    render(<TipForm />)
    userEvent.type(screen.getByLabelText('Bill'), '55.0')
    expect(screen.getByText('Calculate Tip')).not.toBeEnabled()
  })

  it(`enables submit input for complete state`, async () => {
    render(<TipForm />)
    userEvent.type(screen.getByLabelText('Bill'), '55.0')
    userEvent.type(screen.getByLabelText('Number of People'), '1')
    userEvent.type(screen.getByLabelText('Custom Tip'), '15')
    expect(screen.getByText('Calculate Tip')).toBeEnabled()
  })

  it(`displays error message for bill input when invalid amount provided`, async () => {
    render(<TipForm />)
    userEvent.type(screen.getByLabelText('Bill'), 'foo')
    userEvent.type(screen.getByLabelText('Number of People'), '1')
    userEvent.type(screen.getByLabelText('Custom Tip'), '15')
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it(`displays error message for number of people input when 0 entered`, async () => {
    render(<TipForm />)
    userEvent.type(screen.getByLabelText('Bill'), '55.00')
    userEvent.type(screen.getByLabelText('Custom Tip'), '15')
    userEvent.type(screen.getByLabelText('Number of People'), '0')
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
