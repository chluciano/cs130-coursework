import React, { Component } from "react";
import CourseCard from "./CourseCard";

class CourseCardContainer extends Component{
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
			<CourseCard isOpen={isOpen} toggleCollapse={this.toggleCollapse} {...this.props} />
		)
	}
}

export default CourseCardContainer;