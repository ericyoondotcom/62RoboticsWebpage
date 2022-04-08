import React from "react";
import Slideshow0 from "../resources/slideshow/slideshow_0.jpg";
import Slideshow1 from "../resources/slideshow/slideshow_1.jpg";
import Slideshow2 from "../resources/slideshow/slideshow_2.jpg";
import Slideshow3 from "../resources/slideshow/slideshow_3.jpg";

const SLIDESHOW_IMAGES = [
    Slideshow0, Slideshow1, Slideshow2, Slideshow3
];

const SLIDESHOW_SPEED = 5000;

class ImageSlideshow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: 0
        };

        setInterval(() => {
            this.setState({
                image: (this.state.image + 1) % SLIDESHOW_IMAGES.length
            });
        }, SLIDESHOW_SPEED);
    }
    
    render(){
        return (
            <div id="slideshow">
                {
                    SLIDESHOW_IMAGES.map((img, index) => {
                        return (
                            <img src={img} class={this.state.image == index ? "visible" : ""} />
                        )
                    })
                }
            </div>
        );
    }
}

ImageSlideshow.propTypes = {
    
};

export default ImageSlideshow;