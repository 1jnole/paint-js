import React, {Component} from 'react';
import {Layout, Row, Col} from 'antd';

const {Header} = Layout;

/**
 * App component is the overall wrapper of this application, this do not contain
 * connection to the data, just contains the corresponding layout
 *
 * @author Gerardo Ortiz
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
                            Paint App
                        </Col>
                    </Row>
                </Header>
            </Layout>
        );
    }
}

export default ContainerLayout;
