import React, {useEffect, useState} from 'react';
import pageCreator from './pageCreator';
import { fetchCoursesIfNeeded } from '../actions';
import { 
	Card, 
	Button, 
	Elevation, 
	Spinner, 
	Collapse, 
	H2,
	H3, 
	H5, 
	Callout, 
	ButtonGroup, 
	Dialog, 
	Classes,
	FormGroup,
	InputGroup,
	Switch,
	RadioGroup,
	Radio } 
from '@blueprintjs/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "react-flexbox-grid/dist/react-flexbox-grid.css";
import CourseCard from '../components/CourseCard';
import AnnouncementCard from '../components/AnnouncementCard';


const styles = {
	rootContainer: {
		paddingTop: '5%',
		paddingLeft: '5%',
		paddingRight: '5%'
	},


}

const Home = props => {
  useEffect(() => {
		props.dispatch(fetchCoursesIfNeeded())
	});

  const [open, setOpen] = useState(false);
  const {courses} = props;


  return courses.isFetching ? <Spinner /> : (
  	<Grid fluid >
  		<Row> 
	  		<Col xs={6} md={5} >
	  			<div className="groupContainer">
		  			<ButtonGroup>
		  				<Button icon="add" onClick={() => {setOpen(true)}}>Create Class</Button>
		  			</ButtonGroup>
	  			</div>
	  			<div className="groupContainer">
		  			<H3> Group Lessons </H3>
		  			<div style={styles.courseContainer}>
		  				{
		  					courses.course.courseList.map(course => (
		  						<CourseCard courseName={course.name} courseId={course._id} key={course._id} />
		  					))
		  				}
		  			</div>
	  			</div>
	  			<div className="groupContainer">
		  			<H3> Private Lessons </H3>
		  			<div style={styles.courseContainer}>
		  				{
		  					courses.course.courseList.map(course => (
		  						<CourseCard courseName={course.name} courseId={course._id} />
		  					))
		  				}
		  			</div>
	  			</div>
	  		</Col>
	  		<Col xs={6} md={6} mdOffset={1}>
	  			<H3> Announcements </H3>
	  			<div style={styles.courseContainer}>
	  				<Card>
		  				<AnnouncementCard announcementName="New Announcement" announcementId="Test"/>
		  				<AnnouncementCard announcementName="New Announcement" announcementId="Test"/>
		  				<AnnouncementCard announcementName="New Announcement" announcementId="Test"/>
	  				</Card>
	  			</div>
	  		</Col>
  		</Row>
  			<Dialog isOpen={open} onClose={() => setOpen(false)} style={{height: '50vh', width: '50vw', overflowY: 'auto', padding: '1%'}}>
		  		<div className={Classes.DIALOG_TITLE}>
		  			<h2>Create Course</h2>
		  		</div>
		  		<div className={Classes.DIALOG_BODY}>
		  			<Grid>
		  			<Row>
		  			<Col xs={6}>
		  			<FormGroup inline={true} label="Course Name" labelFor ="course-name">
		  				<InputGroup id="course-name" placeholder="Enter Course Name"/>
		  			</FormGroup>
		  			<FormGroup inline={true} label="Course Capacity" labelFor ="course-capacity">
		  				<InputGroup id="course-capacity" placeholder="#"/>
		  			</FormGroup>
		  			<RadioGroup label="Course Type">
		  				<Radio label="Group Lesson" />
		  				<Radio label="Private Lesson" />
		  				<Radio label="Theory Lesson" />
		  			</RadioGroup>
		  			</Col>
		  			<Col xs={6}>
		  				<RadioGroup label="Campus" >
		  					<Radio label="Albany Park" />
		  					<Radio label="Uptown Academy" />
		  					<Radio label="Back of the Yards" />
		  					<Radio label="Greater South Side" />
			  			</RadioGroup>
			  			<FormGroup inline={true} label="Assigned Room" labelFor ="course-room">
			  				<InputGroup id="course-room" placeholder="Room #"/>
			  			</FormGroup>
			  			<FormGroup>
			  				<Switch label="Publish" />
			  				<Switch label="Public" />
			  				<Switch label="Allow Parents" />
			  			</FormGroup>
		  			</Col>
		  			</Row>
		  			</Grid>
		  		</div>
		  		<div className={Classes.DIALOG_FOOTER}>
			  		<ButtonGroup className={Classes.DIALOG_FOOTER_ACTIONS}>
			  			<Button onClick={() => {setOpen(false)}}>Cancel</Button>
			  			<Button intent="success">Create</Button>
			  		</ButtonGroup> 
		  		</div>
	  	</Dialog>
  	</Grid>
  );
}

export default pageCreator(Home);
