import { doc, collection, setDoc } from 'firebase/firestore/lite'
import {FirebaseDB} from "../../firebase/config.js";
import {addNewEmptyNote, creatingNewNote, setActiveNote} from "./journalSlice.js";

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