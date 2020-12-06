import "./App.scss";
import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTimes, faArrowCircleRight, faArrowCircleLeft, faHeart, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "react-slideshow-image/dist/styles.css";

import HomePage from "./pages/HomePage";

library.add(faTimes, faHeart, faChevronLeft, faChevronRight);

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