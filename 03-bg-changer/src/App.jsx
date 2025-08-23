import React from "react";
import Buttons from "./components/buttons";

const App = () => {
	return (
		<>
			<div className="w-full h-screen bg-olive">
				<div className="w-full bg-gray-500 rounded-full flex justify-center fixed bottom-12 justify-between p-2 ">
					<Buttons color="red" />
					<Buttons color="blue" />
					<Buttons color="red" />
					<Buttons color="pink" />
					<Buttons color="purple" />
					<Buttons color="red" />
					<Buttons color="red" />
					<Buttons color="red" />
				</div>
			</div>
		</>
	);
};

export default App;
