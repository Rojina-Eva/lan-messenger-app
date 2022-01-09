import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// var network = require('network');
// import network from 'network'
// import '../App.css'

const Welcome = () => {

    // alert(window.location.hostname);

    return (

        <div className={{display: 'flex',
            alignItems: 'center'}}>
                <h1>Institutional Lan Messenger</h1>
                <h4>Host: {window.location.href}</h4>

            <div className='auth__form-container_fields-content_button'>
            {/* <Link to='/messenger'> */}
            <a target="_blank" href={`http://${window.location.hostname}:3000/messenger`}>
            <button>Messenger in Lan</button>
            </a>
            {/* </Link> */}
            </div>
            <br />
            <div className='auth__form-container_fields-content_button'>
            <a target="_blank" href="https://messenger-eva.netlify.app/">
            <button>Using Online</button>
            </a>
            </div>
            <br />
            <div className='auth__form-container_fields-content_button'>
            <a target="_blank" href={`http://${window.location.hostname}:5000/`}>
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