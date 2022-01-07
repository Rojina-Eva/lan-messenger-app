import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <div className={{display: 'flex',
            alignItems: 'center'}}>
                <h1>Institutional Lan Messenger</h1>

            <div className='auth__form-container_fields-content_button'>
            <Link to='/messenger'>
                <button>Messenger in Lan</button>
            </Link>
            </div>
            <br />
            <div className='auth__form-container_fields-content_button'>
            <a target="_blank" href="https://messenger-eva.netlify.app/">
            <button>Using Online</button>
            </a>
            </div>
            <br />
            <div className='auth__form-container_fields-content_button'>
            <a target="_blank" href="http://localhost:5000/">
            <button>For File Share</button>
            </a>
            </div>
            <br />
            <div className='auth__form-container_fields-content_button'>
            <Link to='/getIp'><button>For Receive file</button></Link>
            </div>
            
        </div>
    );
};

export default Welcome;