import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default (props) => {
    return (
        <React.Fragment>
            <h1>Rule {props.match.params.id}</h1>
        </React.Fragment>
    );
}
