import React from "react";
import {
	Navbar, 
	NavbarDivider, 
	NavbarGroup, 
	NavbarHeading, 
	Switch, 
	Classes,
	Colors,
	Alignment,
	Icon,
	Menu,
	MenuItem,
	Button,
	Drawer,
	Position
} from '@blueprintjs/core';
import {Link} from "react-router-dom";
import "./NavBar.css";


const styles = {
	navbarHeading: {
		color: Colors.LIGHT_GRAY5
	},
	navbarDivider: {
		borderColor: Colors.WHITE3
	}
}

const NavBar = props => {
	const {classes, toggleDrawer, isOpen} = props;
	return(
		<div className={Classes.DARK}>
			<Navbar>
				<NavbarGroup align={Alignment.LEFT}>
					<Link to="/" className="link">
						<NavbarHeading style={styles.navbarHeading}> Orchestrate </NavbarHeading>
					</Link>
					<NavbarDivider style={styles.navbarDivider} />
				</NavbarGroup>
				<NavbarGroup align={Alignment.RIGHT}>
				<Button icon="menu" minimal small onClick={toggleDrawer} />
				</NavbarGroup>
			</Navbar>
			<Drawer 
				className={Classes.DARK} 
				size="20%" 
				isOpen={isOpen} 
				position={Position.RIGHT} 
				onClose={toggleDrawer}
				title="Orchestrate"
			>
				<Menu>
					<Link to="/">
						<MenuItem icon="manual" text="Dashboard"></MenuItem>
					</Link>
				</Menu>
			</Drawer>
		</div>
	)
}

export default NavBar;