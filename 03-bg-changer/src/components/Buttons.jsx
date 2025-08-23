import React from "react";
import { useState } from "react";
const Buttons = (prop) => {
	let [color, setColor] = useState("black");
	document.body.style.backgroundColor = color;
	return (
		<>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
				onClick={() => setColor(prop.color)}>
				{prop.color}
			</button>
		</>
	);
};

export default Buttons;
