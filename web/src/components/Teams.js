import React from "react";
import TeamIcon from "./TeamIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Slide} from "react-slideshow-image";

import ImgA1 from "../resources/team-pics/a-1.jpg";
import ImgA2 from "../resources/team-pics/a-2.png";
import ImgA3 from "../resources/team-pics/a-3.jpg";
import ImgBKV1 from "../resources/team-pics/bkv-1.jpg";
import ImgG1 from "../resources/team-pics/g-1.jpg";
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
        images: [ImgG1]
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
                <blockquote
                    className="instagram-media ig_embed" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CKLMEL3JVwO/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="13">
                    <div>
                        <a href="https://www.instagram.com/p/CKLMEL3JVwO/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank">
                            <div id="0">
                                <div id="1" />
                                <div id="2" />
                                <div id="3" />
                                <div id="4" />
                            </div>
                            <div id="5"></div>
                            <div id="6">
                                <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xlink="https://www.w3.org/1999/xlink">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                            <g>
                                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div id="7">
                                <div id="8"> View this post on Instagram</div>
                            </div>
                            <div id="9"></div>
                            <div id="10">
                                <div>
                                    <div id="11"></div>
                                    <div id="12"></div>
                                    <div id="13"></div>
                                </div>
                                <div id="14">
                                    <div id="15"></div>
                                    <div id="16"></div>
                                </div>
                                <div id="17">
                                    <div id="18"></div>
                                    <div id="19"></div>
                                    <div id="20"></div>
                                </div>
                            </div>
                            <div id="21">
                                <div id="22"></div>
                                <div id="23"></div>
                            </div>
                        </a>
                        <p>
                            <a href="https://www.instagram.com/p/CKLMEL3JVwO/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank">A post shared by Eric Yoonicode (@yoonicode)</a>
                        </p>
                    </div>
                </blockquote>
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