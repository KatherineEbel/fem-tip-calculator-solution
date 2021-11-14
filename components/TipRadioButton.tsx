import { ChangeEventHandler } from 'react'

interface Props {
  checked: boolean
  amount: number
  onChange: ChangeEventHandler
}
export default function TipRadioButton({ amount, checked, onChange }: Props) {
  const name = `tip-${amount}`
  return (
    <label
      htmlFor={name}
      className={`relative grid place-items-center btn ${
        checked ? 'bg-primary text-primary-dark' : 'bg-primary-dark text-white'
      }`}
    >
      {amount}%
      <input
        className="absolute h-0 w-0 opacity-0"
        type="radio"
        name={name}
        id={`tip-${amount}`}
        value={amount}
        checked={checked}
        onChange={onChange}
      />
    </label>
  )
}
