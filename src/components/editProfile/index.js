import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth';
import http from '../../Util'
import './index.css'

export default function EditProfile() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const authCtx = useContext(AuthContext)
    const onLoginSubmit = async (evt) => {
        evt.preventDefault();
        const id__user = authCtx.user._id
        try {
            await http.put(`/user/${id__user}`,
                {
                    email: email,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                })
            // console.log(response)
            // authCtx.setUser(response.data.user)
            // console.log(response.data.user)
            // localStorage.setItem("token", response.data.token)


        } catch (err) {
            alert(err.message);
        }
    }
    return (
        <>
            <h2 className="page-header">
                Profile
            </h2>
            <div className="card">

                <form className="profile-form" onSubmit={onLoginSubmit}>

                    <div className="profile-input">
                        <label className="">First Name</label>
                        <input
                            type="text"
                            className=""
                            placeholder={authCtx.user.firstname}
                            value={firstname}
                            onChange={(evt) => {
                                setFirstname(evt.target.value);
                            }}
                        />
                    </div>
                    <div className="profile-input">
                        <label className="">Last Name</label>
                        <input
                            type="text"
                            className=""
                            placeholder={authCtx.user.lastname}
                            value={lastname}
                            onChange={(evt) => {
                                setLastname(evt.target.value);
                            }}
                        />
                    </div>
                    <div className="profile-input">
                        <label className="">Your Email</label>
                        <input
                            type="email"
                            className=""
                            placeholder={authCtx.user.email}
                            onChange={(evt) => {
                                setEmail(evt.target.value);
                            }}
                        />
                    </div>
                    <div className="profile-input">
                        <label className="">Password</label>
                        <input
                            type="password"
                            className=""
                            placeholder="*******"
                            onChange={(evt) => {
                                setPassword(evt.target.value);
                            }}
                        />
                    </div>

                    <div className="profile-btn">
                        <button variant="primary" type="submit" className="btn">
                            Save
                        </button>
                    </div>


                </form>
            </div>
        </>
    );
}
