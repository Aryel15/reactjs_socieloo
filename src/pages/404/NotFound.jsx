import React from "react"
import './style.css'
import Button from "../../components/Button/Button";

export default function NotFound(){
    const page = window.location.pathname;
    return(
        <>
        <main className="page404">
            <div className="text404">
                <h1>Oops!</h1>
                <h2>{page} não foi encontrada...</h2>
                <a href="/" className="botão">Ir para Home</a>
            </div>
            <div className="fundoimg">
                <img src="./imgs/top.png" alt="" />
            </div>
        </main>
        </>
    )
}