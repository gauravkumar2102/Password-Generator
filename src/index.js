import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header.js";
import Content from "./component/content.js";


function App(){

    return (
        <>  
           <Header />
           <Content/>
           
        </>
    )
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);