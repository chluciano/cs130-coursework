import React, {Fragment} from 'react';
import pageCreator from './pageCreator';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core/styles";

const styles = {
	root: {
		flexGrow: 1,
		paddingTop: 25
	},
	paper: {
		height: 300,
		padding: 10
	}
}

const Profile = props => {
  const {classes} = props;
  return (
  	<div className={classes.root}>
          Profile
	</div>
  );
}

export default withStyles(styles)(pageCreator(Profile));
