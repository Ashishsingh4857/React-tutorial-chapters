import React from "react";
import { useState } from "react";

import InputBox from "./components/InputBox"; // Reusable InputBox component
import useCurrencyInfo from "./hooks/useCurrencyInfo"; // Custom hook to fetch currency information
import "./index.css";

function App() {
	const [amount, setAmount] = useState(1); // amount to be converted
	const [toCurrency, setToCurrency] = useState("inr");
	const [fromCurrency, setFromCurrency] = useState("usd");
	const [convertedAmount, setConvertedAmount] = useState(0); // converted amount

	const currencyData = useCurrencyInfo(fromCurrency); // fetch currency data using custom hook
	const currencyOptions = currencyData?.conversion_rates
		? Object.keys(currencyData.conversion_rates) // list of currency options
		: [];
	// Function to swap fromCurrency and toCurrency
	const swapCurrencies = () => {
		setFromCurrency((prev) => {
			setToCurrency(prev);
			return toCurrency;
		});
		setAmount(convertedAmount);
		setConvertedAmount(amount);
		setTimeout(() => {
			convertCurrency();
		}, 0);
	};
	// Function to convert currency
	const convertCurrency = () => {
		if (!currencyData) return;

		const rate = currencyData.conversion_rates[toCurrency];

		if (!rate) return;

		setConvertedAmount(amount * rate);
	};

	return (
		<div className="w-full h-screen flex flex-wrap justify-center items-center bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 px-2">
			<div className="w-full">
				<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							convertCurrency();
						}}>
						<div className="w-full mb-1">
							<InputBox
								label="From"
								amount={amount}
								onAmountChange={(amount) =>
									setAmount(amount)
								}
								currencyOptions={
									currencyOptions
								}
								onCurrencyChange={(currency) =>
									setFromCurrency(currency)
								}
								selectedCurrency={fromCurrency}
							/>
						</div>
						<div className="relative w-full h-0.5">
							<button
								onClick={swapCurrencies}
								type="button"
								className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
								swap
							</button>
						</div>
						<div className="w-full mt-1 mb-4">
							<InputBox
								label="To"
								amount={convertedAmount}
								currencyOptions={
									currencyOptions
								}
								onCurrencyChange={(currency) =>
									setToCurrency(currency)
								}
								amountDisabled={true}
								selectedCurrency={toCurrency}
							/>
						</div>
						<button
							onClick={convertCurrency}
							type="submit"
							className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
							Convert {fromCurrency.toUpperCase()}
							to {toCurrency.toUpperCase()}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
