import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Paginations extends Component {
	constructor(props){
		super(props)
	}
	
	render() {
		return (
			<div className="coloum-wrapper">
        <div className="pagination paginatioon--full">
          <Link to="/prev" className="pagination__prev">prev</Link>
          <Link to="/next" className="pagination__next">next</Link>
        </div>
      </div>
		);
	}
}

export default Paginations;
