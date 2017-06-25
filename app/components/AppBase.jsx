import React from 'react';
import AppstateActions from './../actions/AppStateActions';
import './../styles/materialize.css';
var circle = require('./../styles/images/mocks/circle.png');
var square = require('./../styles/images/mocks/square.png');
var triangle = require('./../styles/images/mocks/triangle.png');
var rectangle = require('./../styles/images/mocks/rectangle.png');
var diamond = require('./../styles/images/mocks/diamond.png');
var parallelogram = require('./../styles/images/mocks/polygon.png');
var pentagon = require('./../styles/images/mocks/pentagon.png');
var hexagon = require('./../styles/images/mocks/hexagon.png');
var ellipse = require('./../styles/images/mocks/ellipse.png');
var line = require('./../styles/images/mocks/line.png');
var label = require('./../styles/images/mocks/label.png');
var reverseparallelogram = require('./../styles/images/mocks/reversepolygon.png');

export default class AppBase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            freeDrawing: false,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }


    render() {
        const menuItemLeftPad = '56px';
        const menuItemWidth = '20px';
        const textColor = this.context.themeSettings.c_left_pane_text;

        let buttonText = this.state.freeDrawing?'Disable Free Drawing':'Enable Free Drawing';
        let buttonStyle = this.state.freeDrawing?'btn blue-grey darken-1':'btn waves-effect red lighten-1';
        return (
            <div className="app-wrapper">

                <div className="left-pane-container">
                    <div className="row">
                        <div className="col s12 ">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Hello there!</span>
                                    <p>Please drag & drop or double click shapes to add them to canvas.</p>
                                    <br></br>
                                    <p>Use free drawing to use pen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={circle} className="circle-img" draggable="true" onDoubleClick={this.addCircle}
                         onDragStart={this.dragImage.bind(null, 'circle')}/>
                    <img src={triangle} className="shapes-img" onDoubleClick={this.addTriangle}
                         onDragStart={this.dragImage.bind(null, 'triangle')}/>
                    <img src={square} className="shapes-img" onDoubleClick={this.addSquare}
                         onDragStart={this.dragImage.bind(null, 'square')}/>
                    <img src={rectangle} className="rectangle-img" onDoubleClick={this.addRectangle}
                         onDragStart={this.dragImage.bind(null, 'rectangle')}/>
                    <img src={ellipse} className="ellipse-img" onDoubleClick={this.addEllipse}
                         onDragStart={this.dragImage.bind(null, 'ellipse')}/>
                    <img src={diamond} className="shapes-img" onDoubleClick={this.addDiamond}
                         onDragStart={this.dragImage.bind(null, 'diamond')}/>
                    <img src={parallelogram} className="shapes-img" onDoubleClick={this.addParallelogram}
                         onDragStart={this.dragImage.bind(null, 'parallelogram')}/>
                    <img src={pentagon} className="shapes-img" onDoubleClick={this.addPentagon}
                         onDragStart={this.dragImage.bind(null, 'pentagon')}/>
                    <img src={line} onDoubleClick={this.addLine} onDragStart={this.dragImage.bind(null, 'line')}/>

                    <img src={reverseparallelogram} className="shapes-img" onDoubleClick={this.addReverseParallelogram}
                         onDragStart={this.dragImage.bind(null, 'reverseparallelogram')}/>
                    <img src={hexagon} className="shapes-img" onDoubleClick={this.addHexagon}
                         onDragStart={this.dragImage.bind(null, 'hexagon')}/>
                    <div>
                        <button onClick={this.addLabel} className={buttonStyle} type="submit" style={{marginLeft: '10px'}}
                                name="action"><i className="material-icons left">edit</i>{buttonText}
                        </button>
                    </div>
                </div>
                <div className="right-pane-container"
                     style={{
                         backgroundColor: this.context.themeSettings.c_main_pane
                     }}
                >
                    {this.props.children}

                </div>
            </div>
        );
    }

    addTriangle = () => {
        AppstateActions.createTriangle();
    }

    addSquare = () => {
        AppstateActions.createSquare();
    }

    addCircle = () => {
        AppstateActions.createCircle();
    }

    addRectangle = () => {
        AppstateActions.createRectangle();
    }

    addDiamond = () => {
        AppstateActions.createDiamond();
    }

    addParallelogram = () => {
        AppstateActions.createParallelogram();
    }

    addPentagon = () => {
        AppstateActions.createPentagon();
    }

    addHexagon = () => {
        AppstateActions.createHexagon();
    }

    addEllipse = () => {
        AppstateActions.createEllipse();
    }

    addReverseParallelogram = () => {
        AppstateActions.createrReverseParallelogram();
    }

    addLine = () => {
        AppstateActions.createLine();
    }

    addLabel = () => {
        if (this.state.freeDrawing) {
            this.state.freeDrawing = false;
            AppstateActions.resetFreeDrawing();
        } else {
            this.state.freeDrawing = true;
            AppstateActions.createPencilBrush();
        }
    }

    dragImage = (shape, event) => {
        event.dataTransfer.setData('shape', shape);
    }

    preventDefault = (event) => {
        event.preventDefault();
    }


}

AppBase.contextTypes = {
    themeSettings: React.PropTypes.object.isRequired
};

AppBase.propTypes = {};

AppBase.defaultProps = {};