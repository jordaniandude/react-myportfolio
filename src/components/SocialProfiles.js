import React, { Component } from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

class SocialProfile extends Component {
  render() {
    const { image, link } = this.props.socialProfile;
    return (
      <a href={link}>
        <img src={image} alt="Social" style={{ width: 20, margin: 5 }} />
      </a>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>تواصل معي</h3>
        {SOCIAL_PROFILES.map(PROFILE => {
          return <SocialProfile key={PROFILE.id} socialProfile={PROFILE} />;
        })}
      </div>
    );
  }
}

export default SocialProfiles;
