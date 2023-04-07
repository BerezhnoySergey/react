import React from "react";

class DzOne extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visibility: false,
		};
	}
	handleClick = () => {
		this.setState((state) => ({
			visibility: !state.visibility,
		}));
	};
	render() {
		if (this.state.visibility) {
			return (
				<>
					<div>
						<p>условие 3</p>
						<p>"Name: Stepan</p>
						<button onClick={this.handleClick}>скрыть</button>
					</div>
				</>
			);
		}
		return (
			<>
				<p>условие 3</p>
				<button onClick={this.handleClick}>показать</button>
			</>
		);
	}
}

export default DzOne;
