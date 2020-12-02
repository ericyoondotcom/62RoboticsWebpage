import React from "react";
import PropTypes from "prop-types";
import Logo62 from "../resources/62.png";
import LogoHW from "../resources/hw-bw.png";
import {HashLink as Link} from "react-router-hash-link";

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            logoHovering: false
        };
    }

    render(){
        const {active} = this.props;

        return (
            <div id="navbar">
                <div
                    id="logo_container"
                    onMouseEnter={() => {
                        this.setState({logoHovering: true});
                    }}
                    onMouseLeave={() => {
                        this.setState({logoHovering: false});
                    }}
                >
                    <div id="logo_content">
                        <img src={LogoHW} alt="Harvard-Westlake Wordmark" class={this.state.logoHovering ? "hidden" : ""} />
                        <img src={Logo62} alt="62 Wordmark" class={this.state.logoHovering ? "" : "hidden"} />
                    </div>
                </div>
                <Link to="#home">
                    <div class={`item ${active == "home" ? "active" : ""}`}>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="#about">
                    <div class={`item ${active == "about" ? "active" : ""}`}>
                        <p>About</p>
                    </div>
                </Link>
                <Link to="#process">
                    <div class={`item ${active == "process" ? "active" : ""}`}>
                        <p>Our Process</p>
                    </div>
                </Link>
                <Link to="#teams">
                    <div class={`item ${active == "process" ? "active" : ""}`}>
                        <p>Meet the Teams</p>
                    </div>
                </Link>
                <Link to="#acknowledgements">
                    <div class={`item ${active == "process" ? "active" : ""}`}>
                        <p>Acknowledgements</p>
                    </div>
                </Link>
            </div>
        );
    }
}

Navbar.propTypes = {
    active: PropTypes.string
};
export default Navbar;