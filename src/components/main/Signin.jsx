import React, { useState } from 'react'
import logoImg from '../../Images/Logo-new.png'
import { MdCancel } from 'react-icons/md';

const Signin = ({ login }) => {

    console.log(login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        login(false)
        alert(`you are logged in with ${email}`)
    }

    return (

        <>
            <div className="signin-container" onClick={() => login(false)}>

            </div>


            <div className="signin-box">
                <span>
                    <img src={logoImg} alt="" className='div1-img' />
                </span>
                <div className="signin-close-container" >
                    <h2 className="signin-close" onClick={() => login(false)}><MdCancel /></h2>
                </div>
                <div className='div-p'>
                    <p>Login with your email & password</p>
                </div>
                <form className='form' onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="customer@demo.com"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit" className="signin-button">Login</button>
                </form>
                <div className="alternative-login">
                    <p>Or</p>
                    <button className="google-login">Login with Google</button>
                    <button className="mobile-login">Login with Mobile number</button>
                </div>
                <p className="register-link">Don't have any account? <a href="/register">Register</a></p>
            </div>

        </>
    )
}

export default Signin
