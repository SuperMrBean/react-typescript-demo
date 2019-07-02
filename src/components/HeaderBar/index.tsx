import React,{Component} from 'react';
import {connect} from 'react-redux';
import {toggleSideBar} from '../../store/actions';
import { Layout,Icon} from 'antd';
import { relativeTimeThreshold } from 'moment';
const { Header } = Layout
interface propsModel {
  toggleSideBar?: any;
  collapsed?: boolean;
}
class HeaderBar extends Component<propsModel> {
  toggle = () => {
    this.props.toggleSideBar()
  };
  render() {
      return (
        <Header className='header' style={{ background: '#fff', padding: 0,  position: 'fixed', zIndex: 1,width:'100%',height:'68px',marginLeft: this.props.collapsed ?'80px':'200px',transition:'all .2s'}} id="headerbar">
          <div className="logo" />
        <Icon
          style={{  fontSize:"18px",lineHeight:"64px",padding:"0 24px",cursor:"pointer",transition:"color 0.3s"}}
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
      );
  }
}
const mapStateToProps = (state: any) => ({
  collapsed: state.app.collapsed
});
const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleSideBar: (payload: boolean) => dispatch(toggleSideBar(payload)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
// export default HeaderBar;