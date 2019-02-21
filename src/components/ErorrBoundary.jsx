import React, { Component } from 'react';

class ErorrBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {erorr: null, errorInfo: null};
	}

	componentDidCatch(error, errorInfo){
		this.setState({
			error: error,
			errorInfo: errorInfo
		})
	}

	render() {
		if (this.state.errorInfo) {
			return (<div><h1>Something Was Erorr !</h1></div>);
		}	
		return this.props.children;
	}
}


export default ErorrBoundary;