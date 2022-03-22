import React, { useEffect } from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'

import { Route } from 'react-router-dom'


import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'
import { useState } from 'react'
import http, { addJwt } from '../../Util';
import AuthContext from '../../context/auth'


const Layout = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    const [authUser, setAuthUser] = useState(null);
    const [checkingAuthUserDone, setCheckingAuthUserDone] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setCheckingAuthUserDone(true);
            return;
        }
        http
            .get('/auth/secret_admin', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => {
                setAuthUser(response.data.user);
                // console.log(response.data.user)
                addJwt(token);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setCheckingAuthUserDone(true);
            });
    }, []);
    if (!checkingAuthUserDone) {
        return (
            <div style={{ textAlign: 'center' }}>
                {' '}
                Checking signed-in user status...
            </div>
        );
    }
    // console.log(authUser)
    return (
        <AuthContext.Provider value={{ user: authUser, setUser: setAuthUser }}>

            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav />
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )} />
        </AuthContext.Provider>
    )
}

export default Layout
