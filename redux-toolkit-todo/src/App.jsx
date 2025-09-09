import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
function App() {
	return (
		<Provider store={store}>
			<AddTodo />
			<Todos />
		</Provider>
	);
}

export default App;
