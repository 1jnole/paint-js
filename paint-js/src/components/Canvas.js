import React, {Component} from 'react';
import Konva from "konva";
import { Stage, Layer, Rect } from "react-konva";

class ColoredCanvas extends Component {
  state = {
      color: "green"
    };
    handleClick = () => {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    };
    render() {
      return (
        <Stage width={500} height={500}>
           <Layer>
             <Rect
               x={20}
               y={20}
               width={500}
               height={500}
               fill={this.state.color}
               shadowBlur={5}
               onClick={this.handleClick}
             />
           </Layer>
       </Stage>

      );
    }
}


export default ColoredCanvas;
