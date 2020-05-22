import React from "react";
import { 
	Card,
	Collapse,
	Callout,
	Classes
} from '@blueprintjs/core';
import {Link} from 'react-router-dom';
import "./AnnouncementCard.css";

const AnnouncementCard = ({toggleCollapse, isOpen, announcementName, announcementId}) => {
	return(
			<Callout 
				onClick={() => toggleCollapse()} 
				title={announcementName}
				intent="primary"
				className={"callout " + Classes.ELEVATION_1 }
			>
				<Collapse isOpen={isOpen}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tortor sit amet finibus accumsan. Aenean eu ligula sit amet mi tristique lobortis at bibendum nisl. Aliquam eget tincidunt urna. Ut sit amet sapien ultricies, iaculis ipsum nec, pretium magna. Sed dapibus quis neque eu lacinia. Ut cursus urna eget justo efficitur, sit amet cursus lectus imperdiet. Praesent pulvinar dui eu ultricies luctus. Curabitur ex sem, porttitor et lorem at, finibus lacinia magna. In hac habitasse platea dictumst.
				</Collapse>
		  	</Callout>
	)
}

export default AnnouncementCard;
