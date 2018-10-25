import React, { Component } from 'react'
import images from '../constant/constant';
import { Link } from 'react-router-dom';
import './styles.scss';

export default class SecondGallery extends Component{
   
      getImageClass = (imgSrc) => {
        let newImg = new Image();
        newImg.src = imgSrc;
        const height =  newImg.height;
        const width = newImg.width;
        if(height === width ) {
            return 'big'
        } else if(height > width) {
            return 'vertic'
        } else if(width > height ) {
            return "horizon"
        } else {
            return ''
        }
        // console.log('height', 200, newImg.height, 200 / newImg.height)
        // console.log("CSS", `vertical-${Math.round(newImg.height/200)}`, newImg.height ,imgSrc)
        // let vertical = Math.round(newImg.height/200) > 10 ? 10 : Math.round(newImg.height/200);
        // return `vertical-${vertical}`
        // newImg.height > 500 ? `vertical-3` : 500 / newImg.width >= 1 ?  `vertical` : '';
        // return newImg.height > 250 ? 'h2' : 'h1'
      }
      
    // getStyle = (img, major) => {
    //     let newImg = new Image();
    //         newImg.src = img; 
    //         return `span ${newImg[major] / 5 === 0 ? 1 : Math.random(newImg[major] / 5)}`
    //                 // 'gridRow': `span ${newImg.height / 5 === 0 ? 1 : Math.random(newImg.height / 5)}`
    // }
    render(){
        return (
            
                <div className=''>
                <div>
                    <ul>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/second-gallery'>Second Gallery</Link></li>
                    </ul>
                    </div>
                    <div className='second-gallery'>
                        {images.map((image, i) => {

                            return (
                                <div key={i} className={`${this.getImageClass(image.url)}`}>
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