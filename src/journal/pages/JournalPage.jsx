import {Typography} from "@mui/material";
import {JournalLayout} from "../layout/JournalLayout.jsx";
import {NothingSelectedView} from "../views/index.js";

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView />
        </JournalLayout>
    );
};