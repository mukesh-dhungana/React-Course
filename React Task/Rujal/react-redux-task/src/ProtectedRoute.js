import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export const ProtectedSignIn = ({
    component: Component,
    auth,
    logIn,
    ...rest
}) => {

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!auth) {
                    return <Component {...rest} {...props} logIn={logIn} />
                } else {
                    return (
                        <Redirect to={
                            {
                                pathname: "/home",
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    )
                }
            }}
        />
    )
}

export const ProtectedApp = ({
    component: Component,
    auth,
    logOut,
    ...rest
}) => {

    return (
        <Route
            {...rest}
            render={(props) => {
                if (auth) {
                    return <Component {...rest} {...props} logOut={logOut} />
                } else {
                    return (
                        <Redirect to={
                            {
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    )
                }
            }}
        />
    )
}