import styled from "styled-components"
import {useState , useEffect} from 'react'
import axios from 'axios';

export default function SessionsPage({idFilme}) {
    console.log(idFilme)
    const [sessoes, setSessoes] = useState([]);
    const [overview, setOverview] = useState([]);
    const [poster, setPoster] = useState([]);
    const [title, setTitle] = useState([]);
    const [idSession, setIdSession] = useState([]);
    const [hour, setHour] = useState([]);
    //console.log("sessoes", sessoes)
    console.log("overview", overview)
    console.log("poster", poster)
    console.log("title", title)
    console.log("sessoes", sessoes)
    console.log("hora", hour)
    console.log("idSession", idSession)
    //console.log("sessoes", sessoes[0].showtimes)

    function chosenHour(event){
        setHour(event.target.value);
        setIdSession(event.target);
    }

    useEffect(()=>{
        //const promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes`)
        
        promisse.then((resposta)=>{
            setSessoes(resposta.data.days)
            setOverview(resposta.data.overview)
            setPoster(resposta.data.posterURL)
            setTitle(resposta.data.title)
        })

        promisse.catch((resposta)=>{console.log(resposta.status)})
    }, [])

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {sessoes.map((s)=>
                    <SessionContainer>
                        {s.weekday} - {s.date}
                        <ButtonsContainer>
                            <button onClick={chosenHour} value={"14:00"} id={"01"}>14:00</button>
                            <button onClick={chosenHour} value={"15:00"} id={"02"}>15:00</button>
                        </ButtonsContainer>
                    </SessionContainer> 
                )}
            </div>

            <FooterContainer>
                <div>
                    <img src={poster} alt={title} />
                </div>
                <div>
                    <p>{title}</p>
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
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
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