import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { app } from "../services/firebaseConfig";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext({});




export const AuthProvider = ({ children }) => {

    const auth = getAuth(app);


    useEffect(() => {
        const loadStoreUser = () => {
            const storeUser = sessionStorage.getItem("@AuthFirebase:User");
            const storeToken = sessionStorage.getItem("@AuthFirebase:Token");
            if (storeUser && storeToken) {
                setUser(storeUser);


            }
        }
        loadStoreUser();
    }, []);

    const [user, setUser] = useState(null);

    const signInGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(result.user);
                sessionStorage.setItem("@AuthFirebase:Token", token);
                sessionStorage.setItem("@AuthFirebase:User", JSON.stringify(user));
                console.log(result);
               
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    function signOut() {
        sessionStorage.clear();
        setUser(null);
        return <Navigate to="/Login" />
    }

    return (
        <AuthContext.Provider
            value={{ signInGoogle, signed: !!user, user, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}