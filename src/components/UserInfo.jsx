export default function UserInfo() {
	return (
		<div id="user-input">
				<label for="initial-investment">Initial Investment</label>
				<input type="number" id="inital-investment"/>
				<label for="annual-investment">Annual Investment</label>
				<input type="number" id="annual-investment"/>
				<label for="return">Expected Return</label>
				<input type="number" id="return"/>
				<label for="duration">Duration</label>
				<input type="number" id="duration"/>
		</div>
	);
}