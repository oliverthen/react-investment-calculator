import { calculateInvestmentResults } from "../util/investment";

export default function UserInfo() {

	let initialInvestment, annualInvestment, returnOnInvestment, duration;

	function handleChange(event) {
		console.log(event.target.id);
	}

	return (
		<div id="user-input">
				<label htmlFor="initial-investment">Initial Investment</label>
				<input type="number" id="inital-investment" onChange={handleChange}/>
				<label htmlFor="annual-investment">Annual Investment</label>
				<input type="number" id="annual-investment" onChange={handleChange}/>
				<label htmlFor="return">Expected Return</label>
				<input type="number" id="return" onChange={handleChange}/>
				<label htmlFor="duration">Duration</label>
				<input type="number" id="duration" onChange={handleChange}/>
		</div>
	);
}