import React, { useState } from "react";

const App = () => {
	let [length, setLength] = useState(16);
	return (
		<>
			<div className="container  w-1/2 mx-auto mt-10 bg-slate-400 p-5 rounded-2xl ">
				<h1 className="text-center mb-5 text-2xl uppercase text-black-900 ">
					password Generator
				</h1>
				<div className="grid grid-cols-2">
					<input
						readOnly
						placeholder="dddj"
						className="rounded-full w-1/1 p-3 text-xl  focus:outline-none mx-2 mb-5"
						type="text"
					/>
					<div>
						<button
							type="button"
							class="text-white bg-yellow-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-3.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
							copy
						</button>
						<button
							type="button"
							class="text-white bg-yellow-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-3.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
							Next
						</button>
					</div>
				</div>

				<input
					type="range"
					name=""
					id="Length"
				/>
				<label
					className="text-xl text-black-900  mx-2"
					htmlFor="Length">
					Length ({length})
				</label>

				<input
					type="checkbox"
					name=""
					id="Numbers"
				/>
				<label
					className="text-xl text-black-900  mx-2"
					htmlFor="Numbers">
					Numbers
				</label>
				<input
					className=""
					type="checkbox"
					name=""
					id="characters"
				/>
				<label
					className="text-xl text-black-900 mx-2"
					htmlFor="characters">
					characters
				</label>
			</div>
		</>
	);
};

export default App;
