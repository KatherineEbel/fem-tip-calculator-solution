interface Props {
  label: string
  amount: string
}

export default function OutputResult({ label, amount }: Props) {
  return (
    <section className="flex flex-row-reverse justify-between">
      <h2 className="text-primary text-[2rem] desktop:text-5xl">${amount}</h2>
      <div>
        <h3 className="text-white">{label}</h3>
        <h4>/ person</h4>
      </div>
    </section>
  )
}
