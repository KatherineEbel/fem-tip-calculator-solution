import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TipForm from 'components/TipForm'

describe('TipForm', () => {
  it(`disables reset button until value entered in a field`, async () => {
    render(<TipForm />)
    const reset = screen.getByRole('button', { name: /reset/i })
    expect(reset).not.toBeEnabled()
    userEvent.type(screen.getByLabelText('Bill'), '44.25')
    expect(reset).toBeEnabled()
  })
  it(`displays the a tip result for correct input`, () => {
    render(<TipForm />)
    userEvent.type(screen.getByLabelText('Bill'), '55.0')
    userEvent.type(screen.getByLabelText('Number of People'), '1')
    userEvent.type(screen.getByLabelText('Custom Tip'), '15')
    screen.getByRole('heading', { name: '$8.25' })
    screen.getByRole('heading', { name: '$63.25' })
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
})
