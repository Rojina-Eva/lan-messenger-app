import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

const GetIp = () => {
    const [ip, setIp] = useState('');
    const history = useHistory();


    const handleOnChange = e => {
        // const value = e.target.value;
        setIp(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log(ip);
        // history.push(ip);
        const addr = `http://${ip}:5000/receiver.html`
        // window.location.replace(addr);
        window.location.href = addr
        e.preventDefault();
    } 
    return (
        <div>
            <h1>Input File Sender Local IP address</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard" />
                    <br />
                <button type="submit" variant="contained">Proceed</button>
            </form>
            <hr />
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default GetIp;