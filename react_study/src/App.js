import React from 'react';
import { Component } from 'react';
import './style.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject'


class App extends Component {
	render() {
		return (
			<div className="App">
				<Subject title="WEB" sub="world wide web!!!boom!"></Subject>
				<TOC></TOC>
				<Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
			</div>
		);
	}
}

export default App;
