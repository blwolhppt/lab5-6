import './App.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./Main";
import About from "./About";


function App() {
    return (
        <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/student/:studentId" element={<About />} />
                    </Routes>
                </Router>
        </>
    );
}

export default App;