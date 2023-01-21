import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Project from "./pages/Project";
import CV from "./pages/CV";
import Error from "./pages/Error";

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Project/:id" element={<Project />} />
                    <Route path="/CV" element={<CV />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
