import './../../styles/util.css';

import React from 'react';

import CircularProgress from 'material-ui/lib/circular-progress';


export default class ProgressSpinner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var {marginTop, marginLeft, ...props} = this.props;
        marginTop = marginTop || '50%';
        marginLeft = marginLeft || '50%';

        const progressStyle = this.getProgressStyle(marginTop, marginLeft);

        return (
            <div className="progress-spinner" style={progressStyle}>
                <CircularProgress mode="indeterminate"/>
            </div>
        );
    }

    getProgressStyle(marginTop, marginLeft) {
        var progressStyle = {
            top: marginTop,
            left: marginLeft
        };
        return progressStyle;
    }

}