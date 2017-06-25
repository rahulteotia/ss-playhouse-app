import alt from '../libs/alt';

import AppStateActions from './../actions/AppStateActions';
import {ERROR_STATE} from './../util/Enumerations';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';

class AppStateStore {
    constructor() {
        this.bindActions(AppStateActions);
        this.networkError = false;
        this.muiTheme = this.getCustomTheme();
        this.themeSettings = this.getThemeSettings();
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
        // all our action handler can just talk directly to fabric
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
        // all our action handler can just talk directly to fabric
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
        // all our action handler can just talk directly to fabric
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
        // all our action handler can just talk directly to fabric
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

    createEditableText = () => {
        this.fabricCanvas.add(new fabric.IText('Tap and Type', {
            fontSize: 30,
            left: 100,
            top: 100,
        }));
        this.fabricCanvas.renderAll();
    }

    fillComponentColor = (data) => {
        console.log(data);
        this.fabricCanvas.getActiveObject().setFill(data.background);
        this.fabricCanvas.renderAll();
        this.emitChange();
    }

    getCustomTheme() {
        const rawTheme = ThemeManager.getMuiTheme(LightRawTheme);
        const customTheme = this.getThemeSettings();
        return ThemeManager.modifyRawThemePalette(rawTheme, customTheme);
    }

    getThemeSettings() {

        return {
            primary1Color: '#77d6c5',
            primary2Color: '#A1887F',
            primary3Color: Colors.lightBlack,
            accent1Color: '#6E82BF',
            accent2Color: Colors.grey100,
            accent3Color: Colors.grey500,
            textColor: Colors.darkBlack,
            alternateTextColor: Colors.white,
            canvasColor: Colors.white,
            borderColor: Colors.grey300,
            disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
            c_main_pane: '#ffffff',
            c_top_menu_1: '#E4A88C',
            c_top_menu_2: '#E29B7B',
            c_top_menu_3: '#DD8F6B',
            c_menu_notifications: '#D77B4C',
            c_menu_settings: '#77d6c5',
            c_menu_logoff: '#CC6230',
            c_top_menu_font_size: '18px',
            c_tableHeaderTextColor: Colors.white,
            c_record_pane: '#E3DFD9',
            c_table_row: '#EEF0EF',
            c_menu_height: '40px',
            c_main_avatar: '#795548',
            c_left_pane: '#A1887F',
            c_left_pane_text: 'white'
        };
    }
}

export default alt.createStore(AppStateStore, 'AppStateStore');