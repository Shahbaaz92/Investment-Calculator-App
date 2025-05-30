import { calculateInvestmentResults } from "../util/investment";
function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest Earned</th>
          <th>Annual Investment</th>
          <th>Value at End of Year</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>
              {result.interest.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td>
              {result.annualInvestment.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td>
              {result.valueEndOfYear.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
