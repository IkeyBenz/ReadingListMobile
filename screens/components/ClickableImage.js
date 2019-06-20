import React, { Component } from 'react';
import { Image, Button } from 'react-native';

class ClickableImage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imgUrl: props.src,
      onclick: props.onclick
    }
  }

  render() {
    return (
      <Image />
    );
  }
}

export default ClickableImage;