import React, { useEffect, useState } from "react";

// Custom hook to fetch currency information
const useCurrencyInfo = (currency) => {
	const [data, setData] = useState({});

	const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
	if (!apiKey) {
		throw new Error(
			"API key is missing. Please set VITE_EXCHANGE_RATE_API_KEY in your .env file."
		);
	}
	useEffect(() => {
		// Fetch currency information here
		let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data);
			});
	}, [currency]);

	return data;
};

export default useCurrencyInfo;
