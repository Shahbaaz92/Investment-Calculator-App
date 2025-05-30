function UserInput({ userInput, onChangeInput }) {
  // const handleInputChange = (setter) => (event) => {
  //   const value = event.target.value;
  //   setter(value);
  // };

  return (
    <main id="user-input">
      <div className="input-group">
        <label>
          Initial Investment
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
        </label>
        <label>
          Annual Investment
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Expected Return
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </label>
      </div>
    </main>
  );
}
export default UserInput;
