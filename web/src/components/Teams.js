import React from "react";
import TeamIcon from "./TeamIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Slide} from "react-slideshow-image";

import ImgX1 from "../resources/team-pics/x-1.jpg";
import ImgX2 from "../resources/team-pics/x-2.png";
import ImgX3 from "../resources/team-pics/x-3.jpg";
import ImgX4 from "../resources/team-pics/x-4.jpg";

const TEAM_INFO = {
    A: {
        subtitle: "Benjamin Ren, Dru Reed, Kaito de Anda",
        content: (
            <p>
                62A is one of our most accomplished and experienced teams. They are the SoCal Los Angeles state champions,
                and have won numerous awards, including the excellence award at 2019 SoCal states. 62A will be cometing in
                VEX Worlds this year.
            </p>
        ),
        images: []
    },
    B: {
        subtitle: "Aidan Yap, Ethan Wang, Justin Sun, Peter Shen",
        content: (
            <p>
                62B is a reigning world championship team, having won VEX Worlds in the 2020-2021 Change Up season.
                They are returning to worlds this year.
            </p>
        ),
        images: []
    },
    F: {
        subtitle: "Matthew Ko, Steven Ko",
        content: (
            <p>
                62F is an experienced team who has been competing since 2019-2020 and competed in several tournaments this year.
            </p>
        ),
        images: []
    },
    X: {
        subtitle: "Anika Iyer, Audrey Engman, Eric Yoon, Karen Wu, Kensuke Shimojo",
        content: (
            <p>
                62X is a team of juniors who have been competing since 2019-2020. During the 2020-2021 season, they reached subdivision
                semifinalists in VEX Worlds, and they will be returning to VEX Worlds this year after qualifying through skills.
                <div style={{textAlign: "center", marginTop: "30px"}}>
                    <iframe title="VR Driving Simulation" width="560" height="315" src="https://www.youtube.com/embed/8iuNajfST8g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </p>
        ),
        images: [ImgX2, ImgX3, ImgX1, ImgX4]
    },
    V: {
        subtitle: "",
        content: (
            <p>
                
            </p>
        ),
        images: []
    },
    Y: {
        subtitle: "",
        content: (
            <p>
                
            </p>
        ),
        images: []
    },
    Z: {
        subtitle: "Jack Austen, Oren Hartstein",
        content: (
            <p>
                62Z is a team of juniors who have built up experience from competing in the 2019-2020 Tower Takeover season.
                They made it to quarterfinals in the San Diego State Championship.
            </p>
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