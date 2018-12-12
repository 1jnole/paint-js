import React, {Component} from 'react';
import {Stage, Layer, Line} from "react-konva";
import {Card} from 'antd';
import store from '../store.js';
import { changeColour } from '../actionCreators.js';

class CanvasLine extends Component {
    constructor() {
        super();
        this.state = {
            lineSize: ''
        };
    }
    componentDidMount() {
        const canvas = document.createElement("canvas");
        canvas.width = 125;
        canvas.height = 125;
        const context = canvas.getContext("2d");
        this.setState({canvas, context});
    }

    handleChangeStroke = (strokeWidth) => {
        store.dispatch({type: "STROKE_WIDTH", lineSize: strokeWidth})
    }


    render() {
        return (
            <Card>
                <Stage width={125} height={125}>
                    <Layer>
                        <Line points={[125, 0, 0, 0]} stroke={"black"} strokeWidth={2} />
                        <Line points={[0, 20, 125, 20]} stroke={"black"} strokeWidth={3} />
                        <Line points={[0, 40, 125, 40]} stroke={"black"} strokeWidth={4} />
                        <Line points={[0, 60, 125, 60]} stroke={"black"} strokeWidth={5} onClick={this.handleChangeStroke} />
                    </Layer>
                </Stage>
            </Card>
        );
    }
}
export default CanvasLine;
