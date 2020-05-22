import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import { Provider } from 'react-redux';
import configureStore from './store';
import routes from './routes';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";


const store = configureStore();

const App = () => (
	<Provider store={store}>
		<div>
			<CssBaseline />
			<Router> 
				{routes()}
			</Router>
		</div>
	</Provider>
)


export default App;
