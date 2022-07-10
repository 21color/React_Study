const React = require('react');
const { Component } = React;

class WordRelay extends Component {
	state = {
		text: 'Hello, World',
	};

	render() {
		return (
			<div>
				<h1>{this.state.text}</h1>
			</div>
		);
	}
}

module.exports = WordRelay;
