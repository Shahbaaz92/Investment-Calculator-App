import { calculateInvestmentResults } from "../util/investment";
function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  console.log(results);
  return <div>Results...</div>;
}

export default Results;
