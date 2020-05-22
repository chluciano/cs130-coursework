import React, { Component } from "react";
import AnnouncementCard from "./AnnouncementCard";

class AnnouncementCardContainer extends Component{
	constructor(props){
		super(props);

		this.state = {
			isOpen: false
		}
	}

	toggleCollapse = () => {
		this.setState(state => {
			return({
				isOpen: !state.isOpen
			})
		})

	}

	render(){
		const {isOpen} = this.state;
		return(
			<AnnouncementCard isOpen={isOpen} toggleCollapse={this.toggleCollapse} {...this.props} />
		)
	}
}

export default AnnouncementCardContainer;