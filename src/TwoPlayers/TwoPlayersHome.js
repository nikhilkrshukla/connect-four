import React from 'react'
import { Link } from "react-router-dom";
import Board from "./Board"
import "./TwoPlayersHome.css"

function TwoPlayersHome() {
    return (
        <div>
            <h1>Connect 4</h1>
            <div id="main"><Board /></div>
            <Link to="/home">
                {"<<HOME<<"}
            </Link>
        </div>
    )
}

export default TwoPlayersHome
