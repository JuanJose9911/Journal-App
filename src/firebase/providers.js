import  {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth'
import {FirebaseAuth} from "./config.js";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const {displayName, email, photoURL, uid} = result.user

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    }catch (error){
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}


export const registerUser = async({email, password, displayName}) => {
    try {
        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL} = response.user
        //Actualiza el displayName del usuario en firebase
        await updateProfile( FirebaseAuth.currentUser, {
            displayName
        })
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    }catch (error){
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}


export const loginWithEmailPassword = async({ email, password}) => {
    //signInWithEmail
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL, displayName } = resp.user
        return {
            ok: true,
            uid,
            photoURL,
            displayName
        }
    }catch (error){
        console.log(error)
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}


export const logoutFirebase = async() =>{
    return await FirebaseAuth.signOut()
}