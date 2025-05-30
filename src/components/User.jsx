import { useState } from "react";

function User() {
  const [initalInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const handleInputChange = (setter) => (event) => {
    const value = event.target.value;
    setter(value);
  };

  return (
    <main id="user-input" className="input-group">
      <label htmlFor="initial-investment">
        Initial Investment
        <input
          type="number"
          id="initial-investment"
          value={initalInvestment}
          onChange={handleInputChange(setInitialInvestment)}
        />
      </label>
      <label htmlFor="annual-investment">
        Annual Investment
        <input
          type="number"
          id="annual-investment"
          value={annualInvestment}
          onChange={handleInputChange(setAnnualInvestment)}
        />
      </label>

      <label htmlFor="return">
        Expected Return
        <input
          type="number"
          id="return"
          value={expectedReturn}
          onChange={handleInputChange(setExpectedReturn)}
        />
      </label>
      <label htmlFor="duration">
        Duration
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={handleInputChange(setDuration)}
        />
      </label>
    </main>
  );
}
export default User;
