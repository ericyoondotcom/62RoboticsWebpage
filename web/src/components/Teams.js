import React from "react";
import TeamIcon from "./TeamIcon";

const TEAM_INFO = {
    A: {

    },
    B: {

    },
    F: {

    },
    G: {

    },
    K: {

    },
    X: {

    },
    Z: {

    }
}

export default class Teams extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        };
    }
    
    render(){
        const {selected} = this.state;

        return (
            <>
            <div id="teams-library" className={`${selected == null ? "" : "hidden"}`}>
                {
                    Object.keys(TEAM_INFO).map((identifier, i, keys) => {
                        return (
                            <TeamIcon identifier={identifier} hue={360 * i / keys.length} onClick={() => {
                                this.onTeamClick(identifier);
                            }} />
                        );
                    })
                }
            </div>
            <div id="team-info" className={`${selected == null ? "hidden" : ""}`}>
                <h1>Team 62{selected}</h1>
            </div>
            </>
        );
        
    }

    onTeamClick = (team) => {
        this.setState({selected: team});
    }
}