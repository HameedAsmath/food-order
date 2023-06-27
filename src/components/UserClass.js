import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Hameed",
        location: "India",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/HameedAsmath");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <>
        <div className="user-card">
          <img src={avatar_url} />
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: @HameedAsmath</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
