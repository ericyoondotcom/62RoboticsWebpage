import React from "react";

// TODO

class Collapsable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shown: false
        };
    }
    
    render(){
        return (
            <div class="collapsible">
                <div class="handle">
                    
                </div>
            </div>
        );
    }
}

Collapsable.propTypes = {
    
};

export default Collapsable;