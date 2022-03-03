import React from 'react';
import useAuth from '../../hook/useAuth';
// import useFirebase from '../../hook/useFirebase';
import './Login.css';
const Login = () => {
     const{ signInUsingGoogle } = useAuth();
    return (
        <div className="background">
           
            <button onClick={signInUsingGoogle} >Google</button>     
        </div>
    );
};

export default Login;