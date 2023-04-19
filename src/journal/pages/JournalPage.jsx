import {IconButton } from "@mui/material";
import {JournalLayout} from "../layout/JournalLayout.jsx";
import {NoteView, NothingSelectedView} from "../views/index.js";
import {AddOutlined} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {startNewNote} from "../../store/journal/index.js";

export const JournalPage = () => {

    const dispatch = useDispatch()

    const onClickNewNote = () => {
        dispatch( startNewNote() )
    }
    return (
        <JournalLayout>
            <NothingSelectedView />
            {/*<NoteView/>*/}
            <IconButton size="large"
                        onClick={ onClickNewNote }
                        sx={{
                            color: 'white',
                            backgroundColor: 'error.main',
                            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                            position: 'fixed',
                            right: 50,
                            bottom: 50
                        }}
            >
                <AddOutlined sx={{ fontSize: 30 }}/>
            </IconButton>
        </JournalLayout>
    );
};