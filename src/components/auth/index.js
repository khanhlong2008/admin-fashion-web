/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './index.css'
import SignIn from './signIn';
import SignUp from './signUp';

export default function Auth() {

    useEffect(() => {

        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    })

    const containerClasses = `container `
    return (
        <div className={containerClasses}>
            <div className="forms-container">
                <div className="signin-signup">
                    <SignIn />
                    <SignUp />
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        {/* onClick={hanldeAuth("signUp-mode")} */}
                        <button className="btn transparent " id="sign-up-btn" >
                            Sign up
                        </button>
                    </div>
                    <img src="img/log.svg" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        {/* onClick={hanldeAuth("signIn-mode")} */}
                        <button className="btn transparent" id="sign-in-btn" >
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                </div>
            </div>
        </div>
    );
}
