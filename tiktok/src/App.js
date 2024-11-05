// import React from "react";
// import ReactDOM from "react-dom";
// import Paragraph from './components/Paragraph';
// import Title from './components/Title';
// import GlobalStyles from "./components/GlobalStyles";
// import Button from './components/Buttons';
// import clsx from "clsx";
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";



// function App() {
//     return (
//         <GlobalStyles>
//             <div style={{padding: 20}}>
//                 <Button primary />
//                 <Button secondary />
//                 <Button success />
//                 <Button danger />
//                 <Button warning />
//                 <Button info />
//                 <Button light />
//                 <Button dark />
//                 <Button link />
//             </div>
//         </GlobalStyles>
//     )
// }

function App() {
    return (
        <div>
            {/* navbar */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {/* navbar */}


            {/* Page change */}
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/news" element={<NewsPage />} />
                <Route exact path="/contact" element={<ContactPage />} />
            </Routes>
            {/* Page change */}
        </div>
    )
}

export default App;




