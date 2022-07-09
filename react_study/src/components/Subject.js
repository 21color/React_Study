import { Component } from 'react';

class Subject extends Component {
	render() {
		console.log('Subject render');
		return (
			<header>
				<h1>
					<a href="/">{this.props.title}</a>
				</h1>
				{this.props.sub}
			</header> // 주의점! 항상 닫히는..최상위 태그가 존재해야함
		);
	}
} //요부분을 잘 봐라! 요게 컴포넌트!

export default Subject;
