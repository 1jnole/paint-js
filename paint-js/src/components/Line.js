import React, {Component} from 'react';
import {Stage, Layer, Line} from "react-konva";
import {Card} from 'antd';
import store from '../store.js';
import { changeStrokeWidth } from '../actionCreators';

class CanvasLine extends Component {
    constructor() {
        super();
        this.state = {
            strokeWidth: ''
        };
    }
    componentDidMount() {
        const canvas = document.createElement("canvas");
        canvas.width = 125;
        canvas.height = 125;
        const context = canvas.getContext("2d");
        this.setState({canvas, context});
    }

    handleChangeStroke = (e,strokeWidth) => {
      console.log(strokeWidth);
        store.dispatch(changeStrokeWidth(strokeWidth))
    }


    render() {
        return (
            <Card className='line-container'>
                <Stage width={125} height={125} className='line-container'>
                    <Layer className='lineWidth'>
                        <Line
                          points={[125, 0, 0, 0]}
                          stroke={"black"}
                          strokeWidth={2}
                          onClick={(e) => { this.handleChangeStroke(e,2)}}
                        />
                        <Line
                          points={[0, 20, 125, 20]}
                          stroke={"black"}
                          strokeWidth={3}
                          onClick={(e) => { this.handleChangeStroke(e,3)}}
                        />
                        <Line
                          points={[0, 40, 125, 40]}
                          stroke={"black"}
                          strokeWidth={5}
                          onClick={(e) => { this.handleChangeStroke(e,5)}}
                        />
                        <Line
                          points={[0, 60, 125, 60]}
                          stroke={"black"}
                          strokeWidth={7}
                          onClick={(e) => { this.handleChangeStroke(e,7)}}
                        />
                    </Layer>
                </Stage>
            </Card>
        );
    }
}
export default CanvasLine;
