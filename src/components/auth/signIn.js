/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth';
import http, { addJwt } from '../../Util'
export default function SignIn() {
    const [emailSignIn, setEmailSignIn] = useState("");
    const [passwordSignIn, setPasswordSignIn] = useState("");
    const [dataUser, setDataUser] = useState("");

    const authCtx = useContext(AuthContext)

    const onLoginSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await http.post('/auth/signin',
                {
                    email: emailSignIn,
                    password: passwordSignIn,
                })
            // console.log(response)
            authCtx.setUser(response.data.user)
            setDataUser(response.data.user)
            // console.log(response.data.user)
            localStorage.setItem("token", response.data.token)
            addJwt(response.data.token)

        } catch (err) {
            alert(err.message);
        }
    }
    // console.log(dataUser)
    if (dataUser) {
        return <Redirect to="/dashboard" />
    }
    return (
        <form action="#" className="sign-in-form" onSubmit={onLoginSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                    type="email"
                    placeholder="Email"
                    value={emailSignIn}
                    // htmlType="text"
                    onChange={(evt) => {
                        setEmailSignIn(evt.target.value);
                    }}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                    type="password"
                    placeholder="Password"
                    value={passwordSignIn}
                    // htmlType="password"
                    onChange={(evt) => {
                        setPasswordSignIn(evt.target.value);
                    }}
                />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
                <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </form>
    );
}
