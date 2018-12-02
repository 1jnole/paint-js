import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

const { Header, Content, Sider } = Layout;

/**
 * App component is the overall wrapper of this application, this do not contain
 * connection to the data, just contains the corresponding layout
 *
 * @author Jorge Nole
 * @class
 */
class ContainerLayout extends Component {
  /**
   * Render this Component on each state change
   * @return {React.Component}
   */
  render() {
    return (
      <Layout>
        <Header className="header">
          <Row>
            <Col span={6}>
              1
            </Col>
            <Col span={6}>
              2
            </Col>
            <Col span={6}>
              3
            </Col>
            <Col span={6}>
              4
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider className="filters" theme="light">
          </Sider>
          <Layout>
            <Content className="content">
              {/* <DataViewer /> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default ContainerLayout;
