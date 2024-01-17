import React, { Component } from "react";
import "./Carousel.css";

import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state={
            index: 0
        }
    }

    perviousImage=()=>{
        this.setState({
            index: this.state.index-1
        })
    }

    nextImage=()=>{
        this.setState({
            index: this.state.index+1
        })
    }
    
  render() {
    return (
      <div>
        <div className="mainDiv" style={{
            backgroundImage : `url(${images[this.state.index].img})`
        }}>
          <div className="left" onClick={this.state.index>0 &&this.perviousImage}><ArrowBackIosIcon style={{fontSize:"30px"}}/></div>
          <div className="center">
            <h1 id="xyz">{images[this.state.index].title}</h1>
            <h1>{images[this.state.index].subtitle}</h1>
          </div>
          <div className="right" onClick={ this.state.index<images.length-1 && this.nextImage}><ArrowForwardIosIcon style={{fontSize:"30px"}}/></div>
        </div>
      </div>
    )
  }
}

  


export default Carousel;