import Input from './Input'
import TipSelect from './TipSelect'
import OutputResult from './OutputResult'

export default function TipForm() {
  return (
    <form className="tip-form">
      <div className="flex flex-col gap-10">
        <Input label="Bill" iconName="dollar" />
        <TipSelect />
        <Input label="Number of People" iconName="person" />
      </div>
      <div className="flex flex-col gap-12 desktop:justify-between bg-primary-dark rounded-2xl p-10">
        <section className="flex flex-col gap-10">
          <OutputResult label="Tip Amount" amount="0.00" />
          <OutputResult label="Total" amount="0.00" />
        </section>
        <button className="btn btn-reset" type="reset" disabled>
          Reset
        </button>
      </div>
    </form>
  )
}
