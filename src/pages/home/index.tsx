import React, { Component } from 'react';
import {RouteComponentProps} from 'react-router-dom'
import {userInfo} from '../../api'
class Home extends Component<RouteComponentProps> {
  componentWillMount(){
    userInfo()
  }
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}
export default Home