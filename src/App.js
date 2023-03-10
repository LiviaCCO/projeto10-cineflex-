import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
    const [movie, setMovie] = useState([{id: 1 , 
        overview: 
        "Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
        posterURL: 
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        releaseDate: 
        "2021-03-18T00:00:00.000Z",
        title: 
        "Zack Snyder Justice League"}]);
    const [idFilme, setIdFilme] = useState(0);
    const [idSession, setIdSession] = useState(0);
    const [hour, setHour] = useState("");
    const [seat, setSeat] = useState([]);
    const chosenMovie = movie[idFilme];

    return (
        <BrowserRouter>
            <NavContainer>CINEFLEX</NavContainer>
            <Routes>
                <Route path="/" element={
                    <HomePage 
                    movie={movie}
                    setMovie={setMovie}
                    setIdFilme={setIdFilme}/>} />
                <Route path="/assentos/:idSessao" element={<SeatsPage seat={seat} setSeat={setSeat}/>} />
                <Route path="/sessoes/:idFilme" element={
                    <SessionsPage setIdSession={setIdSession} setHour={setHour}/>} />
                <Route path="/sucesso" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
