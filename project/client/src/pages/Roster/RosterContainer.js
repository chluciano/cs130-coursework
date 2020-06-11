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
			dialogIsOpen: false,
			typeOpenDialog: ""
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
		this.setState(state => {
			return {
				selectedStudentsToAdd: [...state.selectedStudentsToAdd, studentId]
			}
		});
	} 

	openDialog = (isOpen, dialogType) => {
		this.setState(state => {
			return {
				dialogIsOpen: isOpen,
				typeOpenDialog: dialogType
			}
		});
	}


	render(){
		const {selectedStudents, selectedStudentsToAdd, dialogIsOpen, typeOpenDialog} = this.state;
		const props = this.props;
		console.log(selectedStudents)
		console.log(selectedStudentsToAdd)
		return(
			<Roster 
				{...props} 
				openDialog={this.openDialog} 
				dialogIsOpen={dialogIsOpen}
				typeOpenDialog={typeOpenDialog}
				updateSelectedStudents={this.updateSelectedStudents}
				updateSelectedStudentsToAdd={this.updateSelectedStudentsToAdd}
			/>
		)
	}
}

export default pageCreator(RosterContainer);