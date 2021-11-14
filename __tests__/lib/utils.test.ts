import { getTipResult } from 'lib/utils'
import { expect } from '@jest/globals'

describe('utils', () => {
  describe('getTipResult', () => {
    it(`returns correct result for bill with 5% tip and 1 person`, async () => {
      const actual = getTipResult('5.99', 5, '1')
      expect(actual.error).toBeUndefined()
      expect(actual).toEqual({
        tipPerPerson: '0.30',
        totalPerPerson: '6.29',
      })
    })

    it(`returns correct result for bill with 10% tip and 2 people`, async () => {
      const actual = getTipResult('30.85', 10, '2')
      expect(actual.error).toBeUndefined()
      expect(actual).toEqual({
        tipPerPerson: '1.54',
        totalPerPerson: '16.97',
      })
    })

    it(`has correct error if invalid bill amount provided`, async () => {
      const actual = getTipResult('foo', 5, '1')
      expect(actual.error).not.toBeUndefined()
      expect(actual.error).toBe('Invalid price provided')
    })

    it(`has correct error if num People is 0`, async () => {
      const actual = getTipResult('5.99', 5, '0')
      expect(actual.error).not.toBeUndefined()
      expect(actual.error).toBe("Can't be zero")
    })

    it(`throws an error if num People is not a number`, async () => {
      const actual = getTipResult('5.99', 5, 'O')
      expect(actual.error).not.toBeUndefined()
      expect(actual.error).toBe('Invalid number of people')
    })
  })
})
