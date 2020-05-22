import React from "react";
import {Link} from "react-router-dom";
import {
	Switch, 
	Classes,
	Drawer,
	Menu,
	MenuItem
} from '@blueprintjs/core';


const styles = {
	root: {
		display: 'flex',
		flexDirection:'column'
	},
	navbar: {
		flexGrow: 1
	},
	navbarHeading: {
		color: Colors.LIGHT_GRAY5
	},
	navbarDivider: {
		borderColor: Colors.WHITE3
	},
}

/* const sideMenu = (props) => (
	<List style={{width: 300}}>
        {DrawerOptions.map((text, index) => (
    	<Link to={text.route}> 
      		<ListItem button key={text} onClick={props.toggleDrawer}>
				<ListItemText primary={text.title}/>
     		 </ListItem>
      	</Link>
        ))}
      </List>
) */


const SideMenu = props => {
	const {classes} = props;
	return(
		<Drawer size={Drawer.SIZE_SMALL}>
			<Menu style={styles.menu}>
				<MenuItem text="Hello world" />
			</Menu>
		</Drawer>
	)
}

export default SideMenu;