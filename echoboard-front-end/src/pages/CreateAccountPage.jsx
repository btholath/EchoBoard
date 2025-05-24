import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


export default function CreateAccountPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    
    async function createAccount(){
        try{
            if (password !== confirmPassword) {
                setError('Passwords do not match.');
                return;
            }
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/articles');
        } catch (e) {
            console.error('Create Account failed:', e);
            setError('Create Account failed. Please check your email and password.');
        }
    }

    return (
        <>
        <h1>Create Account</h1>
        {error && <p>{error}</p>}
   
        <input
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)} />

        <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={e => setPassword(e.target.value)} />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)} />


        <button onClick={createAccount}>Create Account</button>
        <Link to='/create-account'>Don't have an account? Create one here</Link>
        </>
    );
}
