import React from "react";
import { Routes, Route } from "react-router-dom";

// Composants permanents
import Header from "./components/Header";
import Footer from "./components/Footer";

// Différentes pages
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/CV" element={<CV />} />
                    <Route path="/Project/:id" element={<Project />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
