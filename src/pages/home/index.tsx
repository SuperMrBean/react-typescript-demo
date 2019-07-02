import React, { Component } from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {userInfo} from '../../api'
import './index.less'
class Home extends Component<RouteComponentProps> {
  componentWillMount(){
    userInfo()
  }
  render() {
    return (
      <div id="home">
        home
      </div>
    );
  }
}
export default Home