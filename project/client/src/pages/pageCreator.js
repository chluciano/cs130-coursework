import React from 'react';
import NavBar from "../components/NavBar";
import {withStyles} from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import { connect } from 'react-redux';
import {Classes} from '@blueprintjs/core';

const styles = {
	componentContainer: {
		paddingTop: '2.5%',
		paddingLeft: '5%',
		paddingRight: '5%'
	}
}

const PageCreator = (Component) => {
	class PageLayout extends React.Component {
		constructor(props){
			super(props);
			this.state = {

			}
		}

		render(){
			const props = this.props;
			return(
				<div>
					<NavBar />
					<div style={styles.componentContainer}>
						<Component  {...props} />
					</div>
				</div>
			)
		}
	}

	const mapStateToProps = (state) => {
		return state;
	}

	return connect(mapStateToProps)(PageLayout);
}


export default PageCreator;
