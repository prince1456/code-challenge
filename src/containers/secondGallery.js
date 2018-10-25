import React, { Component } from "react";
import images from "../constant/constant";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export default class SecondGallery extends Component {
  state = {
    show: false
  };
  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), 5000);
  }
  getImageClass = imgSrc => {
    let newImg = new Image();
    newImg.src = imgSrc;
    const height = newImg.height;
    const width = newImg.width;
    if (height === width) {
      return "big";
    } else if (height > width) {
      return "vertic";
    } else if (width > height) {
      return "horizon";
    } else {
      return "";
    }
  };
  render() {
    if (!this.state.show) {
      return (
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
