export default function TipSelect() {
  return (
    <div>
      <label className="mb-4 block">Select Tip %</label>
      <ul className="tips">
        <li>
          <button className="btn percent-btn">5%</button>
        </li>
        <li>
          <button className="btn percent-btn">10%</button>
        </li>
        <li>
          <button className="btn percent-btn">15%</button>
        </li>
        <li>
          <button className="btn percent-btn">25%</button>
        </li>
        <li>
          <button className="btn percent-btn">50%</button>
        </li>
        <li>
          <input className="text-input" type="text" placeholder="Custom" />
        </li>
      </ul>
    </div>
  )
}
