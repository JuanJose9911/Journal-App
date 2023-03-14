import {Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth/routes/AuthRoutes.jsx";
import {JournalRoutes} from "../journal/routes/JournalRoutes.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            {/*Login y registro*/}
            <Route path="/auth/*" element={ <AuthRoutes /> } />

            {/*Journal*/}
            <Route path="/*" element={ <JournalRoutes /> } />

        </Routes>
    );
};