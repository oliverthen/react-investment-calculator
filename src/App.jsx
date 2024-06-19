import { useState } from "react"

import Header from "./components/Header"
import UserInfo from "./components/UserInfo"
import ResultsTable from "./components/ResultsTable"

import { calculateInvestmentResults } from "./util/investment"

function App() {
	// const [displayTable, flipDisplayTable] = useState(false);
	const [results, changeResults] = useState([]);


	let initialInvestment, annualInvestment, expectedReturn, duration;

	

	function handleChange(event) {
		if (event.target.id === 'initial-investment') {
			initialInvestment = Number(event.target.value);
		} else if (event.target.id === 'annual-investment') {
			annualInvestment = Number(event.target.value); 
		} else if (event.target.id === 'return') {
			expectedReturn = Number(event.target.value); 
		} else if (event.target.id === 'duration') {
			duration = Number(event.target.value); 
		}

		if (initialInvestment && annualInvestment && expectedReturn && duration) {
			console.log(initialInvestment, annualInvestment, expectedReturn, duration);
			let packagedInfo = {initialInvestment, annualInvestment, expectedReturn, duration};
			changeResults(calculateInvestmentResults(packagedInfo));

			console.log(results);
		}

		
	}


  return (
		<>
			<Header />
			<UserInfo onChangeInput={handleChange}/>
			<ResultsTable resultsArr={results}/>
		</>
  )
}

export default App
