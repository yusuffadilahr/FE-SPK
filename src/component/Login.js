import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const handleChangePassword = (e) => {
        setInputPassword(e.target.value);
    };
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Value:', { username: inputValue, password: inputPassword });
        axios.post('http://localhost:3001/api-v1/user/login', {
            username: inputValue,
            password: inputPassword
        })
            .then((respons) => {
                if (!respons) {
                    window.alert('Error Gagal Login, Terjadi Kesalahan');
                }
                if (respons.data.statusCode !== 200) {
                    window.alert(respons.data.message);
                }
                if (respons.data.data.user_role === 'user') {
                    window.alert(respons.data.message);
                    console.log('pindah page ke home user');
                }
                if (respons.data.data.user_role === "admin") {
                    window.alert(respons.data.message);
                    console.log('pindah page ke home admin');
                }
                console.log("respons exios", respons);
            })
            .catch((error) => {
                console.log("error", error);
            })
        // Anda bisa melakukan sesuatu dengan inputValue di sini
    };

    return (
        <section className="hero has-background-white is-fullwidth" style={{
            padding: '8rem 0',
        }}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <h1 className="title has-text-centered" style={{
                                fontFamily: 'Helvetica',
                                fontWeight: 'bold',
                            }}>Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="field mt-5">
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" value={inputValue} onChange={handleChange} style={{
                                            borderRadius: '13px',
                                        }} />
                                    </div>
                                </div>
                                <div className="fieldmt-5">
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="Password" value={inputPassword} onChange={handleChangePassword} style={{
                                            borderRadius: '13px',
                                        }} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <div className='text'>
                                        <h1>
                                            Belum memiliki akun? <a href="/register">Register</a>
                                        </h1>
                                    </div>
                                    <button className="button is-black is-pulled-right">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
