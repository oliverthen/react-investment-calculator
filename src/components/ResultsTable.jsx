export default function ResultsTable(resultsArr) {
	return (
		<table id="result" className="center">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest(Year)</th>
					<th>Total Interst</th>
					<th>Invested Capitol</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2024</td>
					<td>100</td>
					<td>6.2</td>
					<td>69</td>
					<td>420</td>
				</tr>
			</tbody>
		</table>
	);
}