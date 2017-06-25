import alt from "../libs/alt";

import HomeActions from "../actions/HomeActions";


class HomeStore {


    constructor() {
        this.bindActions(HomeActions);
        this.storeState = {};
    }

    setProcessing(state) {
        this.storeState.processing = state;
        this.setState({storeState: this.storeState});
    }

}

export default alt.createStore(HomeStore, 'HomeStore');