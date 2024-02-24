

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useCheckAdmin from '../../../Hooks/useCheckAdmin';
import Loader from '../../ui/loaders/Loader';

import './loginform.css'

const LoginForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);


    const { checkCredentials, loading, error, admin } = useCheckAdmin();


    const handleLogin = async (e) => {
        e.preventDefault();
        await checkCredentials({ email, password });

    }

    useEffect(() => {
        if (admin) {
            navigate('/admin/dashboard');
        }
    }, [])


    return (
        <main className="login">
            <div className={`error__messaje ${error ? "error__messaje-active" : ""}`}>{error}</div>
            {loading && <span className='login__loading'>
                <Loader />
            </span>}
            <div className="login__container">
                <form className="login__form" onSubmit={(e) => handleLogin(e)}>
                    <p className="login__title">Login admin</p>
                    <div className="login__group-input">
                        <input className="login__input" type="text" name='email' id='email' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        <input className="login__input" type="text" name='password' id='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="login__remember-group">
                        <input className="login__radio" type="checkbox" name='rememberMe' id='rememberMe' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                        <label htmlFor='rememberMe' className="login__label" >Remember me</label>
                    </div>
                    <button type='submit' className="login__button btn__primary" >
                        Login
                    </button>
                </form>

                <div className="login__forgot-group">
                    <p className="login__forgot-text">forgot your password?
                        <Link className="login__forgot-link" to="">Click Here</Link>
                    </p>
                </div>

            </div>
        </main >

    )
}

export default LoginForm;