import React from "react"
import './style.css'
import Button from "../../components/Button/Button";
import { Link } from 'react-router-dom'

export default function NotFound(){
    const page = window.location.pathname;
    return(
        <>
        <main className="page404">
            <div className="text404">
                <h1>Oops!</h1>
                <h2>{page} não foi encontrada...</h2>
                <Link to="/" className="botão">Ir para Home</Link>
            </div>
            <div className="fundoimg">
                <img src="./imgs/top.png" alt="" />
            </div>
        </main>
        </>
    )
}