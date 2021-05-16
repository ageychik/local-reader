import React from "react";
import './main.scss';

// Import components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;
