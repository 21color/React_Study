import { Component } from 'react';

class TOC extends Component {
	render() {
		console.log('TOC render')
		let lists = [];
		let data = this.props.data;
		data.forEach((element) => {
			lists.push(
				<li key={element.id}>
					<a href={'/contents/' + element.id}>{element.title}</a>
				</li>
			);
		});
		return (
			<nav>
				<ul>{lists}</ul>
			</nav>
		);
	}
}

export default TOC;
