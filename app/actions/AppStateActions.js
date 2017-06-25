import alt from "../libs/alt";

class AppStateActions {
    setErrorState(data) {
        this.dispatch(data);
    }

    setFabricCanvas(data) {
        this.dispatch(data);
    }

    createTriangle() {
        this.dispatch();
    }

    createCircle() {
        this.dispatch();
    }

    createSquare() {
        this.dispatch();
    }

    createRectangle() {
        this.dispatch();
    }

    createDiamond() {
        this.dispatch();
    }

    createParallelogram() {
        this.dispatch();
    }

    createPentagon() {
        this.dispatch();
    }

    createHexagon() {
        this.dispatch();
    }

    createEllipse() {
        this.dispatch();
    }

    createrReverseParallelogram() {
        this.dispatch();
    }

    createLine() {
        this.dispatch();
    }

    createEditableText(){
        this.dispatch();
    }
}

export default alt.createActions(AppStateActions);