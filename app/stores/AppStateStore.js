import alt from '../libs/alt';

import AppStateActions from './../actions/AppStateActions';
import {ERROR_STATE} from './../util/Enumerations';

class AppStateStore {
    constructor() {
        this.bindActions(AppStateActions);
        this.networkError = false;
        this.fabricCanvas = null;
    }

    setErrorState({errorState}) {
        this.networkError = false;
        switch (errorState.index) {
            case ERROR_STATE.NETWORK.index:
                this.networkError = true;
                break;
            default:
                console.error('Handler Not found against error state index', errorState.index);
        }
    }

    setFabricCanvas = (data) => {
        this.fabricCanvas = data.fabricCanvas;
        this.emitChange();
    }

    createTriangle = () => {
        this.resetFreeDrawing();
        this.fabricCanvas.add(new fabric.Triangle({
            originX: 'center',
            originY: 'center',
            left: 250,
            top: 100,
            width: 100,
            height: 100,
            fill: '#00F00F',
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeLineCap: 'butt',
            strokeLineJoin: 'miter',
            strokeMiterLimit: 10,
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
            visible: true,
            clipTo: null,
            backgroundColor: '',
            fillRule: 'nonzero',
            globalCompositeOperation: 'source-over',
            transformMatrix: null,
            radius: 50,
            startAngle: 0,
            endAngle: 6.283185307179586,
        }));
        this.fabricCanvas.renderAll();
    }

    createSquare = () => {
        this.resetFreeDrawing();
        console.log('old ' + this.fabricCanvas);
        this.fabricCanvas.add(new fabric.Rect({
            type: 'rect',
            originX: 'center',
            originY: 'center',
            left: 126,
            top: 210,
            width: 100,
            height: 100,
            fill: '#FF0000',
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeLineCap: 'butt',
            strokeLineJoin: 'miter',
            strokeMiterLimit: 10,
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
            visible: true,
            clipTo: null,
            backgroundColor: '',
            fillRule: 'nonzero',
            globalCompositeOperation: 'source-over',
            transformMatrix: null,
            radius: 50,
            startAngle: 0,
            endAngle: 6.283185307179586
        }));


        this.fabricCanvas.renderAll();
    }

    createCircle = () => {
        this.resetFreeDrawing();
        this.fabricCanvas.add(new fabric.Circle({
            type: 'circle',
            originX: 'center',
            originY: 'center',
            left: 50,
            top: 50,
            width: 100,
            height: 100,
            fill: '#FF00FF',
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeLineCap: 'butt',
            strokeLineJoin: 'miter',
            strokeMiterLimit: 10,
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
            visible: true,
            clipTo: null,
            backgroundColor: '',
            fillRule: 'nonzero',
            globalCompositeOperation: 'source-over',
            transformMatrix: null,
            radius: 50,
            startAngle: 0,
            endAngle: 6.283185307179586
        }));
        this.fabricCanvas.renderAll();

    }

    createRectangle = () => {
        this.resetFreeDrawing();
        this.fabricCanvas.add(new fabric.Rect({
            type: 'rect',
            originX: 'center',
            originY: 'center',
            left: 326,
            top: 210,
            width: 150,
            height: 100,
            fill: '#2a65ff',
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeLineCap: 'butt',
            strokeLineJoin: 'miter',
            strokeMiterLimit: 10,
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
            visible: true,
            clipTo: null,
            backgroundColor: '',
            fillRule: 'nonzero',
            globalCompositeOperation: 'source-over',
            transformMatrix: null,
            radius: 50,
            startAngle: 0,
            endAngle: 6.283185307179586
        }));
        this.fabricCanvas.renderAll();
    }

    createDiamond = () => {
        this.resetFreeDrawing();
        this.fabricCanvas.add(new fabric.Polygon([{x: 0, y: -75}, {x: 50, y: 0}, {x: 0, y: 75}, {x: -50, y: 0}], {
            top: 180,
            originX: 'center',
            originY: 'center',
            left: 200,
            shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
            fill: '#27c018',
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeLineCap: 'butt',
            strokeLineJoin: 'miter',
            strokeMiterLimit: 10
        }));
        this.fabricCanvas.renderAll();
    }

    createrReverseParallelogram = () => {
        this.resetFreeDrawing();
        this.fabricCanvas.add(new fabric.Polygon([{x: -100, y: -50}, {x: 50, y: -50}, {x: 0, y: 50}, {
            x: -150,
            y: 50
        }], {
            top: 180,
            originX: 'center',
            originY: 'center',
            left: 200,
            shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
            fill: '#ffec5e',
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeLineCap: 'butt',
            strokeLineJoin: 'miter',
            strokeMiterLimit: 10
        }));
        this.fabricCanvas.renderAll();
    }

    createParallelogram = () => {
        this.resetFreeDrawing();
        this.fabricCanvas.add(new fabric.Polygon([{x: -200, y: -50}, {x: -50, y: -50}, {x: 0, y: 50}, {
            x: -150,
            y: 50
        }], {
            top: 180,
            originX: 'center',
            originY: 'center',
            left: 200,
            shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
            fill: '#c4bd0e',
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeLineCap: 'butt',
            strokeLineJoin: 'miter',
            strokeMiterLimit: 10
        }));
        this.fabricCanvas.renderAll();
    }

    createPentagon = () => {
        this.resetFreeDrawing();
        var pentagon = new fabric.Polygon([
                {x: 220, y: 0},
                {x: 300, y: 50},
                {x: 300, y: 125},
                {x: 150, y: 125},
                {x: 150, y: 50}], {
                top: 180,
                originX: 'center',
                originY: 'center',
                left: 200,
                shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
                fill: '#ff611b',
                stroke: null,
                strokeWidth: 1,
                strokeDashArray: null,
                strokeLineCap: 'butt',
                strokeLineJoin: 'miter',
                strokeMiterLimit: 10
            }
        );
        pentagon.on('selected', function () {
            console.log('selected a rectangle');
        });

        this.fabricCanvas.add(pentagon);
        this.fabricCanvas.renderAll();
    }

    createHexagon = () => {
        this.resetFreeDrawing();
        this.fabricCanvas.add(new fabric.Polygon([{x: 820, y: 125},
                {x: 900, y: 187.5},
                {x: 900, y: 262.5},
                {x: 820, y: 325},
                {x: 742, y: 262.5},
                {x: 742, y: 187.5},
            ], {
                top: 100,
                originX: 'left',
                originY: 'top',
                left: 100,
                shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
                fill: '#a56746',
                stroke: null,
                strokeWidth: 1,
                strokeDashArray: null,
                strokeLineCap: 'butt',
                strokeLineJoin: 'miter',
                strokeMiterLimit: 10
            }
        ));
        this.fabricCanvas.renderAll();
    }

    createEllipse = () => {
        this.resetFreeDrawing();
        // all our action handler can just talk directly to fabric
        this.fabricCanvas.add(new fabric.Ellipse({
            top: 150,
            left: 250,
            originX: 'center',
            originY: 'center',
            /* Try same values rx, ry => circle */
            rx: 75,
            ry: 50,
            scaleX: 1,
            scaleY: 1,
            shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
            fill: '#6ffff7',
            stroke: null,
            strokeWidth: 1,
            strokeDashArray: null,
            strokeLineCap: 'butt',
            strokeLineJoin: 'miter',
            strokeMiterLimit: 10
        }));
        this.fabricCanvas.renderAll();
    }

    createLine = () => {
        this.resetFreeDrawing();
        this.fabricCanvas.add(new fabric.Line([100, 0, 100, 100], {
                top: 100,
                originX: 'left',
                originY: 'top',
                left: 100,
                shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
                fill: '#a56746',
                stroke: 'black',

                strokeWidth: 3,
            }
        ));
        this.fabricCanvas.renderAll();
    }

    resetFreeDrawing = () => {
        this.fabricCanvas.isDrawingMode = 0;
        this.emitChange();
    }

    createPencilBrush = () => {
        this.fabricCanvas.isDrawingMode = 1;
        this.fabricCanvas.freeDrawingBrush.color = 'purple';
        this.fabricCanvas.freeDrawingBrush.width = 10;
        this.fabricCanvas.renderAll();
        this.emitChange();
    }

    fillComponentColor = (data) => {
        var activeGroup = this.fabricCanvas.getActiveGroup();
        if (activeGroup) {
            var activeObjects = activeGroup.getObjects();
            for (let index in activeObjects) {
                this.fillcolor(activeObjects[index], data);
            }
        } else {
            var activeObject = this.fabricCanvas.getActiveObject();
            if (activeObject) {
                if (activeObject.get('type') == 'path') {
                    this.fillcolor(activeObject, data);
                } else {
                    this.fillcolor(activeObject, data);
                }
            }
        }

        this.fabricCanvas.renderAll();
        this.emitChange();
    }

    fillcolor = (activeObject, data) => {
        if (activeObject.get('type') == 'path' || activeObject.get('type') == 'line') {
            activeObject.setStroke(data.background);
        } else {
            activeObject.setFill(data.background);
        }
    }
}

export default alt.createStore(AppStateStore, 'AppStateStore');