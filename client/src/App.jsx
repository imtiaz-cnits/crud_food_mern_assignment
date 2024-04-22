import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="https://crud-food-mern-assignment.vercel.app/" element={<HomePage/>} />
                <Route path="https://crud-food-mern-assignment.vercel.app/create" element={<CreatePage/>} />
                <Route path="https://crud-food-mern-assignment.vercel.app/update/:id" element={<UpdatePage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;