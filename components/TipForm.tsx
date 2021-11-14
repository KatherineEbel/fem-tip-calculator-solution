import NumberInput from './NumberInput'
import TipFieldset from './TipFieldset'
import OutputResult from './OutputResult'
import useTip from 'lib/hooks/useTip'

export default function TipForm() {
  const {
    bill,
    tip,
    numPeople,
    result,
    complete,
    empty,
    setBill,
    setTip,
    setNumPeople,
    reset,
    calculateTip,
  } = useTip()

  return (
    <form
      className="tip-form"
      onReset={reset}
      onSubmit={(e) => {
        e.preventDefault()
        calculateTip()
      }}
    >
      <div className="flex flex-col gap-10">
        <NumberInput
          label="Bill"
          iconName="dollar"
          value={bill}
          error={result?.error?.includes('price') ? result?.error : ''}
          onChange={setBill}
        />
        <TipFieldset defaultValue={tip} onTipSelect={setTip} />
        <NumberInput
          label="Number of People"
          iconName="person"
          value={numPeople}
          error={result?.error?.includes('zero') ? result?.error : ''}
          onChange={setNumPeople}
        />
      </div>
      <div className="output-container">
        <div className="flex flex-col gap-10">
          <OutputResult
            label="Tip Amount"
            amount={result?.tipPerPerson ?? '0.00'}
          />
          <OutputResult
            label="Total"
            amount={result?.totalPerPerson ?? '0.00'}
          />
        </div>
        <button
          className="btn btn-reset font-bold focus:outline-primary"
          type="reset"
          disabled={empty}
        >
          Reset
        </button>
      </div>
      <input
        className="sr-only"
        type="submit"
        value="Calculate Tip"
        disabled={!complete}
      />
    </form>
  )
}
