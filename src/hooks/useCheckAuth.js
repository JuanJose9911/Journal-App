import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {FirebaseAuth} from "../firebase/config.js";
import {login, logout} from "../store/auth/index.js";
import {startLoadingNotes} from "../store/journal/index.js";

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
        onAuthStateChanged( FirebaseAuth, async ( user ) => {
            if ( !user ) return dispatch(logout())

            const { uid, photoURL, displayName } = user
            dispatch( login({ uid, photoURL, displayName }) )
            dispatch( startLoadingNotes() )
        })
    }, [])

    return status

};