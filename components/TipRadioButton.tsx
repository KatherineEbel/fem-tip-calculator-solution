import { useState } from 'react'

interface Props {
  checked: boolean
  amount: number
  onChange: (type: 'radio' | 'number', value: number) => void
}

export default function TipRadioButton({ amount, checked, onChange }: Props) {
  const [localValue, setLocalValue] = useState(amount)
  const name = `tip-${amount}`

  const handleSelect = (value: number = localValue) => {
    onChange('radio', value)
  }

  return (
    <div className="tip-radio-wrapper">
      <input
        className="absolute h-0 w-0 opacity-0"
        type="radio"
        name={name}
        id={`tip-${amount}`}
        value={amount}
        checked={checked}
        onKeyUp={(e) => {
          if (e.key === 'Enter') handleSelect()
        }}
        onChange={(e) => {
          setLocalValue(+e.target.value)
          handleSelect(+e.target.value)
        }}
      />
      <label
        htmlFor={name}
        className={`relative grid place-items-center btn  ${
          checked
            ? 'bg-primary text-primary-dark'
            : 'bg-primary-dark text-white'
        }`}
      >
        {amount}%
      </label>
    </div>
  )
}
