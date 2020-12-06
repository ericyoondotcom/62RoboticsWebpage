import React from "react";
import TeamIcon from "./TeamIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Slide} from "react-slideshow-image";

import ImgK1 from "../resources/team-pics/k-1.jpg";
import ImgK2 from "../resources/team-pics/k-2.jpg";
import ImgX1 from "../resources/team-pics/x-1.png";
import ImgX2 from "../resources/team-pics/x-2.jpg";

const TEAM_INFO = {
    A: {
        subtitle: "Christopher Ladreyt, Dru Reed, Isaiah Jeter, Jake Futterman, Reggie Kim, Yvette Copeland",
        content: (
            <p>👀</p>
        ),
        images: []
    },
    B: {
        subtitle: "Aidan Yap, Benjamin Ham, Ethan Wang, Jaydon Faal, Justin Sun, Mateen Sharifi, Matthew Messaye, Peter Shen",
        content: (
            <p>👀</p>
        ),
        images: []
    },
    F: {
        subtitle: "Joshua Cheng, Matthew Ko, Steven Ko",
        content: (
            <p>👀</p>
        ),
        images: []
    },
    // G: {
            // Page???
    // },
    K: {
        subtitle: "Lucas Grad, Maya Mathur, Navid Ghodsi, Ryan Tsai, Will Farhat",
        content: (
            <p>👀</p>
        ),
        images: [ImgK1, ImgK2]
    },
    X: {
        subtitle: "Andrew Eitner, Anika Iyer, Eric Yoon, Karen Wu, Kensuke Shimojo",
        content: (
            <p>
                62X is team of sophomores and a robot named Turbo! Competing as 462X at HW's middle school campus for Tower Takeover,
                they won Excellence and Design awards and qualified for States. Though the state tournament was cancelled due
                to the pandemic, 62X is hoping to build upon what they learned from their first year in VEX to reach States again.
                <div style={{marginTop: "15px"}} />
                Andrew, Karen, and Kensuke are aspiring engineers and the team's builders; Kensuke specializes in using Blender
                to create CAD models and plans. Anika is the team's strategist— with her extensive VEX IQ and EDR experience,
                she specializes in creating game plans and documenting the team's process in the Engineering Notebook. Eric is the team's
                programmer and driver. With his 7+ years of programming experience, he is in charge of programming driver control and autonomous.
                Additionally, Eric developed a Virtual Reality simulator utilizing Kensuke's CAD models to help him practice driving at home.
            </p>
        ),
        images: [ImgX1, ImgX2]
    },
    Z: {
        subtitle: "Everett Tolbert-Schwartz, Henry Burdorf, Louis Hess, Michael Miyajima, Walker McGinley",
        content: (
            <p>👀</p>
        ),
        images: []
    }
}

const slideProperties = {
    duration: 5000,
    transitionDuration: 500,
    easing: "ease",
    infinite: true,
    prevArrow: (
        <div className="slide_arrow left">
            <FontAwesomeIcon icon="chevron-left" />
        </div>
    ),
    nextArrow: (
        <div className="slide_arrow right">
            <FontAwesomeIcon icon="chevron-right" />
        </div>
    )
};

export default class Teams extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        };
    }
    
    render(){
        const {selected} = this.state;
        const team = selected == null ? null : TEAM_INFO[selected];
        return (
            <>
            <div id="teams_library">
                {
                    Object.keys(TEAM_INFO).map((identifier, i, keys) => {
                        return (
                            <TeamIcon key={"teamicon-" + i} identifier={identifier} hue={360 * i / keys.length} onClick={() => {
                                this.onTeamClick(identifier);
                            }} />
                        );
                    })
                }
            </div>
            <div id="team_info" className={`${selected == null ? "hidden" : ""}`}>
                <span id="close_button" onClick={() => {
                    this.setState({selected: null}, () => {
                        window.location.hash = `#teams`;
                    });
                }}>
                    <FontAwesomeIcon icon="times" />
                </span>
                {
                    selected == null ? null : (
                        <>
                            <h1>Team 62{selected}</h1>
                            <h2>{team.subtitle}</h2>
                            <div style={{marginTop: "50px"}} />
                            <div class="team_content">
                                {team.content}
                            </div>
                            <div style={{marginTop: "50px"}} />
                            {
                                team.images.length > 0 ? (
                                    <Slide {...slideProperties}>
                                        {
                                            team.images.map((image, i) => {
                                                return (
                                                    <div key={`teamimageslide-${i}`} className="slide">
                                                        <div class="img_container">
                                                            <img src={image} />
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </Slide>
                                ) : null
                            }
                        </>
                    )
                }
            </div>
            </>
        );
        
    }

    onTeamClick = (team) => {
        if(this.state.selected === team){
            this.setState({selected: null}, () => {
                window.location.hash = `#teams`;
            });
        } else {
            this.setState({selected: team}, () => {
                window.location.hash = `#team_info`;
            });
        }
    }
}