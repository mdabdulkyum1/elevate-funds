import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile }  from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { auth } from './../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const provider = new GoogleAuthProvider()

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = async(name, photo) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
        .then(()=> {
            setUser((prevUser)=> ({...prevUser, displayName: name, photoURL: photo}));
        })
    } 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Login
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setUser(null);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
               setUser(currentUser);
               setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
          });
          return ()=> unsubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        createUserWithGoogle,
        updateUserProfile,
        loginUser,
        logOut    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProviders.propTypes = {
    children: PropTypes.node
}
export default AuthProviders;