import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/User";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Please put a proper duration!
        </p>
      )}
    </>
  );
}

export default App;
