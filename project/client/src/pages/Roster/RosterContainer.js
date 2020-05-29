import React, { Component } from "react";
import Roster from "./Roster";
import pageCreator from '../pageCreator';
import { saveCourseUsers } from '../../actions';

class RosterContainer extends Component{
	constructor(props){
		super(props);

		this.state = {
			selectedStudents: [],
			selectedStudentsToAdd: [],
			dialogIsOpen: false
		}
	}

	saveStudents = (students) => {

	}

	updateSelectedStudents = (studentId) => {
		console.log("called1")
		this.setState(state => {
			return {
				selectedStudents: [...state.selectedStudents, studentId]
			}
		});
	} 

	updateSelectedStudentsToAdd = (studentId) => {
		console.log("called2")
		this.setState(state => {
			return {
				selectedStudentsToAdd: [...state.selectedStudentsToAdd, studentId]
			}
		});
	} 

	openDialog = (isOpen) => {
		this.setState(state => {
			return {
				dialogIsOpen: isOpen
			}
		});
	}


	render(){
		const {selectedStudents, selectedStudentsToAdd, dialogIsOpen} = this.state;
		const props = this.props;
		console.log(selectedStudents)
		console.log(selectedStudentsToAdd)
		return(
			<Roster 
				{...props} 
				openDialog={this.openDialog} 
				dialogIsOpen={dialogIsOpen}
				updateSelectedStudents={this.updateSelectedStudents}
				updateSelectedStudentsToAdd={this.updateSelectedStudentsToAdd}
			/>
		)
	}
}

export default pageCreator(RosterContainer);