import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
class Cardprofile extends React.Component {
  state = {
    person: {
      fullName: "Ahmed Saad",
      bio: `"Creativity solves everything."`,
      imgsrc:
        "https://ultimez.com/blog/wp-content/uploads/2016/09/gif-animation.gif",
      profession: "Fullstack Web Developper",
    },
    mountTime: 0,
    time: new Date(),
  };
  render() {
    return (
      <div>
        <Card
          className="card scale"
          image={this.state.person.imgsrc}
          header={this.state.person.fullName}
          meta={this.state.person.profession}
        />
        <p className="scale">Bio: {this.state.person.bio} </p>
        <div>
          <p className="secondary">{`Last mount: ${this.state.mountTime} seconds ago.`}</p>
          <p className="secondary">{`last time opened: ${this.state.time}`}</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ mountTime: this.state.mountTime + 1 });
    }, 1000);
    this.setState({ time: new Date().toLocaleString() });
  }
}

export default Cardprofile;
