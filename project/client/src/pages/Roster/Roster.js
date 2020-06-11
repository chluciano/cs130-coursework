import React, {Fragment, useEffect, useState} from 'react';
import { fetchUsersIfNeeded, fetchCourseUsersIfNeeded } from '../../actions';
import { Spinner, H3, ButtonGroup, Button, Dialog, Classes} from '@blueprintjs/core';
import Table from '../../components/Table';


const Roster = props => {
	useEffect(() => {
		props.dispatch(fetchCourseUsersIfNeeded(props.match.params.courseid))
	});

  const {classes, courses, openDialog, dialogIsOpen, typeOpenDialog, updateSelectedStudents, updateSelectedStudentsToAdd} = props;
  const rosterColumns = React.useMemo(
	  () => [
	    {
	      Header: 'First Name',
	      accessor: 'first_name', // accessor is the "key" in the data
	    },
	    {
	      Header: 'Last Name',
	      accessor: 'last_name',
	    },
	    {
	      Header: 'Instrument',
	      accessor: 'instrument',
	    },
	    {
	      Header: 'Role',
	      accessor: 'role',
	    },
	  ],
	  []
	)
  const addStudentTableColumns = React.useMemo(
  		() => [
  			{
		      Header: 'First Name',
		      accessor: 'first_name', // accessor is the "key" in the data
		    },
		    {
		      Header: 'Last Name',
		      accessor: 'last_name',
		    },
		    {
		    	Header: 'Instrument',
		    	accessor: 'instrument'
		    }
  		]
  	)
  const userList = [...courses.courseUsers.teacherList, ...courses.courseUsers.studentList];
  const data = React.useMemo(() => userList, [userList])

  return courses.courseUsers.isFetching ? <Spinner /> : (
  	<Fragment>
	  	<Table columns={rosterColumns} data={data} loading={courses.courseUsers.isFetching} selector={updateSelectedStudents}>
	  		<ButtonGroup>
	  			<Button icon="add" onClick={() => {props.dispatch(fetchUsersIfNeeded()); openDialog(true, "add")}}>Add Student</Button>
	  			<Button icon="delete" onClick={() => {openDialog(true, "delete")}}> Delete Student </Button>
	  		</ButtonGroup>
	  	</Table>
	  	<Dialog isOpen={dialogIsOpen} onClose={() => openDialog(false)} style={{height: '50vh', width: '50vw', overflowY: 'auto', padding: '1%'}}>
	  		{ typeOpenDialog == "add" ?
	  			<Fragment>
		  		<div style={{height: '45vh', overflowY: 'auto'}}>
		  			<Table columns={addStudentTableColumns} data={props.users.userList} loading={props.users.isFetching} dialog={true} selector={updateSelectedStudentsToAdd}></Table>
		  		</div>
		  		<div className={Classes.DIALOG_FOOTER}>
			  		<ButtonGroup className={Classes.DIALOG_FOOTER_ACTIONS}>
			  			<Button onClick={() => {openDialog(false)}}>Cancel</Button>
			  			<Button intent="success">Save</Button>
			  		</ButtonGroup> 
		  		</div>
		  		</Fragment>
		  		:
		  		<Fragment>
		  		<div className={Classes.DIALOG_BODY}>
		  			Are you sure you want to delete?
		  			<ul>
		  				<li>FirstName LastName</li>
		  				<li>FirstName LastName</li>
		  				<li>FirstName LastName</li>
		  				<li>FirstName LastName</li>

		  			</ul>
		  		</div>
		  		<div className={Classes.DIALOG_FOOTER}>
			  		<ButtonGroup className={Classes.DIALOG_FOOTER_ACTIONS}>
			  			<Button onClick={() => {openDialog(false)}}>Cancel</Button>
			  			<Button intent="success">Save</Button>
			  		</ButtonGroup> 
		  		</div>
		  		</Fragment>
	  		}
	  	</Dialog>
	</Fragment>
  );
}

export default Roster;
