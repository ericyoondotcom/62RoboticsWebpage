import React from "react";
import Navbar from "../components/Navbar";

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="main_content">
                <Navbar active={"about"} />
            </div>
        );
    }
}