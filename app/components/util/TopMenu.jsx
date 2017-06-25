import React from "react";
import "./../../styles/materialize.css";


export default class TopMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
                <div className="row">
                    <div className="col s12 ">
                        <div className="card  red lighten-2">
                            <div className="card-content white-text">
                                <h4 style={{fontWeight:'bold'}} className="center-align strong">Canvas Playground</h4>
                                <blockquote className="center-align">Use your imagination and play with shapes.
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

TopMenu.contextTypes = {
    themeSettings: React.PropTypes.object.isRequired
};

TopMenu.propTypes = {
    moduleMenu: React.PropTypes.object
};

TopMenu.defaultProps = {};