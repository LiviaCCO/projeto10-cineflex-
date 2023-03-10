import styled from "styled-components"
import {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function SeatsPage({seat, setSeat}) {

    const params = useParams();
    const idSession = params.idSessao;
    console.log(params)
    const [seats, setSeats] = useState([]);
    console.log(seats)

    function reserve(assento){
        const novoSeat = assento.target.id;
        const reserveSeat = seat.push(novoSeat);
        console.log("seat", seat);
        console.log("reserveSeat", reserveSeat);
        console.log(assento.target.id);
       // setSeat(reserveSeat);

    }

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSession}/seats`);
        promise.then((resposta)=>{setSeats(resposta.data.seats)})
        promise.catch((resposta)=>{console.log(resposta.response.data)})
    },[])


    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {seats.map((s)=>
                    <SeatItem value={s.isAvailable} id={s.name} onClick={(e)=>reserve(e)}>{s.name}</SeatItem>            
                )}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle color={"verde"}/>
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle color={"cinza"}/>
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle color={"amarelo"}/>
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster" />
                </div>
                <div>
                    <p>Tudo em todo lugar ao mesmo tempo</p>
                    <p>Sexta - 14h00</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${props => props.color === "verde" ? "0E7D71" : (props.color === "cinza" ? "C3CFD9" : "FBE192")};
    background-color: ${props => props.color === "verde" ? "1AAE9E" : (props.color === "cinza" ? "7B8B99" : "F7C52B")};  
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const SeatItem = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
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