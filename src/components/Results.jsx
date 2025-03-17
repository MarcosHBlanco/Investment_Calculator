import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
	const resultData = calculateInvestmentResults(input);
	const initialInvestment =
		resultData[0].valueEndOfYear -
		resultData[0].interest -
		resultData[0].annualInvestment;

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultData.map((row, index) => {
					const totalInterest =
						row.valueEndOfYear -
						row.annualInvestment * row.year -
						initialInvestment;
					const totalAmountInvested = row.valueEndOfYear - totalInterest;

					return (
						<tr key={index}>
							<td>{row.year}</td>
							<td>{formatter.format(row.valueEndOfYear)}</td>
							<td>{formatter.format(row.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
