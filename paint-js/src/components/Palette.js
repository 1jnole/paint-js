import React, {Component} from 'react';
import {Card} from 'antd';
import {CirclePicker} from 'react-color';

class Palette extends Component {

    state = {
        background: '#fff'
    };

    handleChangeComplete = (color) => {
        this.setState({background: color.hex});
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
