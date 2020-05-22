import React, {Fragment, useEffect, useState} from 'react';
import { fetchUsersIfNeeded} from '../../actions';
import { Spinner, H3, ButtonGroup, Button, Dialog, Classes} from '@blueprintjs/core';
import Table from '../../components/Table';


const Users = props => {
	useEffect(() => {
		props.dispatch(fetchUsersIfNeeded())
	});

  const {classes, users, openDialog, dialogIsOpen, updateSelectedStudents, updateSelectedStudentsToAdd} = props;
  const {userList} = users
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
	      Header: 'Last Name 1',
	      accessor: 'last_name1',
	    },
	    {
	      Header: 'Last Name2',
	      accessor: 'last_name2',
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
  const data = React.useMemo(() => userList, [userList])

  return users.isFetching ? <Spinner /> : (
  	<Fragment>
	  	<Table columns={rosterColumns} data={data} loading={users.isFetching} selector={updateSelectedStudents}>
	  		<ButtonGroup>
	  			<Button icon="add" onClick={() => {props.dispatch(fetchUsersIfNeeded()); openDialog(true)}}>Add Student</Button>
	  		</ButtonGroup>
	  	</Table>
	  	<Dialog isOpen={dialogIsOpen} onClose={() => openDialog(false)} style={{height: '50vh', width: '50vw', overflowY: 'auto', padding: '1%'}}>
	  		<div style={{height: '45vh', overflowY: 'auto'}}>
	  			<Table columns={addStudentTableColumns} data={props.users.userList} loading={props.users.isFetching} dialog={true} selector={updateSelectedStudentsToAdd}></Table>
	  		</div>
	  		<div className={Classes.DIALOG_FOOTER}>
		  		<ButtonGroup className={Classes.DIALOG_FOOTER_ACTIONS}>
		  			<Button>Cancel</Button>
		  			<Button intent="success">Save</Button>
		  		</ButtonGroup> 
	  		</div>
	  	</Dialog>
	</Fragment>
  );
}

export default Users;
