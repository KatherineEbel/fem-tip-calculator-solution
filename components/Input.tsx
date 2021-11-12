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
}
export default function Input({ label, iconName }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <div className="grid grid-rows-1 items-center">
        <div className="relative row-span-full col-span-full justify-self-start px-4">
          <Image src={icons[iconName]} alt={iconName} />
        </div>
        <input
          className="row-span-full col-span-full justify-self-end text-input"
          type="text"
          placeholder="0"
        />
      </div>
    </div>
  )
}
