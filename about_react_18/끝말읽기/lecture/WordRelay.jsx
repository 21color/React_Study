const React = require('react');
const { Component } = React;

class WordRelay extends Component {
	state = {
		word: '이하나',
		value: '',
		result: '',
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		if(this.state.word[this.state.word.length - 1] === this.state.value[0] ) {
			this.setState({
				result: '딩동댕',
				word: this.state.value, 
				value: '',
			})
			this.input.focus();
		} else {
			this.setState({
				result: '땡',
				value: '',
			})
			this.input.focus();
		}
	};

	onChangeInput = (e) => {
		this.setState({value: e.currentTarget.value })
	}

	onRefInput = (c) =>{ 
		this.input = c; 
	};

	render() {
		return (
			<div>
				<h1>{this.state.word}</h1>
				<form onSubmit={this.onSubmitForm}>
					<input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
					{/* form 데이터 넣을땐 value와 onchange 를 함께 넣어줘야한다. 그렇지 않기 위해선 defailt value 를 넣어주어야한다.*/}
					<button>입력!</button>
				</form>
				<div>{this.state.result}</div>
			</div>
		);
	}
}

module.exports = WordRelay;
