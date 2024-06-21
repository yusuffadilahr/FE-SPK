import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Registrasi = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confPassword) {
            setError('Pastikan konfirmasi password sama dengan password');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api-v1/user/registrasi', {
                username: username,
                password: password,
                confrim_password: confPassword,
            });

            if (response.data.statusCode !== 200) {
                setError(response.data.message);
                return;
            }

            alert('Berhasil regis, silahkan login');
            history.push('/');
        } catch (error) {
            setError('Ada Kesalahan Pada Service: ' + error.message);
        }
    };

    return (
        <section className="hero has-background-white is-fullwidth" style={{ padding: '8rem 0' }}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <h1 className="title has-text-centered" style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>Register</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="field mt-5">
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" style={{ borderRadius: '13px' }} value={username} onChange={handleUsername} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="Password" style={{ borderRadius: '13px' }} value={password} onChange={handlePassword} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="Confirm Password" style={{ borderRadius: '13px' }} value={confPassword} onChange={handleConfPassword} />
                                    </div>
                                </div>
                                {error && <p className="help is-danger">{error}</p>}
                                <div className="field mt-5">
                                    <button className="button is-black is-pulled-right" type="submit">Daftar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registrasi;