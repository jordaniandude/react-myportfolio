import React, { Component } from "react";

const Mathal = ({mathal}) => {
  const { title } = mathal;
  return <p>{title}</p>
}

class Amthal extends Component {
  state = { mathal: {}, amthal: [] };

  componentDidMount() {
    fetch("http://localhost:3005/amthal/random")
      .then(response => response.json())
      .then(json => this.setState({ mathal: json }))
  }

  fetchAmthal = () => {
    fetch("http://localhost:3005/amthal/ten")
      .then(response => response.json())
      .then(json => this.setState({ amthal: json }));
  }

  render() {
    return (
      <div>
        <h2>مثل اليوم</h2>
        <Mathal mathal={this.state.mathal}/>
        <hr></hr>
        <h3>هل تريد المزيد من الأمثال؟</h3>
        <button onClick={this.fetchAmthal}>Click Me</button>
        {
          this.state.amthal.map(mathal => (<Mathal key={mathal.id} mathal={mathal}/>))
        }
      </div>
    );
  }
}

export default Amthal;
