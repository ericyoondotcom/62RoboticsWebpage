import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import EngineeringDesignTable from "../components/EngineeringDesignTable";
import ImageSlideshow from "../components/ImageSlideshow";
import Navbar from "../components/Navbar";
import Teams from "../components/Teams";
import LogoDropShadow from "../resources/62-shadow.png";
import EngineeringDesignAnim from "../resources/engineering-design-animation.gif";
import ChangeUpFieldImg from "../resources/changeupfield.png";
import News from "../components/News";

export default class HomePage extends React.Component {

    render(){
        return (
            <div id="main_content">
                <Navbar active={"home"} />
                <div id="title_card">
                    <ImageSlideshow />
                    <div id="center_content">
                        <img id="title_image" src={LogoDropShadow} alt="62 wordmark" />
                        <p id="subtitle">
                            Harvard-Westlake Upper School VEX Robotics
                        </p>
                    </div>
                </div>
                <div id="about" className="rails vertical_padded">
                    <h1 className="smaller">About Our Program</h1>
                    {/*
                    Does it include outreach activities, who you are, where you are, what you have done, and future plans?
                    How well does the website tell the story of the program?
                    Does it provide information for outsiders wanting to learn about your program?
                    how well the website tells the story of your program
                    good descriptions that engages and educates an outside audience wanting to learn about the program
                    the description of the program. Description should be one that engages and educates an outside audience wanting to learn about the program.
                    */}
                    
                    <p>
                        Team 62 is <a href="https://hw.com" target="_blank" rel="noreferrer" style={{textDecoration: "underline"}}>Harvard-Westlake</a> Upper School's VEX Robotics program, located in Studio City, California.
                        <div style={{marginTop: "15px"}} />
                        The HW Robotics team designs, builds, and programs robots to compete in local and regional VEX tournaments.
                        We have been competing in VRC since 2015, and our teams have competed in the world championships.
                        This year, six teams are collaborating remotely to design and build robots for the 2020-2021 <i>Change Up</i> competition,
                        and even more teams are learning to design and build robots that are competition-ready.
                        <div style={{marginTop: "15px"}} />
                        HW offers many great resources to help teams thrive, such as state-of-the-art technology for prototyping and building.
                        Our fantastic mentor, Andrew Theiss, helps teams learn what they need to succeed.
                        Many different skills are useful in robotics - designing, building, programming, driving, and leadership, and each student has something unique to bring to the program.
                        Any HW student can start a team and people of all robotics experience levels, from curious newcomers to seasoned engineers, are encouraged to join!
                        <div style={{marginTop: "15px"}} />
                        HW students, ready to start your robotics journey? Email <a href="mailto:atheiss@hw.com" target="blank">atheiss@hw.com</a> for more information!
                    </p>
                </div>
                <a href="https://www.vexrobotics.com/v5/competition/vrc-current-game" target="_blank" rel="noreferrer">
                    <div id="game_link">
                        <div id="bg" style={{
                            backgroundImage: `url(${ChangeUpFieldImg})`
                        }} />
                        <p>
                            About the Change Up Game <FontAwesomeIcon icon="chevron-right" />
                        </p>
                    </div>
                </a>
                <div id="process" className="vertical_padded">
                    <div className="rails">
                        <h1>Our Design Process</h1>
                        <p>We use the Engineering Design process throughout every step of the way.</p>
                        <img src={EngineeringDesignAnim} id="engineering_design_animation" alt="Engineering design process animation: question, brainstorm, plan, build, test, iterate, and share" />
                    </div>
                    <div style={{marginTop: "50px"}} />
                    <EngineeringDesignTable />
                </div>
                <div id="teams" className="vertical_padded">
                    <h1>Meet the Teams</h1>
                    <p>
                        Click on a team to learn more!<br />
                        <i>Note: 2020-2021 teams are not finalized.</i>
                    </p>
                    <Teams />
                </div>
                <div id="acknowledgements" className="rails vertical_padded">
                    <h1 className="smaller">Acknowledgements</h1>
                    <p>
                        We'd like to thank our Upper School coach and mentor, Andrew Theiss, for his continued support and guidance, and
                        Tripp Reed, HW Middle School's robotics coach, for introducing many of our teams to VEX.
                        Thank you to all of the Harvard-Westlake faculty and administrators for supporting
                        the robotics program, especially Rick Commons, Laura Ross, Beth Slattery, and Jon Wimbish.
                        <div style={{marginTop: "15px"}} />
                        Finally, thank you to VEX Robotics and the REC Foundation for hosting the competition and
                        promoting robotics education around the world!
                    </p>
                </div>
                <div id="news" className="rails vertical_padded">
                    <h1 className="smaller">In the News</h1>
                    <News />
                </div>
                <div id="footer">
                    <p>Website made with <FontAwesomeIcon icon="heart" /> by Eric Yoon – Team 62X</p>
                </div>
            </div>
        );
    }
}