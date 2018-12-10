import React, {Component} from 'react';
import { Stage, Layer, Line } from "react-konva";
import { Card, Icon } from 'antd';

class DoUndo extends Component {

    render() {
      return (
        <Card>
           <Icon type="undo"  theme="outlined" style={{ "fontSize": '2.5em' }}/>
           <Icon type="redo"  theme="outlined" style={{ "fontSize": '2.5em' }}/>
        </Card>
      );
    }
}
export default DoUndo;
