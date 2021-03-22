import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faPlayCircle, faUserFriends, faGamepad, faUser } from '@fortawesome/free-solid-svg-icons'
import "./Home.css";
import Img from './connect-four.png'

function Home() {
    return (
        <div className="home">
            <div className="headbar">
                <h1>Connect Four!</h1>
                <h3>Play with other players<br /> around the world</h3>
            </div>
            <div className="container">
                <div className="top">
                    <Link to="/comingsoon">
                        {<div className="play"><FontAwesomeIcon icon={faPlayCircle} /><br/>PLAY</div>}
                    </Link>
                    <img src= {Img} alt = "connect-four" className = "Img"/>
                </div>
                <br />
                <div className="menu">
                    <Link to="/comingsoon">
                        {<div className="customGame"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;Custom Game</div>}
                    </Link>
                
                    <Link to="/twoplayers">
                        {<div className="twoPlayers"><FontAwesomeIcon icon={faUserFriends} />&nbsp;&nbsp;Two Players</div>}
                    </Link>
                
                    <Link to="/comingsoon">
                        {<div className="gameOnline"><FontAwesomeIcon icon={faGamepad} />&nbsp;&nbsp; Game Online</div>}
                    </Link>
                
                    <Link to="/comingsoon">
                        {<div className="trainingGame"><FontAwesomeIcon icon={faBrain} />&nbsp;&nbsp;Training Game</div>}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
