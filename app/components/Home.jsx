import './../styles/login.css';
import React from 'react';

import HomeStore from './../stores/HomeStore';
import AppstateActions from './../actions/AppStateActions';

import AppBase from './AppBase.jsx';
import TopMenu from './util/TopMenu.jsx';
import FabricCanvas from './FabricCanvas';
import {SketchPicker} from 'react-color';
import './../styles/materialize.css';

export default class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            background: '#fff',
        }
    }

    componentWillMount() {
        this.styleManipulation(true);
    }

    styleManipulation(enable) {
        if (enable) {
            document.body.className = 'login-body';

        } else {
            document.body.className = 'trribe-app-body';
        }
    }

    componentDidMount() {
        HomeStore.listen(this.onStoreChange);
    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onStoreChange);
        this.styleManipulation(false);
    }

    onStoreChange = (state) => {
        this.setState(state);
    }

    render() {

        return (
            <AppBase >
                <TopMenu/>
                <div onDragOver={this.preventDefault} onDrop={this.drawShape} className="bottom-menu-container"
                     style={{}}>
                    <FabricCanvas onDragEnd={this.checkevent}/>
                    <div className="color-picker-container">
                        <SketchPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete }/>
                        <div className="row">
                            <div className="col s12 ">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <p>1. Select shape from canvas and choose color.</p>
                                        <br></br>
                                        <p>2. Double click on shape to remove from canvas.</p>
                                        <br></br>
                                        <p>3. Shapes added can be rotated and resized.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppBase>
        )
    }


    handleLogin = (event) => {
        event.preventDefault();

    }

    checkevent = (event) => {
        console.log(event.currentTarget.id);
    }
    preventDefault = (event) => {
        event.preventDefault();
    }

    handleChangeComplete = (color) => {
        this.setState({background: color.hex});
        AppstateActions.fillComponentColor({background: color.hex});
    };

    drawShape = (event) => {
        var shape = event.dataTransfer.getData('shape');

        if (shape == 'triangle') {
            AppstateActions.createTriangle();
        }

        if (shape == 'square') {
            AppstateActions.createSquare();
        }

        if (shape == 'circle') {
            AppstateActions.createCircle();
        }

        if (shape == 'rectangle') {
            AppstateActions.createRectangle();
        }

        if (shape == 'diamond') {
            AppstateActions.createDiamond();
        }

        if (shape == 'parallelogram') {
            AppstateActions.createParallelogram();
        }

        if (shape == 'pentagon') {
            AppstateActions.createPentagon();
        }

        if (shape == 'hexagon') {
            AppstateActions.createHexagon();
        }

        if (shape == 'ellipse') {
            AppstateActions.createEllipse();
        }

        if (shape == 'reverseparallelogram') {
            AppstateActions.createrReverseParallelogram();
        }

        if (shape == 'line') {
            AppstateActions.createLine();
        }

        if (shape == 'label') {
            AppstateActions.createPencilBrush();
        }

    }
}

