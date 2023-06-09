import { doc, collection, setDoc } from 'firebase/firestore/lite'
import {FirebaseDB} from "../../firebase/config.js";
import {addNewEmptyNote, creatingNewNote, setActiveNote, setNotes} from "./journalSlice.js";
import {loadNotes} from "../../helpers";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        dispatch( creatingNewNote() )

        const { uid } = getState().auth
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        await setDoc( newDoc, newNote)

        newNote.id = newDoc.id

        dispatch( addNewEmptyNote(newNote) )
        dispatch( setActiveNote(newNote) )

    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState)=>{
        const { uid } = getState().auth

        console.log('ser')
        if ( !uid ) throw new Error('El usuario no existe')

        const notes = await loadNotes(uid)

        dispatch( setNotes( notes ))
    }
}