import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext();

const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = ()=>{
        setLoader(true);
        googleAuth.addScope('email');
        googleAuth.addScope('profile');
        return signInWithPopup(auth , googleAuth)
    }

    const logOut = ()=>{
        setLoader(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoader(false);

            if(currentUser.providerData[0]?.email){
                let loggedUser = {email : currentUser.providerData[0]?.email}

                fetch('https://toy-store-server.onrender.com/jwt',{
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(loggedUser)
                })
                .then(res=>res.json())
            .then(data => {
              localStorage.setItem("toy-access", data.token);
              
            })
            }
            
            console.log(currentUser.providerData[0]?.email)
            
        })
        return ()=> unsubscribe();
    }, [])

    const authFunctions = {
        user,
        loader,
        createUser,
        logIn,
        googleLogin,
        logOut
    }

    return(
        <AuthContext.Provider value={authFunctions}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;