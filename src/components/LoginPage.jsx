import React, { useState } from 'react';
import ButtonTypeTwo from './ButtonTypeTwo'; 
import InputTypeOne from './InputTypeOne';
import ArrowToUserDataPage from './ArrowToUserDataPage';
import {auth} from '../config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import '../App.css';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert('Error logging in: ' + error.message);
        }
    };

    return (
        <div>
            <ArrowToUserDataPage />

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h1 className='lprp-title'>Insert your credentials</h1>
                
                <form>
                    <InputTypeOne type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    <InputTypeOne type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </form>

                <div>
                    <ButtonTypeTwo onClick={login}>Login</ButtonTypeTwo>
                </div>
                
            </div>
        </div>
    );
};

export default LoginPage;