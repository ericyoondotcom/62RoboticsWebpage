import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LINKS = [
    {
        text: "1/23 HW Live Remote Tournament",
        url: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-20-3075.html",
        highlighted: true
    },
    {
        text: "Team 62 Declared Finalist in VRC Team Website Challenge",
        subtitle: "January 2021",
        url: "https://challenges.robotevents.com/challenge/118/entry?filter=finalists"
    },
    {
        text: "12/12 HWMS Online Skills Tournament",
        subtitle: "December 2020",
        url: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-20-2791.html"
    },
    {
        text: "Robotics championships canceled due to pandemic",
        subtitle: "June 2020",
        url: "http://hwchronicle.com/robotics-championships-canceled-due-to-pandemic/"
    },
    {
        text: "Robotics team 62B wins VEX Robotics Tournament",
        subtitle: "February 2020",
        url: "http://hwchronicle.com/robotics-team-62x-wins-tournament/"
    },
    {
        text: "Robotics Team Continues Success",
        subtitle: "December 2019",
        url: "http://hwchronicle.com/robotics-team-continues-success/"
    },
    {
        text: "Robotics students visit SpaceX Center",
        subtitle: "October 2019",
        url: "http://hwchronicle.com/robotics-students-visit-spacex-center/"
    },
    {
        text: "Robotics subteam 62X qualifies for state tournament",
        subtitle: "October 2019",
        url: "http://hwchronicle.com/robotics-subteam-62x-qualifies-for-state-tournament/"
    },
    {
        text: "Robotics teams compete at World Championships",
        subtitle: "May 2019",
        url: "http://hwchronicle.com/robotics-teams-compete-at-world-championships/"
    },
    {
        text: "Robotics subteams place in tournament",
        subtitle: "February 2019",
        url: "http://hwchronicle.com/robotics-subteams-place-in-tournament/"
    },
    {
        text: "Robotics subteams win awards in skills and buildings",
        subtitle: "November 2018",
        url: "http://hwchronicle.com/robotics-subteams-win-awards-in-skills-and-buildings/"
    },
    {
        text: "Sophomore teaches robotics in Ethiopian middle school",
        subtitle: "August 2018",
        url: "http://hwchronicle.com/sophomore-teaches-robotics-in-ethiopian-middle-school/"
    }
];

export default class News extends React.Component {

    render(){
        return (
            <div id="news_grid">
                {
                    LINKS.map((i) => {
                        return (
                            <div className={`item ${i.highlighted === true ? "highlighted" : ""}`}>
                                    <div>
                                        <a href={i.url} target="_blank" rel="noreferrer"><p>{i.text}</p></a>
                                        {
                                            i.subtitle != undefined && i.subtitle != null ? (
                                                <p class="subtitle">{i.subtitle}</p>
                                            ) : null
                                        }
                                    </div>
                                    <a href={i.url} target="_blank" rel="noreferrer"><span class="icon"><FontAwesomeIcon icon="chevron-right" /></span></a>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}