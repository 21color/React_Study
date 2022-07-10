const React = require('react');
const ReactDom = require('react-dom');

const GuguDan = () => {
	//state 선언! use Desturing!
	const [first, setFrist] = React.useState(Math.ceil(Math.random() * 9));
	const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
	const [value, setValue] = React.useState('');
	const [result, setResult] = React.useState('');
	const onRefInput = React.useRef(null);
	// useState -> Hooks

	const handle = () => {
		onRefInput.current.focus();
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (parseInt(value) === first * second) {
			setResult((prevResult) => `정답은 ${value}`);
			setFrist(Math.ceil(Math.random() * 9));
			setSecond(Math.ceil(Math.random() * 9));
			setValue('');
		} else {
			setResult(`땡! 정답은 ${first * second} 지롱!`);
			setValue('');
		}
	};

	const onChangeInput = (e) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<form className="container__form" onSubmit={onSubmitForm}>
				<div className="container">
					<h1>
						{first} 곱하기 {second}는?
					</h1>
				</div>
				<input
					className="form--input"
					ref={onRefInput}
					placeholder="input your answer"
					onChange={onChangeInput}
					value={value}
					type="Number"
				/>
				<button className="form--submit" type="submit" onClick={handle}>
					SUBMIT
				</button>
				<div className="form--result" id="result">
					{result}
				</div>
			</form>
		</div>
	);
};

module.exports = GuguDan;
