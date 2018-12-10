import React, {Component} from 'react';
import { Stage, Layer, Line } from "react-konva";

class Tools extends Component {
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
        <Stage width={100} height={500}>
          <Layer>
            <Line
              x={this.state.x}
              y={this.state.y}
              points={[this.state.x0, this.state.y0, this.state.x1, this.state.y1]}
              stroke="black"
              strokeWidth={1}
            />
            <Line
              stroke={'black'}
              strokeWidth={3}
            />
            <Line
              stroke={'black'}
              strokeWidth={6}
            />
            <Line
              stroke={'black'}
              strokeWidth={9}
            />
          </Layer>
      </Stage>
      );
    }
}
export default Tools;
