import React from 'react';
import Container from './Container';
import TeamMember from './TeamMember';
import './Team.css'

export default class Team extends React.Component {
  render() {
    return (
      <Container
        title="Us"
        description={<div className="Team">
          <TeamMember
            imgaddress="nick.jpg"
            name="Nick"
            description="Hmmmm"
            altText="Nick Photo"
          />
          <TeamMember
            imgaddress="alex.jpg"
            name="Alex"
            description="Meh"
            altText="Alex Photo"
          />
        </div>}
      
      />
    )
  }
}