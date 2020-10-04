import React, {useContext, useState} from 'react'
import ReactModal from 'react-modal'
import AuthContext from '../contexts/auth/AuthContext'

const AuthModal = () => {
    const {user, isLoginModalOpen, login, setLoginModalOpen} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const res = await fetch('/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email, password
            })
        })
        const data = await res.json();
        // authToken comes seperately from the API, but the context needs it inside the user
        data.user.authToken = data.authToken
        login(user)
    }
    
    return (
        <ReactModal 
            isOpen={isLoginModalOpen}
            onRequestClose={() => setLoginModalOpen(false)}
            style={{
                overlay: {
                    background: 'rgba(0, 0, 0, 0.3)'
                },
                content: {
                    width: '80vh',
                    maxWidth: '450px',
                    borderRadius: '20px',
                    margin: 'auto',
                    height: '300px'
                }
            }}
        >
            <form className='loginform'
                onSubmit={handleSubmit}
            >
                <h1>Login</h1>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='email'
                />
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder='password'
                />
                <button className='submit' type='submit'>Submit</button>
            </form>
        </ReactModal>
    )
}

export default AuthModal
