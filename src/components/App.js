import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profilePicture from "../assets/my-pic.jpg";
import Qualifications from "./Qualifications"
import "../index.css";

class App extends Component {
  state = { displayBio: false };

  ArabicStyle = {
    padding: 30,
    textAlign: "right"
  };

  /* Old code before pulling the state assignment out of the constructor.
  constructor() {
    super();
    this.state = { displayBio: false };
    // in this way of assigning state object, calling bind method is necessary for helper 
    // methods within the Component class.
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  */

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <img src={profilePicture} alt="profile" className="profile" />
            <h1>مرحبا</h1>
            <p>إسمي طارق، أردني وأعيش بأمريكا </p>
            <Title />
            {this.state.displayBio ? (
              <div>
                <p>أعمل مع تويتر وأحب كرة القدم كثيرا جدا</p>
                <p>فريقي المفضل هو برشلونة</p>
                <button onClick={this.toggleDisplayBio} className="btn">
                  أخفي
                </button>
              </div>
            ) : (
              <div>
                <button onClick={this.toggleDisplayBio} className="btn">
                  <span>إقرأ أكثر</span>
                </button>
              </div>
            )}
          </div>
          <div className="column">
            <Qualifications />
          </div>
        </div>
        <div></div>
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
