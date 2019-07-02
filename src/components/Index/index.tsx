import React, { Component } from 'react';
import HeaderBar from '../../components/HeaderBar';
import Container from '../../components/Container';
import SideBar from '../../components/SideBar';
import { Layout } from 'antd';
class Index extends Component {
  render() {
      return (
        <div>
          <Layout>
            <SideBar/>
            <Layout>
              <HeaderBar/>
              <Container/>
            </Layout>
          </Layout>
        </div>

      );
  }
}
export default Index