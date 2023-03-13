import styled from "styled-components"
import {useState , useEffect} from 'react'
import axios from 'axios';
import SessionHour from './SessionHour'
import { useParams } from 'react-router-dom';

export default function SessionsPage({setHour, setDayMovie, setDate}) {
    
    const params = useParams();
    const idFilm = params.idFilme;

    const [sessions, setSessions] = useState([]);
    const [movieData, setMovieData] = useState([]);

    useEffect(()=>{
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilm}/showtimes`)
        
        promisse.then((resposta)=>{
            setMovieData(resposta.data)
            setSessions(resposta.data.days)
        })

        promisse.catch((resposta)=>{console.log(resposta.response.data)})
    }, [idFilm])

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {sessions.map((s)=>
                    <SessionContainer data-test="movie-day" key={s.id}>
                        {s.weekday} - {s.date}
                        <SessionHour 
                        weekDay={s.weekday} 
                        day={s.date}
                        hours={s.showtimes} 
                        setDayMovie={setDayMovie}
                        setHour={setHour}
                        setDate={setDate}/>
                    </SessionContainer> 
                )}
            </div>

            <FooterContainer data-test="footer">
                <div>
                    <img src={movieData.posterURL} alt={movieData.title} />
                </div>
                <div>
                    <p>{movieData.title}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`