import React, { Component } from 'react'

export class ProfileClass extends Component {
  constructor(props){
    super(props);
    this.state = { 
      userInfo: {
      name: "Dummy name",
      location: "no Location"
    },
   }
    console.log("constructor " + this.state.userInfo.name)
  }
  async componentDidMount() {
    console.log("component did mount");
    const data = await fetch("https://api.github.com/users/raghuhr18");
    const json = await data.json();
    this.setState({ 
      userInfo: json,
     })
  }

  render() {
    console.log("render")
    return (
      <div>
        <p>ProfileClass</p> 
        { this.state.userInfo?.name && 
          <div>
            <h1>name: {this.state.userInfo.name}</h1>
            <h1>location: {this.state.userInfo.location}</h1>
            <img src={this.state.userInfo.avatar_url} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileClass