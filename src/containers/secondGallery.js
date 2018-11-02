import React, { Component } from "react";
import images from "../constant/constant";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export default class SecondGallery extends Component {
  state = {
    show: false
  };
  componentDidMount() {
    // load the page after 5 second
    setTimeout(() => this.setState({ show: true }), 5000);
  }
  getImageClass = imgSrc => {
    // declaring the type of image which is horizontal or vertical or squre and then pass right class to the each image
    // in this solution simply im adding one of the class big vertic or horizon to the image depends the conditions
    let newImg = new Image();
    newImg.src = imgSrc;
    const height = newImg.height;
    const width = newImg.width;
    if (height === width) {
      // add class big if height and width is same size
      return "big";
    } else if (height > width) {
      // add class vertic if height is bigger than width
      return "vertic";
    } else if (width > height) {
      // add classs horizon if the width is bigger than height
      return "horizon";
    } else {
      return "";
    }
  };
  render() {
    if (!this.state.show) {
      return (
        // show loader before images completly load in the page.
        <div className="loader">
          <Icon loading name="spinner" size="massive" />
        </div>
      );
    }
    return (
      <div className="container">
        <div>
          <ul>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/second-gallery">Second Gallery</Link>
            </li>
          </ul>
        </div>
        <div className="second-gallery">
          {images.map((image, i) => {
            return (
              // render images in DOM with different class depends the size of image
              <div key={i} className={`${this.getImageClass(image.url)}`}>
                <img alt="ss" src={image.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
