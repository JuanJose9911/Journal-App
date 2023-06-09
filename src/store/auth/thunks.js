import {checkingCredentials, login, logout} from "./";
import {loginWithEmailPassword, logoutFirebase, registerUser, signInWithGoogle} from "../../firebase/providers.js";


export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = (await signInWithGoogle())
        if (!result.ok) return dispatch( logout( result ) )

        dispatch( login(result) )
    }
}

export const startCreatingUser = ({ email, password, displayName}) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const {ok, uid, photoURL, errorMessage} = await registerUser({email, password, displayName})
        if (!ok) return dispatch( logout({errorMessage}) )

        dispatch( login({uid, displayName, email, photoURL}) )
    }
}

export const startLoginWithEmailPassword = ({email, password})=>{
    return async( dispatch )=> {
        dispatch( checkingCredentials() );
        const {ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({email, password} )

        if ( !ok ) return dispatch( logout({errorMessage}))

        dispatch( login({ uid, displayName, photoURL, email})  )
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase()
        dispatch( logout() )

    }
}