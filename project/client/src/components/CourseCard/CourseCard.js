import React from "react";
import { 
	Card, 
	Button, 
	Elevation, 
	Collapse, 
	H5,
	Menu,
	MenuItem
} from '@blueprintjs/core';
import {Link} from 'react-router-dom';
import "./CourseCard.css";

const CourseCard = ({toggleCollapse, isOpen, courseName, courseId}) => {
	return(
		<Card 
		className="card"
		onClick={() => toggleCollapse()} 
		interactive={!isOpen}>
			<H5> {courseName} </H5>
			<Collapse isOpen={isOpen}>
				<Menu>
				<Link to={"/courses/" + courseId + "/roster"} className="link">
					<MenuItem icon="people" text="Attendance"></MenuItem>
				</Link>
				<MenuItem icon="manual" text="Homework" href={"/courses/" + courseId + "/roster"}></MenuItem>
				
				</Menu>
			</Collapse>
	  	</Card>
	)
}

export default CourseCard;

//manual
//people
//learning
//th-list