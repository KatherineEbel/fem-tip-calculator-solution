import { render, screen } from '@testing-library/react'
import TipFieldset from 'components/TipFieldset'
import userEvent from '@testing-library/user-event'

describe('TipSelect', () => {
  it(`highlights 25% when selected`, async () => {
    render(<TipFieldset onTipSelect={() => {}} defaultValue={15} />)
    const twentyFivePercentRadio = screen.getByLabelText('25%')
    userEvent.click(twentyFivePercentRadio)
    const twentyFivePercentLabel = screen.getByText('25%')
    expect(twentyFivePercentLabel).toHaveClass('bg-primary')
  })

  it(`removes selected input when new custom value entered`, async () => {
    render(<TipFieldset onTipSelect={() => {}} defaultValue={15} />)
    const twentyFivePercentRadio = screen.getByLabelText('25%')
    userEvent.click(twentyFivePercentRadio)
    userEvent.type(screen.getByLabelText(/custom tip/i), '20')
    const twentyFivePercentLabel = screen.getByText('25%')
    expect(twentyFivePercentLabel).not.toHaveClass('bg-primary')
  })
})
