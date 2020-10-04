import React, {useState} from 'react'
import AuthModal from '../../components/AuthModal'
import RegisterModal from '../../components/RegisterModal'

const AuthContext = React.createContext({
    user: {},
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    login: () => {},
    logout: () => {}
    })

const AuthProvider = (props) => {

    const [user, setUser] = useState(null)
    const [isLoginModalOpen, setLoginModalOpen] = useState(false)
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false)
    const login = (user) => {
        setUser(user)
        // isModalOpen(true)
    }
    const logout = () => {
        setUser(null)
        // isModalOpen(false)
    }
    return (
        <AuthContext.Provider value={{user, isLoginModalOpen, isRegisterModalOpen, login, logout, setRegisterModalOpen, setLoginModalOpen}}>
            <AuthModal />
            <RegisterModal />
            {props.children}
        </AuthContext.Provider>
    )
}

export  {
    AuthProvider
}

export default AuthContext
