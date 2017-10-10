import React, { Component } from 'react';
import { Text } from 'react-native';
import propTypes from 'prop-types';

class TextFit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0.5,
      complete: false
    };
  }

  componentDidMount() {
    this.setSize();
  }

  setSize() {
    const maxHeight = this.props.height;
    this.textField.measure((x, y, width, height) => {
      if (maxHeight < height) {
        if (this.state.size === 0.5) {
          this.setState({ complete: true });
        } else {
          this.setState({ size: this.state.size -= 0.5, complete: true });
          this.setSize();
        }
      } else if (!this.state.complete) {
        this.setState({ size: this.state.size += 0.5 });
        this.setSize();
      }
    });
  }

  _getRef = (ref) => {
    this.textField = ref;
  };

  render() {
    return (
      <Text
        {...this.props}
        ref={this._getRef}
        style={[
          this.props.style,
          { fontSize: this.state.size }
        ]}
      >
        {this.props.children}
      </Text>
    );
  }
}

TextFit.defaultProps = {
  style: {}
};
TextFit.propTypes = {
  children: propTypes.any.isRequired,
  style: propTypes.object,
  height: propTypes.number.isRequired
};

export default TextFit;
