import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import JournalCard from "./components/JournalCard";
import data from "./components/data";
import "../src/style.css";



function App(){
    const datas = data.map( data => {
        return (
            <JournalCard
                key = {data.id}
                dataa = {data}
            />
        )
    })
    return(
        <>
            <Header/>
            <>
                {datas}
            </>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);