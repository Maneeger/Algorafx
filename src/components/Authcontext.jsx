import React, { createContext,useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'


export const AuthContext = createContext();

export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState(null)
    const [userLoggedIn,setuserLoggedIn] = useState(false)
    const [loading,setLoading] = useState(true)

useEffect(()=> {
    const  unsubscribe =onAuthStateChanged(auth,initializedUser);
    return unsubscribe
},[])

async function initializedUser(user){
    if (user){
        setCurrentUser(null);
        setuserLoggedIn(false);
    }
    else{
        setCurrentUser({...user});
        setuserLoggedIn(true);
    }
    setLoading(false)
}
const value = {
    currentUser,
    userLoggedIn,
    loading
}
return (
    <AuthContext.Provider value={value}> 
        {/* You also need the value prop here */}
        {!loading && children}
    </AuthContext.Provider>
);

}