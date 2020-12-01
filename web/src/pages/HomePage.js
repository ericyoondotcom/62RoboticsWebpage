import React from "react";
import EngineeringDesignTable from "../components/EngineeringDesignTable";
import ImageSlideshow from "../components/ImageSlideshow";
import Navbar from "../components/Navbar";
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
                    <p>
                        According to all known laws of aviation, there is no way a beeshould be able to fly.
                        Its wings are too small to get its fat little body off the ground.
                        The bee, of course, flies anyway because bees don't care what humans think is impossible.
                        Yellow, black. Yellow, black.
                        Yellow, black. Yellow, black.
                        Ooh, black and yellow! Let's shake it up a little.
                        something about teaching others and learning from whatever uh
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
            </div>
        );
    }
}