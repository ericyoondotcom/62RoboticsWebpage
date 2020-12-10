import React from "react";
import TeamIcon from "./TeamIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Slide} from "react-slideshow-image";

import ImgA1 from "../resources/team-pics/a-1.jpg";
import ImgA2 from "../resources/team-pics/a-2.png";
import ImgA3 from "../resources/team-pics/a-3.jpg";
import ImgBKV1 from "../resources/team-pics/bkv-1.jpg";
import ImgK1 from "../resources/team-pics/k-1.jpg";
import ImgK2 from "../resources/team-pics/k-2.jpg";
import ImgX1 from "../resources/team-pics/x-1.png";
import ImgX2 from "../resources/team-pics/x-2.jpg";
import ImgX3 from "../resources/team-pics/x-3.png";
import ImgX4 from "../resources/team-pics/x-4.jpg";
import ImgX5 from "../resources/team-pics/x-5.jpg";
import ImgX6 from "../resources/team-pics/x-6.jpg";
import XPanShotVideo from "../resources/x-pan-shot.mp4";

const TEAM_INFO = {
    A: {
        subtitle: "Christopher Ladreyt, Dru Reed, Isaiah Jeter, Jake Futterman, Reggie Kim, Yvette Copeland",
        content: (
            <p>
                62A is one of our most accomplished and experienced teams. They qualified for States in 2019-2020 and they competed
                in VEX Worlds in 2018-2019. They were undefeated CA State Champions in 2019.
                Their other achievements include VEX Worlds Science Division Quarter Finalist in 2019,
                CREATE US Open Blue Division Quarter Finalist in 2019, and The Wave at WPI Signature Event Round of 16 in 2020.
                Their newest member, Dru, was the 2019 World Skills Champion with his former middle school team, 3324V.
            </p>
        ),
        images: [ImgA1, ImgA2, ImgA3]
    },
    B: {
        subtitle: "Aidan Yap, Benjamin Ham, Ethan Wang, Jaydon Faal, Justin Sun, Mateen Sharifi, Matthew Messaye, Peter Shen",
        content: (
            <p>
                62B is a highly skilled team who qualified for the VEX World Championship during the 2019-2020 season,
                though it was canceled due to the pandemic. This year, they are joined by four new sophomore and junior members.
            </p>
        ),
        images: [ImgBKV1]
    },
    G: {
        subtitle: "Page Clancy",
        content: (
            <p>
                Page competed in Tower Takeover during the 2019-2020 season and is returning to compete in this year's Change Up tournament!
            </p>
        ),
        images: []
    },
    K: {
        subtitle: "Lucas Grad, Maya Mathur, Navid Ghodsi, Ryan Tsai, Will Farhat",
        content: (
            <p>
                62K is a team of juniors and seniors. The team qualified for the California State Championships and won two Judges Awards during the 2019-2020 season.
            </p>
        ),
        images: [ImgK1, ImgK2, ImgBKV1]
    },
    X: {
        subtitle: "Andrew Eitner, Anika Iyer, Eric Yoon, Karen Wu, Kensuke Shimojo",
        content: (
            <p>
                62X is a team of sophomores and a robot named Turbo! Competing as 462X at HW's middle school campus for the 2019-2020 Tower Takeover season,
                they won Excellence and Design awards and qualified for States. Though the State Championship was canceled due
                to the pandemic, 62X is hoping to build upon what they learned from their first year in VEX to reach States again.
                <div style={{marginTop: "15px"}} />
                Andrew, Karen, and Kensuke are aspiring engineers and the team's builders; Kensuke specializes in using Blender
                to create CAD models and plans. Anika is the team's strategist— with her extensive VEX IQ and EDR experience,
                she specializes in creating game plans and documenting the team's process in the Engineering Notebook. Eric is the team's
                programmer and driver. With his 6+ years of programming experience, he is in charge of programming driver control and autonomous.
                Additionally, Eric developed a Virtual Reality simulator utilizing Kensuke's CAD models to help him practice driving at home.
                <video autoPlay muted loop src={XPanShotVideo} id="x_cad_video" />
            </p>
        ),
        images: [ImgX2, ImgX3, ImgX1, ImgX4, ImgX5, ImgX6]
    },
    Z: {
        subtitle: "Everett Tolbert-Schwartz, Henry Burdorf, Louis Hess, Michael Miyajima, Walker McGinley",
        content: (
            <p>
                62Z is a team of juniors who have built up experience from competing in the 2019-2020 Tower Takeover season.
                They are returning for the 2020-2021 Change Up season and are excited to compete!
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