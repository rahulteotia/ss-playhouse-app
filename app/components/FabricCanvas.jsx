import React from 'react';
import ReactDom from 'react-dom';
import {fabric} from 'fabric';
import * as Constants from  '../util/Constant.js'

import AppstateActions from './../actions/AppStateActions';
var fabricCanvas = new fabric.Canvas();

export default class FabricCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }


    componentDidMount() {

        var el = ReactDom.findDOMNode(this);
        console.log(window.innerWidth);

        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        var widthn = width - 300;
        var heightn = height - 250;

        // Here we have the canvas so we can initialize fabric
        fabricCanvas.initialize(el, {
            height: Constants.CANVAS_HEIGHT,
            width: Constants.CANVAS_WIDTH,
        });

        // on mouse up lets save some state
        fabricCanvas.on('mouse:up', () => {

        });

        // an event we will fire when we want to save state
        fabricCanvas.on('saveData', () => {

            fabricCanvas.renderAll(); // programatic changes we make will not trigger a render in fabric
        })
        // an event we will fire when we want to save state
        fabricCanvas.on('drop', () => {

        })

        fabric.util.addListener(fabricCanvas.upperCanvasEl, 'dblclick', function (e) {
            if (fabricCanvas.findTarget(e)) {
                var element = fabricCanvas.findTarget(e);
                console.log('element type selected : ' + element);
                const objType = element.type;
                if (objType === 'image' || objType === 'rect' || objType === 'triangle' ||
                    objType === 'polygon' || objType === 'circle' || objType == 'ellipse' || objType == 'line' || objType == 'path') {
                    fabricCanvas.remove(element);
                }
                if (objType == 'group') {
                    var activeObjects = element.getObjects();
                    for (let index in activeObjects) {
                        fabricCanvas.remove(activeObjects[index]);
                    }
                }
            }
        });
        fabricCanvas.setDimensions({
            width: widthn,
            height: heightn
        });
        AppstateActions.setFabricCanvas({'fabricCanvas': fabricCanvas})
    }

    render() {
        return <canvas id="canvascontainer"></canvas>
    }

    preventDefault = (event) => {
        event.preventDefault();
    }

    checkevent = (event) => {
        console.log(event.currentTarget.id);
    }


}