import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Results from "./components/Results";
import "./util/investment.js";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = userInput.duration > 0;

	function handleInputChange(inputField, value) {
		setUserInput((prevUserInput) => ({
			...prevUserInput,
			[inputField]: Number(value),
		}));
	}

	//another way of doing it:
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	setData(calculateInvestmentResults(userInput));
	// }, [userInput]);

	return (
		<div>
			<Header />
			<InputGroup onInputChange={handleInputChange} userInput={userInput} />
			{!inputIsValid && (
				<p className="center">Please enter a valid duration.</p>
			)}
			{inputIsValid && <Results input={userInput} />}
		</div>
	);
}

export default App;
