import { Component } from "react";
import UserClass from "./UserClass"

class About extends Component{
  render(){
    return(
      <>
        <div>
          <h1>About Class Component</h1>
          <h2>This is Namaste React Web Series</h2>
          <UserClass name="Hameed"/>
        </div>
      </>
    )
  }
}

export default About