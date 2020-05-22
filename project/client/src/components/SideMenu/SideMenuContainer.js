import React, { Component } from "react";
import SideMenu from "./SideMenu";

class SideMenuContainer extends Component{
	constructor(props){
		super(props);

		this.state = {
			isOpen: false
		}
	}

	toggleDrawer = () => {
		this.setState(state => {
			return({
				isOpen: !state.isOpen
			})
		})
	}

	render(){
		const {isOpen} = this.state;
		return(
			<SideMenu isOpen={isOpen} toggleDrawer={this.toggleDrawer} />
		)
	}
}

export default SideMenuContainer;