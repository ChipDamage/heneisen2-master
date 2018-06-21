import React from 'react';
import './TeamMember.css'
// import './Container.css'

export default class TeamMember extends React.Component {

  render() {
    return <div className="TeamMember">
      <img className="memberPhoto" src={this.props.imgaddress} alt={this.props.altText} />
      <h3>{this.props.name}</h3>
      <div>{this.props.description}</div>
      <div className="socialMedia">
        {/* <Icon /> */}
      </div>
    </div>;
  }
}