import React, { useCallback, useEffect, useState } from "react";

const App = () => {
	const [length, setLength] = useState(16);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [lowerCaseAllowed, setLowercaseAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const str2 = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";
	const specialCharacters = "#$%&*/:;<=>?@~";
	let pass = "";
	// console.log(str.charAt(13));

	const passwordGenerator = () => {
		if (lowerCaseAllowed) {
			str += str2;
		}
		if (numberAllowed) {
			str += numbers;
		}
		if (charAllowed) {
			str += specialCharacters;
		}
		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}

		setPassword(pass);
	};
	useEffect(
		() => passwordGenerator(),
		[length, numberAllowed, charAllowed]
	);
	return (
		<>
			<div className="container  w-1/2 mx-auto mt-10 bg-slate-400 p-5 rounded-2xl ">
				<h1 className="text-center mb-5 text-4xl uppercase text-black-900 ">
					password Generator
				</h1>
				<h3 className="text-zinc-900 mb-3 text-center">
					Instantly create strong and secure passwords to
					keep your account safe online.
				</h3>
				<div className="flex  items-center justify-center mb-5">
					<input
						readOnly
						placeholder={password}
						className="rounded-full w-3/4 p-3 text-xl focus:outline-none mx-2 mb-5 text-center"
						type="text"
					/>

					<button
						onClick={() =>
							navigator.clipboard.writeText(
								password
							)
						}
						type="button"
						className="text-white bg-yellow-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-3.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
						copy
					</button>
				</div>
				<div className="flex   justify-center items-center">
					<input
						type="range"
						min={16}
						max={30}
						onChange={(e) => setLength(e.target.value)}
						name=""
						id="Length"
						value={length}
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
						onClick={(e) =>
							setNumberAllowed((preVal) =>
								preVal == true ? false : true
							)
						}
					/>
					<label
						className="text-xl text-black-900  mx-2"
						htmlFor="Numbers">
						Numbers
					</label>
					<input
						type="checkbox"
						name=""
						id="characters"
						onClick={(e) =>
							setCharAllowed((preVal) =>
								preVal == true ? false : true
							)
						}
					/>
					<label
						className="text-xl text-black-900 mx-2"
						htmlFor="characters">
						characters
					</label>
					<input
						type="checkbox"
						name=""
						id="lowercase"
						onClick={(e) =>
							setLowercaseAllowed((preVal) =>
								preVal == true ? false : true
							)
						}
					/>
					<label
						className="text-xl text-black-900 mx-2"
						htmlFor="lowercase">
						lowercase
					</label>
				</div>
			</div>
			<footer className="fixed bottom-0 left-0 w-full bg-slate-400 text-center p-3 mt-10">
				<p>
					© {new Date().getFullYear()} Ashish singh All
					Rights Reserved
				</p>
			</footer>
		</>
	);
};

export default App;
