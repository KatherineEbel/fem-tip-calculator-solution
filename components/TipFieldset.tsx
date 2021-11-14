import TipRadioButton from './TipRadioButton'
import { useState } from 'react'
import TIP_AMOUNTS from '../lib/constants'

interface Props {
  onTipSelect: (amount: number) => void
  defaultValue: number
}

export default function TipFieldset({ defaultValue, onTipSelect }: Props) {
  const [tip, setTip] = useState<number | undefined>(defaultValue)
  const [customTip, setCustomTip] = useState<string>('')

  const handleChange = (type: 'radio' | 'number', value: number) => {
    if (type === 'number') {
      setCustomTip(value + '')
    }
    if (type === 'radio') {
      // clear custom tip if radio selected
      setCustomTip('')
    }
    // update tip value and send value to TipForm
    setTip(+value)
    onTipSelect(+value)
  }

  return (
    <fieldset>
      <legend className="mb-4 block">Select Tip %</legend>
      <div className="tips">
        {TIP_AMOUNTS.map((v) => (
          <TipRadioButton
            key={v}
            checked={tip === v}
            amount={v}
            onChange={handleChange}
          />
        ))}
        <div>
          <label htmlFor="custom-tip" className="sr-only">
            Custom Tip
          </label>
          <input
            className="text-input placeholder-shown:text-center placeholder-primary-medium-dark placeholder-opacity-100"
            type="number"
            placeholder="Custom"
            name="custom-tip"
            id="custom-tip"
            value={customTip}
            onChange={({ target: { type, value } }) => {
              if (isNaN(+value)) return
              handleChange('number', +value)
            }}
          />
        </div>
      </div>
    </fieldset>
  )
}
