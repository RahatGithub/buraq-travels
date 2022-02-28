import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";
import initAuth from '../Firebase/firebase.init'

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .catch(error => console.log(error))
    }

    const logout = () => {
        signOut(auth)
        .then(() => {})
        .catch(error => console.log(error))
    }


    return {
        user,
        signInWithGoogle,
        logout
    }
}

export default useFirebase;