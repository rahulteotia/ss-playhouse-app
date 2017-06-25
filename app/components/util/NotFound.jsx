import React from 'react';

var notFoundImage = require('./../../styles/images/404.jpg');

export default class NotFound extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="not-found">
                <img src={notFoundImage}
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

NotFound.contextTypes = {
    themeSettings: React.PropTypes.object.isRequired
};