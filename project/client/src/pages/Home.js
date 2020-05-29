import React, {useEffect, useState} from 'react';
import pageCreator from './pageCreator';
import { fetchCoursesIfNeeded } from '../actions';
import { Card, Button, Elevation, Spinner, Collapse, H3, H5, Callout } from '@blueprintjs/core';
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
  	</Grid>
  );
}

export default pageCreator(Home);
