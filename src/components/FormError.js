import React, { Component } from 'react';

export default class FormError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {      
      return (
        <h2>There was an error submitting your form</h2>
      );
    }
    return this.props.children;
  }  
}