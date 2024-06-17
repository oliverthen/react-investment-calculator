
export default function UserInfo(onChangeInput) {

	

	return (
		<div id="user-input">
				<label htmlFor="initial-investment">Initial Investment</label>
				<input type="number" id="initial-investment" onChange={onChangeInput}/>
				<label htmlFor="annual-investment">Annual Investment</label>
				<input type="number" id="annual-investment" onChange={onChangeInput}/>
				<label htmlFor="return">Expected Return</label>
				<input type="number" id="return" onChange={onChangeInput}/>
				<label htmlFor="duration">Duration</label>
				<input type="number" id="duration" onChange={onChangeInput}/>
		</div>
	);
}