import React, {Component} from 'react';
import {Card} from 'antd';
import {CirclePicker} from 'react-color';
import store from '../store.js';

class Palette extends Component {
    constructor() {
        super();
        this.state = {
            colour: ''
        };
    }

    handleChangeComplete = (color) => {
        store.dispatch({type: "COLOUR", colour: color.hex})
    };
    render() {
        return (
            <Card>
                <h3>Select a colour</h3>
                <CirclePicker width="auto" color={this.state.background} onChangeComplete={this.handleChangeComplete}/>
            </Card>
        );
    }
}
export default Palette;
