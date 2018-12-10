import React, {Component} from 'react';
import { Stage, Layer, Line } from "react-konva";
import { Card } from 'antd';

class Stroke extends Component {
    state = {
      x: 100,
      y: 100,
      x0: 0,
      y0: 0,
      x1: 100,
      y1: 100,
    };

    render() {
      return (
        <Card>
           <p>  Stroke</p>
         </Card>
      );
    }
}
export default Stroke;
