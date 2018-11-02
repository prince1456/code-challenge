import React, { Component } from 'react'
import images from '../constant/constant';
import { Link } from 'react-router-dom';
import { Icon } from "semantic-ui-react";
export default class Gallery extends Component{
    state = {
        show: false
    }
    componentDidMount(){
        // show the page after 5 second
        setTimeout(() => this.setState({show: true}), 5000)
    }
    // assign different class for different image width
    getImageWidth = (imgSrc) => {
        let newImg = new Image();
        newImg.src = imgSrc;
        // passing class horizontal if image container size divide by image width is smaller than 4  if not dont pass anything
        return 1200 / newImg.width < 4 ?  'horizontal' : ''
      }
    // assign different class for different image height

      getImageHeights = (imgSrc) => {
        let newImg = new Image();
        newImg.src = imgSrc;
        // if image size /200 smaller was bigger than 10 pass class .vertical-10 or if not pass round of imagehight / 2 like .vertical-3
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
                // show loader before image load completed.
                <div className="loader"><Icon loading name='spinner' size="massive"/></div>
            )
        }
        return (
            
                <div className='container'>
                <div>
                    <ul>
                        {/* top navigation */}
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/second-gallery'>Second Gallery</Link></li>
                    </ul>
                    </div>
                    <div className='gallery'>
                        {/* rendering images from list of images and getting different class name for different image size */}
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