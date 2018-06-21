import React from 'react';
// import './Container.css'

export default class Container extends React.Component {

  render() {
    return <div className="container">
    <h3>{this.props.title}</h3>
    <div>{this.props.description}</div>
    </div>;
  }
}