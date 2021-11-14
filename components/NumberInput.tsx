import Image from 'next/image'
import dollar from 'public/images/icon-dollar.svg'
import person from 'public/images/icon-person.svg'

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

export default function NumberInput({
  label,
  iconName,
  onChange,
  value,
  error,
}: Props) {
  const name = label.toLowerCase().split(' ').join('-')
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label htmlFor={name}>{label}</label>
        {error && <span className="text-error">{error}</span>}
      </div>
      <div className="grid grid-rows-1 items-center">
        <div className="relative row-span-full col-span-full justify-self-start px-4">
          <Image src={icons[iconName]} alt={iconName} />
        </div>
        <input
          name={name}
          id={name}
          className={`row-span-full col-span-full justify-self-end text-input ${
            error ? 'outline-error' : ''
          }`}
          type="number"
          placeholder="0"
          value={value}
          onChange={({ target: { value } }) => {
            onChange(value)
          }}
        />
      </div>
    </div>
  )
}
