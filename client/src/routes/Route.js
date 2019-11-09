import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '../store/index';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const singned = false;

    if(!singned && isPrivate) {
        return <Redirect to="/" />;
    }

    if(singned && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }

    return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}

RouteWrapper.defaultProps = {
    isPrivate: false,
}