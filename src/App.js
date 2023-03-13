import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
    const [movie, setMovie] = useState([]);
    const [idFilme, setIdFilme] = useState(0);
    //const [idSession, setIdSession] = useState(0);
    const [hour, setHour] = useState("");
    const [dayMovie, setDayMovie] = useState("");
    const [selecionados, setSelecionados] = useState([]);
    const chosenMovie = movie[idFilme-1];
    const [date, setDate]=useState("");
    //Dados do comprador
    const [comprador, setComprador] = useState("");
    const [cpf, setCpf] = useState("");
    return (
        <BrowserRouter>
            <NavContainer>CINEFLEX</NavContainer>
            <Routes>
                <Route path="/" element={
                    <HomePage 
                    movie={movie}
                    setMovie={setMovie}
                    setIdFilme={setIdFilme}/>} />
                <Route path="/assentos/:idSessao" element={
                    <SeatsPage 
                    selecionados={selecionados} 
                    setSelecionados={setSelecionados} 
                    chosenMovie={chosenMovie}
                    dayMovie={dayMovie}
                    hour={hour}
                    comprador={comprador}
                    setComprador={setComprador}
                    cpf={cpf}
                    setCpf={setCpf}/>} />
                <Route path="/sessoes/:idFilme" element={
                    <SessionsPage 
                   /*  setIdSession={setIdSession}  */
                    setHour={setHour}
                    setDayMovie={setDayMovie}
                    setDate={setDate}/>} />
                <Route path="/sucesso" element={
                    <SuccessPage
                    movie={movie}
                    hour={hour} 
                    date={date}
                    comprador={comprador}
                    setComprador={setComprador}
                    cpf={cpf}
                    setCpf={setCpf}
                    selecionados={selecionados}
                    setSelecionados={setSelecionados}/>} />
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
