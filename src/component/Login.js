import React from 'react'

const Login = () => {

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
                            <div className="field mt-5">
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Username" style={{
                                        borderRadius: '13px',
                                    }} />
                                </div>
                            </div>
                            <div className="fieldmt-5">
                                <div className="controls">
                                    <input type="password" className="input" placeholder="Password" style={{
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
