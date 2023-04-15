import {Navigate, Route, Routes} from "react-router-dom";

import {CheckingAuth} from "../ui/index.js";
import {useCheckAuth} from "../hooks/index.js";
import {AuthRoutes} from "../auth/routes/AuthRoutes.jsx";
import {JournalRoutes} from "../journal/routes/JournalRoutes.jsx";



export const AppRouter = () => {

    const status = useCheckAuth()

    if (status === 'checking'){
        return <CheckingAuth/>
    }
    return (
        <Routes>
            {
                ( status === 'authenticated')
                    ? <Route path="/*" element={ <JournalRoutes /> } /> /*Journal*/
                    : <Route path="/auth/*" element={ <AuthRoutes /> } /> /*Login y registro*/
            }
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>



    );
};