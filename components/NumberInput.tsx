import { useState } from 'react'
import Image from 'next/image'
import dollar from 'public/images/icon-dollar.svg'
import person from 'public/images/icon-person.svg'
import { INVALID_NUMBER } from 'lib/constants'

type InputIcon = 'dollar' | 'person'
const icons: Record<string, any> = {
  dollar,
  person,
}

interface Props {
  label: string
  iconName: InputIcon
  value?: string
  onChange: (value: string) => void
  error?: string
}

// TODO: better type?
const errorMap: Record<string, any> = {
  bill: {
    matcher: new RegExp(/[0-9.]/i),
  },
  'number-of-people': {
    matcher: new RegExp(/[0-9]/i),
  },
}

export default function NumberInput({
  label,
  iconName,
  onChange,
  value,
  error,
}: Props) {
  const [localValue, setLocalValue] = useState(value || '')
  const [localError, setLocalError] = useState('')
  const name = label.toLowerCase().split(' ').join('-')
  const matcher = errorMap[name].matcher
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label htmlFor={name}>{label}</label>
        {(error || localError) && (
          <span className="text-error" role="alert">
            {error && error}
            {localError && localError}
          </span>
        )}
      </div>
      <div className="grid grid-rows-1 items-center">
        <div className="relative row-span-full col-span-full justify-self-start px-4">
          <Image src={icons[iconName]} alt={iconName} />
        </div>
        <input
          name={name}
          id={name}
          className={`row-span-full col-span-full justify-self-end text-input text-primary-dark placeholder-primary-dark placeholder-opacity-35 ${
            localError || error ? 'outline-error' : ''
          }`}
          type="number"
          placeholder="0"
          value={value}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onChange(localValue)
              return
            }
            if (!matcher.test(e.key)) {
              if (/Backspace|Tab/.test(e.key)) {
                return
              }
              setLocalError(INVALID_NUMBER)
            }
          }}
          onChange={({ target: { value } }) => {
            if (localError) setLocalError('')
            setLocalValue(value)
            onChange(value)
          }}
        />
      </div>
    </div>
  )
}
