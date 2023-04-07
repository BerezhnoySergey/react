import React from "react";

class Dz extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "Stepan",
			age: 25,
			names: "Stepan",
			ages: 25,
		};
	}

	toggleHandler = () => {
		this.setState({ name: !this.state.name, age: !this.state.age });
	};
	toggleHandlerTwo = () => {
		this.setState({ names: !this.state.names, ages: !this.state.ages });
	};

	render() {
		return (
			<>
				<div>
					<p>условие 1</p>
					<p>
						Name: {this.state.name ? "Stepan" : "Mykola"}, age:{" "}
						{this.state.age ? 25 : 30}
					</p>
					<button onClick={this.toggleHandler}>Click on me</button>
				</div>
				{/* условие 2 */}
				<div>
					<p>условие 2</p>
					<p>
						Name: {this.state.names ? "Stepan" : ""}, age:{" "}
						{this.state.ages ? 25 : ""}
					</p>
					<button onClick={this.toggleHandlerTwo}>Click on me</button>
				</div>
			</>
		);
	}
}

export default Dz;
