import { render, screen } from '@testing-library/react'
import TipSelect from 'components/TipSelect'
import userEvent from '@testing-library/user-event'

describe('TipSelect', () => {
  it(`sets highlights 25% when selected`, async () => {
    render(<TipSelect onTipSelect={() => {}} defaultValue={15} />)
    const twentyFivePercentRadio = screen.getByLabelText('25%')
    userEvent.click(twentyFivePercentRadio)
    const twentyFivePercentLabel = screen.getByText('25%')
    expect(twentyFivePercentLabel).toHaveClass('bg-primary')
  })

  it(`removes selected input when new custom value entered`, async () => {
    render(<TipSelect onTipSelect={() => {}} defaultValue={15} />)
    const twentyFivePercentRadio = screen.getByLabelText('25%')
    userEvent.click(twentyFivePercentRadio)
    userEvent.type(screen.getByLabelText(/custom tip/i), '20')
    const twentyFivePercentLabel = screen.getByText('25%')
    expect(twentyFivePercentLabel).not.toHaveClass('bg-primary')
  })
})
