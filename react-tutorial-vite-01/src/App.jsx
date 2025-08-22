import React, { useState } from "react";
import Card from "./components/card";
function App() {
	let student = {
		name: "jonny Sins",
		email: "jonny123@gmail.com",
		phone: 9876543210,
		address: "house no 69",
	};

	return (
		<>
			<Card user={student} />
		</>
	);
}

export default App;
