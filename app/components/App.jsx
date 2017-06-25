import React from "react";

import RouterContainer from "./../services/RouterContainer";
import AppStateStore from "./../stores/AppStateStore";

import NetworkError from "./util/NetworkError.jsx";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = AppStateStore.getState();
    }

    componentDidMount() {
        AppStateStore.listen(this.onAppStateChange);
    }

    componentWillUnmount() {
        AppStateStore.unlisten(this.onAppStateChange);
    }

    onAppStateChange = (state) => {
        this.setState(state);
    };


    getChildContext() {
        return {
            muiTheme: this.state.muiTheme,
            themeSettings: this.state.themeSettings
        };
    }

    componentWillMount() {
        document.body.className = 'app-body';
        //console.log('Router', this.context.history);
        this.setRouterInfo();

    }

    setRouterInfo() {
        RouterContainer.set(this.context.history);
        RouterContainer.setLocation(this.context.location);
        RouterContainer.setRoutes(this.props.routes);
    }


    render() {
        const networkError = this.state.networkError;
        //console.log('NETWORK ERROR', networkError);
        return (
            <div id="app-base-container">

                {/* Render the child route component */}
                {networkError? <NetworkError />: this.props.children}

            </div>
        );
    }


    static contextTypes = {
        muiTheme: React.PropTypes.object,
        history: React.PropTypes.object.isRequired,
        location: React.PropTypes.object.isRequired
    };
    static childContextTypes = {
        muiTheme: React.PropTypes.object,
        themeSettings: React.PropTypes.object
    };


}