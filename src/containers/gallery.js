import React, { Component } from 'react'
import images from '../constant/constant';
import { Link } from 'react-router-dom';
import { Icon } from "semantic-ui-react";
export default class Gallery extends Component{
    state = {
        show: false
    }
    componentDidMount(){
        setTimeout(() => this.setState({show: true}), 5000)
    }
    getImageWidth = (imgSrc) => {
        let newImg = new Image();
        newImg.src = imgSrc;
        return 1200 / newImg.width < 4 ?  'horizontal' : ''
      }
      getImageHeights = (imgSrc) => {
        let newImg = new Image();
        newImg.src = imgSrc;
        let vertical = Math.round(newImg.height/200) > 10 ? 10 : Math.round(newImg.height/200);
        return `vertical-${vertical}`
      }
      getImageHeight = (imgSrc) => {
        let newImg = new Image();
        newImg.src = imgSrc;
        return newImg.height
      }
    render(){
        if(!this.state.show) {
            return(
                <div className="loader"><Icon loading name='spinner' size="massive"/></div>
            )
        }
        return (
            
                <div className='container'>
                <div>
                    <ul>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/second-gallery'>Second Gallery</Link></li>
                    </ul>
                    </div>
                    <div className='gallery'>
                        {images.map((image, i) => {

                            return (
                                <div key={i} className={`gallery_item ${this.getImageWidth(image.url)} ${this.getImageHeights(image.url)} `}>
                                  <img  alt="ss" src={image.url}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            
        )
    }
}