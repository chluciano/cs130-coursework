import React, { Component } from "react";
import Table from "./Table";

class TableContainer extends Component{
	constructor(props){
		super(props);
	}


	render(){
		const props= this.props;
		return(
			<Table {...props}/>
		)
	}
}

export default TableContainer;