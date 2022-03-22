/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState } from 'react';
import http from '../../Util';
export default function SignUp() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onCreateSubmit = async evt => {
    console.log(email, password, firstname, lastname)
    evt.preventDefault();
    try {
      const response = await http.post('/auth/signup', {
        email: email,
        password: password,
        lastname: lastname,
        firstname: firstname,
      });
      console.log(response.data.user);
      // setDataUser(response.data.user)
    } catch (err) {
      alert(err.message);
    }
  };
  // if (authCtx.user) {
  //     console.log(authCtx.user)
  //     return <Navigate to="/dashboard" replace={true} />
  // }
  return (
    <form action="#" className="sign-up-form" onSubmit={onCreateSubmit}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="FirstName"
          value={firstname}
          // htmlType="text"
          onChange={evt => {
            setFirstname(evt.target.value);
          }}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          // type="text"
          placeholder="LastName"
          value={lastname}
          // htmlType="text"
          onChange={evt => {
            setLastname(evt.target.value);
          }}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email"
          value={email}
          // htmlType="text"
          onChange={evt => {
            setEmail(evt.target.value);
          }}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          value={password}
          // htmlType="password"
          onChange={evt => {
            setPassword(evt.target.value);
          }}
        />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
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
