import {BrowserRouter as Router, Routes, Navigate, Route} from "react-router-dom";

import Login from "./pages/Login"
import LoginSuccess from "./pages/LoginSuccess"
import Register from "./pages/Register"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/success" element={<LoginSuccess/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;