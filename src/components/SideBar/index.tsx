import React,{Component} from 'react'
import { Layout,Menu,Icon } from 'antd';
import {Link,withRouter,RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';
const { SubMenu }  = Menu;
const { Sider  } = Layout
interface propsModel extends RouteComponentProps {
  collapsed?: boolean;
}
class SideBar extends Component<propsModel> {
  componentWillMount(){
    // console.log(this.props.history)
  }
  render() {
      return (
        <Sider trigger={null} collapsible collapsed={this.props.collapsed} style={{height:"100vh",minHeight:"700px",position:"fixed",overflow: 'auto',left:0}} id="sidebar">
          <div style={{  height:"32px",background:"#333",margin:"16px"}}/>
          <Menu theme="dark" mode="inline" selectedKeys={[this.props.location.pathname === '/' ? 'home' : this.props.location.pathname.replace('/','')]}>
            <Menu.Item key="home">
              <Icon type="home" />
              <span>首页</span>
              <Link to="/"></Link>
            </Menu.Item>
            <Menu.Item key="testa">
              <Icon type="video-camera" />
              <span>testa</span>
              <Link to="/testa"></Link>
            </Menu.Item>
            <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>nav</span>
              </span>
            }>
            <Menu.Item key="testb">
              <span>teatb</span>
              <Link to="/testb"></Link>
            </Menu.Item>
          </SubMenu>
          </Menu>
        </Sider >
      );
  }
}
const mapStateToProps = (state: any) => ({
  collapsed: state.app.collapsed
});
export default withRouter<propsModel>(connect(mapStateToProps)(SideBar)) ;