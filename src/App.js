import { useState } from "react";
import "./App.css";
import Operators from "./components/Operators";
import Digits from "./components/Digits";



function App() {
	const [result,setResult] = useState();

  const clickHandle = (e) => {
  	setResult(result+e);
  }

  const screenClear = () => {
  	setResult('');
  }
		
  const equalHandle = () => {
  	const resultValue = eval(result);
  	setResult(resultValue);
  }

	return (
		<>
			<div className="calculator-app">
				<div className="display">
					<input className="result" type="text" value={result} />
				</div>

				<div className="buttons">
					<Digits clickHandle={clickHandle} screenClear={screenClear} equalHandle={equalHandle} />

					<Operators clickHandle={clickHandle} />
				</div>	
			</div>
		</>
	);
}

export default App;
