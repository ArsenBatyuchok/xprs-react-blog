var React = require('react');

var MasterLayout = React.createClass({
	render: function() {
		return (
			<html>
				<head>
					<meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
					<title>{this.props.name}</title>
					<link rel="stylesheet" href="/public/css/main.css" />
				</head>
				<body>
					{this.props.children}
				</body>
			</html>
		)
	}
});

module.exports = MasterLayout;