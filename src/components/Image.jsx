import React, { Component } from 'react'
import { ImageContainer } from '../component_styles/ImageStyles'

export default class Image extends Component {
  render() {
    return (
      <ImageContainer>
        <img src='https://farm8.staticflickr.com/7872/47381648761_d0d4b559ef_k.jpg' alt={this.props.imageAlt} />
        <div className="balloon-flex">
          <div className="heart heartOne"><i class="far fa-heart icon"></i></div>
          <div className="heart heartTwo"><i class="far fa-heart icon"></i></div>
          <div className="heart heartThree"><i class="far fa-heart icon"></i></div>
        </div>
      </ImageContainer>
    )
  }
}
