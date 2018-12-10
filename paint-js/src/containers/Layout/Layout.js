import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Stage, Layer } from "react-konva";
import Canvas from '../../components/Canvas'
import './Layout.scss';
const {Header} = Layout;

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

                <Row>
                    <Col span={6}>
                      <Stage width={500} height={500}>
                         <Layer>
                             <Canvas/>
                         </Layer>
                     </Stage>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default ContainerLayout;
