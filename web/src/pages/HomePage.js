import React from "react";
import EngineeringDesignTable from "../components/EngineeringDesignTable";
import ImageSlideshow from "../components/ImageSlideshow";
import Navbar from "../components/Navbar";
import Teams from "../components/Teams";
import LogoDropShadow from "../resources/62-shadow.png";
import EngineeringDesignAnim from "../resources/engineering-design-animation.gif";

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

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
                    <h1>About Our Program</h1>
                    {/*
                    Does it include outreach activities, who you are, where you are, what you have done, and future plans?
                    How well does the website tell the story of the program?
                    Does it provide information for outsiders wanting to learn about your program?
                    how well the website tells the story of your program
                    good descriptions that engages and educates an outside audience wanting to learn about the program
                    the description of the program. Description should be one that engages and educates an outside audience wanting to learn about the program.
                    */}
                    
                    <p>
                        Team 62 is <a href="https://hw.com">Harvard-Westlake</a>'s Upper School Campus VEX Robotics program, located in Studio City, California.
                        <br />Here's some of the criteria that i have to write for ;-;
                        <br />Does it include outreach activities, who you are, where you are, what you have done, and future plans?
                        <br />How well does the website tell the story of the program?
                        <br />Does it provide information for outsiders wanting to learn about your program?
                        <br />how well the website tells the story of your program
                        <br />good descriptions that engages and educates an outside audience wanting to learn about the program
                        <br />the description of the program. Description should be one that engages and educates an outside audience wanting to learn about the program.
                    </p>
                </div>
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
                        <i>Note: 2020 teams are not finalized.</i>
                    </p>
                    <Teams />
                </div>
                <div id="acknowledgements">
                    
                </div>
            </div>
        );
    }
}