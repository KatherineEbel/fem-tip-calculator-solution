export interface TipResult {
  totalPerPerson: string
  tipPerPerson: string
  error?: string
}

const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
    .format(amount)
    .replace('$', '')
}

export const getTipResult = (
  bill: string,
  percent: number,
  numPeople: string,
): TipResult => {
  let error: string | undefined
  const initialPrice = parseFloat(bill)
  const divider = +numPeople
  if (divider === 0) error = "Can't be zero"
  if (isNaN(divider)) error = 'Invalid number of people'
  if (isNaN(initialPrice)) error = 'Invalid price provided'
  if (error) return { tipPerPerson: '0.00', totalPerPerson: '0.00', error }
  let tip = (+percent / 100) * initialPrice
  let totalPrice = tip + initialPrice
  let tipPerPerson = formatPrice(tip / divider)
  let totalPerPerson = formatPrice(totalPrice / divider)
  if (isNaN(+tipPerPerson) || isNaN(+totalPerPerson))
    error = 'Unexpected error occurred'
  return {
    totalPerPerson,
    tipPerPerson,
    error,
  }
}
