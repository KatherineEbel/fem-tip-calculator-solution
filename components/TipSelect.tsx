import TipRadioButton from './TipRadioButton'
import { ChangeEventHandler, useState } from 'react'
import TIP_AMOUNTS from '../lib/constants'

interface Props {
  onTipSelect: (amount: number) => void
  defaultValue: number
}

export default function TipSelect({ defaultValue, onTipSelect }: Props) {
  const [tip, setTip] = useState<number | undefined>(defaultValue)
  const [customTip, setCustomTip] = useState<string>('')

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { type, value },
  }) => {
    if (type === 'number') {
      if (isNaN(+value)) return
      setCustomTip(value)
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
    <div>
      <label htmlFor="tip" className="mb-4 block">
        Select Tip %
      </label>
      <ul className="tips">
        {TIP_AMOUNTS.map((v) => (
          <li key={v}>
            <TipRadioButton
              checked={tip === v}
              amount={v}
              onChange={handleChange}
            />
          </li>
        ))}
        <li>
          <label htmlFor="custom-tip" className="sr-only">
            Custom Tip
          </label>
          <input
            className="text-input"
            type="number"
            placeholder="Custom"
            name="custom-tip"
            id="custom-tip"
            value={customTip}
            onChange={handleChange}
          />
        </li>
      </ul>
    </div>
  )
}
