import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    const [profileData, setProfileData] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/v1/user/login');
                setProfileData(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProfileData();
    }, []);

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className="navbar is-white" aria-label="main navigation" style={{ borderBottom: '1px solid #d3d3d3', boxShadow: '0 2px 4px 0 rgba(0,0,0,.1)' }}>
            <div className='container'>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/#" className="navbar-item" style={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}>
                            Model Rekomendasi Skincare
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            {profileData && (
                                <div className="buttons">
                                    <img src={profileData.profilePhotoUrl} alt="Profile" className="is-rounded" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                                    <button onClick={Logout} className="button is-light">
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;