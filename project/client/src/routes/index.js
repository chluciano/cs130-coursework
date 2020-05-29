import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import Roster from "../pages/Roster";
import Homework from "../pages/Homework";

const Routes = () => {
	return(
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/courses/:courseid/roster" component={Roster} />
		</Switch>
	)
}

export default Routes;