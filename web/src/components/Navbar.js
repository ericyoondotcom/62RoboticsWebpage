import React from "react";
import PropTypes from "prop-types";
import Logo62 from "../resources/62.png";
import LogoHW from "../resources/hw-bw.png";
import {Link} from "react-router-dom";

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
                <Link to="#about">
                    <div class={`item ${active == "about" ? "active" : ""}`}>
                        <p>About</p>
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