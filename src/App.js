import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Tipcalculator />
    </div>
  );
}

function Tipcalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercantage1] = useState(0);
  const [percentage2, setPercantage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercantage1(0);
    setPercantage2(0);
  }

  return (
    <div className="calculator">
      <Billinput bill={bill} onsetBill={setBill} />
      <ServiceRating percent={percentage1} onSelect={setPercantage1}>
        How did you like the service?
      </ServiceRating>
      <ServiceRating percent={percentage2} onSelect={setPercantage2}>
        How did your friend like the service?
      </ServiceRating>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}

function Billinput({ bill, onsetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill-Value"
        value={bill}
        onChange={(e) => onsetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function ServiceRating({ children, percent, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percent}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip})
    </h3>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset!</button>;
}
