import React, { Component } from "react";
import "../index.css";

const TITLES = [
  "a software engineer",
  "a soccer lover",
  "an enthusiastic learner"
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    // setting the return value of setInterval in a variable so that we could use it in componentWillUnmount.
    // the value will be a unique id identifying that specific setInterval. We'll be using clearInterval because
    // the interval we are setting below (3000) will keep going even though the component became hidden, so we'll
    // need to clear the interval to avoid memory leaks. We can hide the Title component in App.js but as of now, we aren't.
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      // this should be this.setState({ titleIndex: titleIndex }); but since both variables,
      // the local one and the state one are the same, the following line is a shortcut since
      // avascript recognizes both have the same name.
      this.setState({ titleIndex, fadeIn: true });
      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 3000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am {title}
      </p>
    );
  }
}

export default Title;
