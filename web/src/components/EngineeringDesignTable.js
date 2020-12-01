import React from "react";
import Question from "../resources/engdes/question.png";
import Brainstorm from "../resources/engdes/brainstorm.png";
import Plan from "../resources/engdes/plan.png";
import Build from "../resources/engdes/build.png";
import Test from "../resources/engdes/test.png";
import Iterate from "../resources/engdes/iterate.png";
import Share from "../resources/engdes/share.png";

const ITEMS = [
    {
        image: Question,
        title: "Question",
        description: "Starting the day the season's game is released, we devise strategies, swap notes, and analyze the game."
    },
    {
        image: Brainstorm,
        title: "Brainstorm",
        description: "Each team comes up with ideas for robot designs and weighs the advantages and disadvantages of each design. Throughout the whole process, teams collaborate with each other and share ideas."
    },
    {
        image: Plan,
        title: "Plan",
        description: "Once teams have their preliminary designs, we start designing our robots. Using amazing tools and software at our disposal such as Fusion 360 for modelling and 3D printers for prototyping, along with weekly CAD tutorials from our mentor, we prototype our builds."
    },
    "break",
    {
        image: Build,
        title: "Build",
        description: "After modelling our robots, we start building! Those new to robotics learn practical engineering skills from experience, our mentor, and peers."
    },
    {
        image: Test,
        title: "Test",
        description: "Using empirical testing and statistical analysis, we identify which solutions are working and which aren't. This allows for rapid iteration and improvement."
    },
    {
        image: Iterate,
        title: "Iterate",
        description: "We're always changing and improving our designs as we collect more data, go to competitions, and see emerging designs."
    },
    {
        image: Share,
        title: "Share",
        description: "We're constantly sharing information across teams and with other schools. Additionally, each team keeps an engineering notebook, a journal summarizing each step of the journey."
    }
]

class EngineeringDesignTable extends React.Component {
    
    render(){
        return (
            <div id="engineering_design_table">
                {
                    ITEMS.map(i => {
                        if(i === "break") {
                            return (
                                <div class="break" />
                            );
                        }
                        return (
                            <div class="item">
                                <div class="circle">
                                    <img src={i.image} alt="Question icon" />
                                </div>
                                <h2>{i.title}</h2>
                                <p>{i.description}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

EngineeringDesignTable.propTypes = {
    
};

export default EngineeringDesignTable;