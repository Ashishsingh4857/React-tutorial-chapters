function customRender(reactElement, container) {
	const domElement = document.createElement(reactElement.type);
	for (const prop in reactElement.props) {
		domElement.setAttribute(prop, reactElement.props[prop]);
	}
	domElement.innerHTML = reactElement.Children;
	container.appendChild(domElement);
}
const reactElement = {
	type: "a",
	props: {
		href: "https://www.w3schools.com/react/react_first_app.asp",
		target: "_blank",
	},
	Children: "click here to visit google",
};
const container = document.getElementById("root");
customRender(reactElement, container);
