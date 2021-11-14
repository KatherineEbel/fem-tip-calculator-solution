import { getTipResult, TipResult } from '../utils'
import { useEffect, useReducer } from 'react'

enum TipActionKind {
  SET_BILL = 'SET_BILL',
  SET_TIP = 'SET_TIP',
  SET_NUM_PEOPLE = 'SET_NUM_PEOPLE',
  CALCULATE_RESULT = 'SET_TIP_RESULT',
  RESET = 'RESET',
}

interface TipAction {
  type: TipActionKind
  payload?: Partial<Pick<TipState, 'bill' | 'tip' | 'numPeople'>>
}

interface TipState {
  bill: string
  tip: number
  numPeople: string
  complete: boolean
  empty: boolean
  result?: TipResult
}

const initialState = {
  tip: 0,
  bill: '',
  numPeople: '',
  complete: false,
  empty: true,
  result: undefined,
}

function tipReducer(state: TipState, { type, payload }: TipAction): TipState {
  const { bill, tip, numPeople } = state
  switch (type) {
    case TipActionKind.SET_BILL:
    case TipActionKind.SET_TIP:
    case TipActionKind.SET_NUM_PEOPLE:
      const updatedState = Object.values({ bill, tip, numPeople, ...payload })
      const empty = updatedState.every((v) => {
        return v === '' || v === 0
      })
      const complete = empty ? false : updatedState.every((v) => v)
      return { ...state, ...payload, complete, empty }
    case TipActionKind.CALCULATE_RESULT:
      const result = getTipResult(bill, tip, numPeople)
      return {
        ...state,
        result,
      }
    case TipActionKind.RESET:
      return initialState
    default:
      console.log('Unhandled TipAction', type)
      return state
  }
}

export default function useTip() {
  const [state, dispatch] = useReducer(tipReducer, initialState)

  useEffect(() => {
    if (!state.complete) return
    calculateTip()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.bill, state.tip, state.numPeople, state.complete])

  const setBill = (value: string) =>
    dispatch({ type: TipActionKind.SET_BILL, payload: { bill: value } })
  const setTip = (value: number) =>
    dispatch({ type: TipActionKind.SET_TIP, payload: { tip: value } })
  const setNumPeople = (value: string) =>
    dispatch({
      type: TipActionKind.SET_NUM_PEOPLE,
      payload: { numPeople: value },
    })
  const reset = () => dispatch({ type: TipActionKind.RESET })
  const calculateTip = () => dispatch({ type: TipActionKind.CALCULATE_RESULT })

  return { ...state, setBill, setTip, setNumPeople, calculateTip, reset }
}
