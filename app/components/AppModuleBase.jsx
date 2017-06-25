import React from 'react';


import AppBase from "./AppBase.jsx";
import TopMenu from "./util/TopMenu.jsx";

export default class AppModuleBase extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <AppBase>
                <TopMenu moduleMenu={this.props.moduleMenu}/>

                <div id="vos-content-container" className="content-container">
                    {this.props.children}
                </div>
            </AppBase>
        );
    }
}

AppModuleBase.contextTypes = {
    themeSettings: React.PropTypes.object.isRequired
};

AppModuleBase.propTypes = {
    moduleMenu: React.PropTypes.object.isRequired
};

AppModuleBase.defaultProps = {};