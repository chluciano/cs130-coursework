import React, { Component } from "react";
import NavBar from "./NavBar";

class NavBarContainer extends Component{
	constructor(props){
		super(props);

		this.state = {
			isOpen: false
		}
	}

	toggleDrawer = () => {
		console.log("clicked")
		this.setState(state => {
			return({
				isOpen: !state.isOpen
			})
		})

	}

	render(){
		const {isOpen} = this.state;
		return(
			<NavBar isOpen={isOpen} toggleDrawer={this.toggleDrawer} />
		)
	}
}

export default NavBarContainer;