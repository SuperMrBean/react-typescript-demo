import React,{Component} from 'react';
import {connect} from 'react-redux';
import {toggleSideBar} from '../../store/actions';
import { Layout,Icon} from 'antd';
import './index.less';
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
        <Header style={{ background: '#fff', padding: 0 }} id="headerbar">
          <div className="logo" />
        <Icon
          className="trigger"
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