import React, { Component } from 'react';

class Paginations extends Component {
	render() {
		return (
			<div className="coloum-wrapper">
	            <div className="pagination paginatioon--full">
	                    <a href="#" className="pagination__prev">prev</a>
	                    <a href="#" className="pagination__next">next</a>
	            </div>
	        </div>
		);
	}
}

export default Paginations;
