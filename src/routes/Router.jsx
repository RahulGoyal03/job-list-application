import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";

export const Router = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path={'/login'} element={<Login />} />
            </Routes>

        </>
    );
};