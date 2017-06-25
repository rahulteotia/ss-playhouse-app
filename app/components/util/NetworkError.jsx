import React from 'react';

var networkError = require('./../../styles/images/network-error.png');

export default class NetworkError extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="not-found">
                <img src={networkError}
                     alt="Page Not Found (404)."
                     style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      marginLeft: '-285px',
                      marginTop: '-190px'
                     }}
                />
            </div>
        );
    }
}

NetworkError.contextTypes = {
    themeSettings: React.PropTypes.object.isRequired
};