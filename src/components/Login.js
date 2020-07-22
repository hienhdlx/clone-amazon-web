import React, {useState , useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style/login.css'
import { auth } from './firebase';
import {AppContext} from './AppProvider';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(AppContext);
    const {user, setUser} = context;

    const login = (event) => {
        event.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            // login success
            setUser(auth.user.email);
            history.push('/');
        }).catch((e) => {
            alert(e.message);
        });
    }
    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // create account success
            setUser(auth.user.email);
            history.push('/');
        }).catch(e => {
            alert(e.message);
        })
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="./image/amazonvector.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button type="submit" onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
