import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const googleProvider = new GoogleAuthProvider()




    

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        return signOut(auth)
    }

    useEffect( () => {
    const unsubscribe =   onAuthStateChanged(auth, currentUser => {
            console.log('Auth state changed', currentUser);
            setUser(currentUser)
            setLoading(false)
            setName(currentUser.displayName)
            setEmail(currentUser.email)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {
        user, 
        createUser,
        logIn,
        logOut,
        loading,
        googleLogin,
        name,
        email,



    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;