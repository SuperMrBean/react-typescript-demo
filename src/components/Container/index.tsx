import React,{Component} from 'react';
import { Layout } from 'antd';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Testa from '../../pages/testa';
import Testb from '../../pages/testb';
import Home from '../../pages/home';
const { Content  } = Layout
class Container extends Component {
  render() {
      return (
        <Content  style={{
          margin: 24,
          padding: 24,
          background: '#fff',
          height:'100%',
        }}>
          <Switch>
            <PrivateRoute exact path='/' component={Home}/>
            <PrivateRoute exact path='/testa' component={Testa}/>
            <PrivateRoute exact path='/testb' component={Testb}/>
            <Redirect from="/*" to="/err"></Redirect>
          </Switch>
        </Content >
      );
  }
}
export default Container