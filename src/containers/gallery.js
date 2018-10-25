import React, { Component } from 'react'
import images from '../constant/constant';
import { Link } from 'react-router-dom';
import './styles.scss';

export default class Gallery extends Component{
    getImageWidth = (imgSrc) => {
        let newImg = new Image();
        newImg.src = imgSrc;
        console.log(window.innerWidth, newImg.width, window.innerWidth / newImg.width)
        return 1200 / newImg.width < 4 ?  'horizontal' : ''
        // return newImg.width > 250 ? 'w2' : 'w1' 
      }
      getImageHeights = (imgSrc) => {
        let newImg = new Image();
        newImg.src = imgSrc;
        // console.log('height', 200, newImg.height, 200 / newImg.height)
        console.log("CSS", `vertical-${Math.round(newImg.height/200)}`, newImg.height ,imgSrc)
        let vertical = Math.round(newImg.height/200) > 10 ? 10 : Math.round(newImg.height/200);
        return `vertical-${vertical}`
        // newImg.height > 500 ? `vertical-3` : 500 / newImg.width >= 1 ?  `vertical` : '';
        // return newImg.height > 250 ? 'h2' : 'h1'
      }
      getImageHeight = (imgSrc) => {
        let newImg = new Image();
        newImg.src = imgSrc;
        return newImg.height
      }

    // getStyle = (img, major) => {
    //     let newImg = new Image();
    //         newImg.src = img; 
    //         return `span ${newImg[major] / 5 === 0 ? 1 : Math.random(newImg[major] / 5)}`
    //                 // 'gridRow': `span ${newImg.height / 5 === 0 ? 1 : Math.random(newImg.height / 5)}`
    // }
    render(){
        return (
            
                <div className='container'>
                <div>
                    <ul>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                    </div>
                    <div className='gallery'>
                        {images.map((image, i) => {

                            return (
                                <div key={i} className={`gallery_item ${this.getImageWidth(image.url)} ${this.getImageHeights(image.url)} `}>
                                {/* //  style={{gridColumn: this.getStyle(image.url, 'width'), gridRow: this.getStyle(image.url, 'height')}}> */}
                                  <img  alt="ss" src={image.url}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            
        )
    }
}