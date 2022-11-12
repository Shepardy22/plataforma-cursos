import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { app } from "../services/firebaseConfig";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    //Ao Carregar a página, verifica se o usuário está logado checanco o localStorage
    useEffect(() => {
        const loadStoreUser = () => {
            const storeUser = localStorage.getItem("@AuthFirebase:User");
            const storeToken = localStorage.getItem("@AuthFirebase:Token");
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
                const photoUser = user.photoURL;
                setUser(result.user);
                localStorage.setItem("@AuthFirebase:Token", token);
                localStorage.setItem("@AuthFirebase:User", JSON.stringify(user));
                localStorage.setItem("@AuthFirebase:Photo", photoUser);
                
               
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    const signInEmail = ( email, password) => {
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                localStorage.setItem("@AuthFirebase:User", JSON.stringify(user));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    setErrorDetected("Senha incorreta!");
                }else if(errorCode === 'auth/user-not-found'){
                    setErrorDetected("Usuário não encontrado!");
                }else if(errorCode === 'auth/invalid-email'){
                    setErrorDetected("Email inválido!");
                }else{
                    setErrorDetected("Erro ao fazer login!");
                }
                
                
            });
    }

    const [errorDetected, setErrorDetected] = useState(false);
    

    function signOut() {
        localStorage.clear();
        setUser(null);
        return <Navigate to="/Login" />
    }

    return (
        <AuthContext.Provider
            value={{ signInGoogle, signed: !!user, user, signOut, signInEmail, errorDetected  }}>
            {children}
        </AuthContext.Provider>
    )

}