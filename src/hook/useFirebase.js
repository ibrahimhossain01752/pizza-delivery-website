import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebaseinit";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [error,setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })

       
    }
    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }
    useEffect(() => {
      onAuthStateChanged(auth, user=>{
          if(user){
              console.log('inside state changed',user);
              setUser(user);
          }
      })      
    },[])
    return{
        error,
        user,
        signInUsingGoogle,
        logout
    }
}
export default useFirebase;