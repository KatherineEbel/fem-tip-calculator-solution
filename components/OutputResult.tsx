interface Props {
  label: string
  amount: string
}

export default function OutputResult({ label, amount }: Props) {
  return (
    <div className="flex flex-row-reverse justify-between">
      <h2 className="text-primary text-[2rem]">${amount}</h2>
      <div>
        <h3 className="text-white">{label}</h3>
        <p>/ person</p>
      </div>
    </div>
  )
}
