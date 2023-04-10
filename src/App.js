import "./App.css";
import React from "react";
// import Dz from "./Dz";
// import DzOne from "./DzOne";
import { DzTwo } from "./DzTwo";
// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

class App extends React.Component {
	constructor() {
		super();
		this.state = { isToggle: false };
	}

	toggleHandler = () => {
		this.setState({ isToggle: !this.state.isToggle });
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* <Dz />
					<DzOne /> */}
					<DzTwo />
				</header>
			</div>
		);
	}
}

export default App;
