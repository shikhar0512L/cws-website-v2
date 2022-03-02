import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route} from "react-router-dom";
import BlogMain from './blogs/BlogMain';
import Win11 from "./blogs/Win11";
import Footer from './components/Footer';
import Pegasus from './blogs/Pegasus';
import BlueStacks from './blogs/BlueStacks';
import Masterml from './blogs/Masterml';
import NewUser from './blogs/NewUser';
import Obs from './blogs/Obs';
import Contact from './components/Contact';
import Text from './blogs/Text';
import Studio from './blogs/Studio';
import Protect from './blogs/Protect';

export default function App() {
    return (
        <>
            <Router >
                <Navbar />
                <Routes >
                    <Route path="/Blog/*" element={<BlogMain />} />
                    <Route path="/" element={< Main />} />
                    <Route path="/win11" element={< Win11 />} />
                    <Route path="/Pegasus" element={< Pegasus />} />
                    <Route path="/BlueStacks" element={< BlueStacks />} />
                    <Route path="/obs" element={< Obs />} />
                    <Route path="/Studio" element={< Studio />} />
                    <Route path="/NewUser" element={< NewUser />} />
                    <Route path="/LAMP" element={< Text />} />
                    <Route path="/masterml" element={< Masterml />} />
                    <Route path="/protect" element={< Protect />} />
                    <Route path="/Contact" element={< Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};