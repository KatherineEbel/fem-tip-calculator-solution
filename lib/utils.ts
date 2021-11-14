import {
  CANT_BE_ZERO,
  INVALID_NUM_PEOPLE,
  INVALID_PRICE,
  UNEXPECTED_ERROR,
} from './constants'

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
  if (divider === 0) error = CANT_BE_ZERO
  if (isNaN(divider)) error = INVALID_NUM_PEOPLE
  if (isNaN(initialPrice)) error = INVALID_PRICE
  if (error) return { tipPerPerson: '0.00', totalPerPerson: '0.00', error }
  let tip = (+percent / 100) * initialPrice
  let totalPrice = tip + initialPrice
  let tipPerPerson = formatPrice(tip / divider)
  let totalPerPerson = formatPrice(totalPrice / divider)
  if (isNaN(+tipPerPerson) || isNaN(+totalPerPerson)) error = UNEXPECTED_ERROR
  return {
    totalPerPerson,
    tipPerPerson,
    error,
  }
}
