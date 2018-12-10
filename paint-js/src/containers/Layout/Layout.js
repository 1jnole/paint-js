import React, {Component} from 'react';
import {Layout, Row, Col} from 'antd';
import Canvas from '../../components/Canvas'
import Tools from '../../components/Tools'
import './Layout.scss';

const {Header, Content, Sider} = Layout;
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
                <Header className="cnt-header">
                    <Row>
                        <Col span={6}>
                            <h1>Paint App</h1>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Sider className="filters" theme="light">
                      <Tools/>
                    </Sider>
                    <Layout>
                        <Content className="content">
                            <Canvas/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default ContainerLayout;
