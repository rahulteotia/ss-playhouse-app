import './../styles/login.css';
import React from 'react';

import HomeStore from './../stores/HomeStore';
import AppstateActions from './../actions/AppStateActions';

import AppBase from './AppBase.jsx';
import TopMenu from './util/TopMenu.jsx';
import FabricCanvas from './FabricCanvas';

export default class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
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
            AppstateActions.createEditableText();
        }

    }
}

