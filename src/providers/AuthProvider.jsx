import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user);




    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth)
    }

    useEffect( () => {
    const unsubscribe =   onAuthStateChanged(auth, currentUser => {
            console.log('Auth state changed', currentUser);
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {
        user, 
        createUser,
        logIn,
        logOut


    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;