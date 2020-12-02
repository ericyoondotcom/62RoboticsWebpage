import React from "react";
import PropTypes from "prop-types";
import Gear from "../resources/gear_Gear.png";
import GearBG from "../resources/gear_BG.png";

class TeamIcon extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <div class="team_icon" onClick={() => {
                if(this.props.onClick != null) this.props.onClick();
            }}>
                <img src={Gear} alt="" class="gear_outline" />
                <img src={GearBG} alt="" style={{
                    filter: `hue-rotate(${this.props.hue}deg)`
                }} />
                <div class="identifier_container">
                    <p>{this.props.identifier}</p>
                </div>
            </div>
        );
    }
}

TeamIcon.propTypes = {
    identifier: PropTypes.string.isRequired,
    hue: PropTypes.number.isRequired,
    onClick: PropTypes.func
};

export default TeamIcon;