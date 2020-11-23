import "./App.scss";
import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import HomePage from "./pages/HomePage";

class App extends React.Component {
	render(){
		return (
			<Router>
				<Route path="/" exact component={HomePage} />
			</Router>
		);
	}
}

App.propTypes = {
	
};

export default App;