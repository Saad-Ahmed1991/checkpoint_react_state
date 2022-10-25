import React from "react";
import "semantic-ui-css/semantic.min.css";
import Cardprofile from "./Profilecard";
class Profile extends React.Component {
  state = {
    show: true,
  };
  render() {
    var handlechange = () => {
      this.setState({ show: !this.state.show });
    };
    const btn_label = this.state.show;
    return (
      <div className="parent">
        <div className="profile show">
          {this.state.show ? (
            <div className="card_container">
              <Cardprofile />
            </div>
          ) : null}

          <button className="btn" onClick={handlechange}>
            {btn_label ? "Hide Your Profile" : "Show Your Profile"}
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
