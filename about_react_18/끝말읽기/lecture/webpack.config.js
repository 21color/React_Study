const path = require('path');

module.exports = {
	//어떤것을 위한 웹팩인지
	name: 'word-relay-setting',
	mode: 'development', //실서비스에선 production
	devtool: 'eval',
	resolve: {
		extensions: ['.js', '.jsx'],
	},

	// 중요!
	entry: {
		app: ['./client'],
	}, // 입력

	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: ['@babel/plugin-proposal-class-properties'],
				},
			},
		],
	},
	plugins: [
		new webpack.loaderOptionsPlugin({ debug: true }),
	],
	output: {
		path: path.join(__dirname, 'dist'), //현재폴더안의 dist! path! 적극적으로 쓰기
		filename: 'app.js',
	}, //출력
};
