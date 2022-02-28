import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const {signInWithGoogle} = useAuth();

    return (
        <div>
            <h2>Login here</h2>
            <Button variant="warning" onClick={signInWithGoogle}>Login with Google</Button>
        </div>
    );
};

export default Login;