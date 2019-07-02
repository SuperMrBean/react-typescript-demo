import React,{Component} from 'react';
import { Layout } from 'antd';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import {connect} from 'react-redux';
import Testa from '../../pages/testa';
import Testb from '../../pages/testb';
import Home from '../../pages/home';
const { Content  } = Layout
interface propsModel {
  collapsed?: boolean;
}
class Container extends Component<propsModel> {
  componentWillMount(){
    // console.log(this.props.collapsed)
  }
  render() {
      return (
        <Content  style={{
          margin: 24,
          padding: 24,
          background: '#fff',
          height:'calc(100vh - 116px)',
          marginLeft:this.props.collapsed ? '104px' : '224px',
          marginTop:'92px',
          transition:'all .2s'
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
const mapStateToProps = (state: any) => ({
  collapsed: state.app.collapsed
});
export default connect(mapStateToProps)(Container);