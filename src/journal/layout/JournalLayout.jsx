import {Box, Toolbar} from "@mui/material";
import {NavBar, SideBar} from "../components/index.js";


const drawerWidth = 240;
export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidth={ drawerWidth }/>
            {/*Sidebar*/}
            <SideBar drawerWidth={ drawerWidth }/>
            <Box component="main" sx={{ flexGrow: 1, p: 3}}>
                <Toolbar />
                { children }
            </Box>
        </Box>
    );
};