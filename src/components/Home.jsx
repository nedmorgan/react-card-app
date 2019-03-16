import React, { Component } from 'react'
import { HomeContainer } from '../component_styles/HomeStyle';
import Image from './Image'

export default class Home extends Component {
  state = {
    imageAlt: 'family picture'
  }
  render() {
    return (
      <HomeContainer>
        <h1 className="home-title animated slideInDown">Happy Anniversary</h1>
        <h3 className="animated slideInUp">We hope to have an amazing anniversary and we love you very much!</h3>
        <Image imageAlt={this.state.imageAlt} />
      </HomeContainer>
    )
  }
}
