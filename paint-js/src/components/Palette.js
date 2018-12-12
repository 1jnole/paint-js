import React, {Component} from 'react';
import {Card} from 'antd';
import {CirclePicker} from 'react-color';
import store from '../store.js';
import { changeColour } from '../actionCreators';

class Palette extends Component {
    constructor() {
        super();
        this.state = {
            colour: ''
        };
    }

    handleChangeComplete = (colour) => {
      store.dispatch(changeColour(colour.hex));
    };

    render() {
        return (
            <Card>
                <h3>Select a colour</h3>
                <CirclePicker
                  width="auto"
                  onChangeComplete={this.handleChangeComplete}
                />
            </Card>
        );
    }
}
export default Palette;
