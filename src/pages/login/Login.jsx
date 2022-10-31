import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/apiCalls';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password })
        history.push('/')
    }
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flex: 4,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button
                style={{ padding: 10, width: 100 }}
                onClick={handleClick}>Login</button>
        </div>
    );
};

export default Login;