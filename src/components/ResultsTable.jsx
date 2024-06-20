import { formatter } from "../util/investment";

export default function ResultsTable({resultsArr}) {

	console.log(resultsArr);
	return (
		<table id="result" className="center">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest(Year)</th>
					<th>Total Interest</th>
					<th>Invested Capitol</th>
				</tr>
			</thead>
			<tbody>
				{
					resultsArr && resultsArr.map(singleResult => (
						<tr key={singleResult.year}>
							<td>{singleResult.year}</td>
							<td>{formatter.format(singleResult.valueEndOfYear)}</td>
							<td>{formatter.format(singleResult.interest)}</td>
							<td>{formatter.format(singleResult.rollingInterest)}</td>
							<td>{formatter.format(singleResult.investedCapital)}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
}