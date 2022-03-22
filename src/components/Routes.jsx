import React, { useContext } from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
// import Customers from '../pages/Customers'

import Auth from '../components/auth'
import AuthContext from '../context/auth'
import { Redirect } from 'react-router-dom'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import FlashSale from '../pages/FlashSale'


const Routes = () => {
    const authCtx = useContext(AuthContext)
    // console.log(authCtx)
    return (
        <Switch>
            {
                authCtx.user ? (
                    <>

                        <Route path='/dashboard' exact component={Dashboard} />
                        {/* <Route path='/customers' component={Customers} /> */}
                        <Route path='/products' component={Products} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/flashsale' component={FlashSale} />
                    </>
                ) : (
                    <>
                        <Route path='/auth' component={Auth} >
                            {authCtx.user ? <Redirect to="/dashboard" /> : <Auth />}

                        </Route>


                    </>
                )
            }
        </Switch>
    )
}

export default Routes
