import React, { useState } from "react";
function App() {
	let [counter, updatedCount] = useState(1);

	let addValue = () => {
		if (counter === 2) {
			return;
		}
		updatedCount(counter + 1);
	};

	let removeValue = () => {
		if (counter === 0) {
			return;
		}
		updatedCount(counter - 1);
	};

	return (
		<>
			<h1> hello world</h1>
			<h2 className="count">counter {counter} </h2>
			<button
				id="add"
				onClick={() => addValue()}>
				{" "}
				add value
			</button>
			<button
				className="remove"
				onClick={() => removeValue()}>
				remove value
			</button>
		</>
	);
}

export default App;
