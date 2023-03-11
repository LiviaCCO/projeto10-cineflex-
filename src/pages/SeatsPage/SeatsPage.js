import styled from "styled-components"
import {useState , useEffect} from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SeatsPage({selecionados, setSelecionados, chosenMovie}) {

    //const [selecionados, setSelecionados]=useState([]);

    //console.log("movie", chosenMovie);
    //console.log("seat",seat)

    const params = useParams();
    const idSession = params.idSessao;
    console.log("params", params)
    const [seats, setSeats] = useState([]);
    console.log("selecionados", selecionados)

    function fazerReserva(event){
        event.preventDefault();
        
        console.log(event);

        /* const reserva = axios.post("XXXXXXXX", {
			comprador: comprador,
			cpf: cpf
		});
 */
    }

    function reserve(assento){
        //console.log(assento.target)
        const available = assento.target.value;
        const assentoSelecionado=assento.target.id;
        if(available==="false"){
            alert("Esse assento não está disponível");
        }
        else{
            if(!selecionados.includes(assentoSelecionado)){
                const selecionado = [...selecionados, assentoSelecionado];
                setSelecionados(selecionado);
            } 
            
            else{
                for(let i=0; i<selecionados.length; i++){
                    if(assentoSelecionado===selecionados[i]){
                        selecionados.splice(i, 1);
                        const novoSelecionados = selecionados;
                        setSelecionados(novoSelecionados);
                    }
                }
            } 
        }
       /*  console.log("target", assento.target.value)    
        const newSeat = assento.target.id;
        console.log("newSeat", newSeat)
        console.log("seat", seat);
        const repetido = seat.includes(newSeat);
        console.log(repetido);
        if(!seat.includes(newSeat)){
            const reserveSeat = seat.push(newSeat);
            setSeat(reserveSeat);
        } */

        /* if(seat.includes(e.target.id)){

        } ? "none" : setSeat(seat.push(e.target.id)) */

       
       // .then(resp=>useNavigate("/....."))

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
                    <SeatItem 
                    value={s.isAvailable} 
                    color={selecionados.includes(s.id)} 
                    key={s.id} 
                    id={s.id} 
                    onClick={(e)=> reserve(e)}>{s.name}
                    </SeatItem>            
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

            <FormContainer onSubmit={fazerReserva}>
                <label for="comprador">Nome do Comprador:</label>
                <input type="text" id="comprador" required placeholder="Digite seu nome..." />

                <label for="cpf">CPF do Comprador:</label>
                <input type="number" id="cpf" required placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer >
                <div>
                    <img src={chosenMovie.posterURL} alt={chosenMovie.title} />
                </div>
                <div>
                    <p>{chosenMovie.title}</p>
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
const FormContainer = styled.form`
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
    border: 1px solid ${props => props.color === "verde" ? "#0E7D71" : (props.color === "cinza" ? "#C3CFD9" : "#FBE192")};
    background-color: ${(props) => (props.color === "verde" ? "#1AAE9E" : (props.color === "cinza" ? "#7B8B99" : "#F7C52B"))};  
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
const SeatItem = styled.button`
    border:  ${(props) => props.value ? ("1px solid #7B8B99") : "1px solid #F7C52B"};       
    background-color: ${(props) => props.value ? (props.color ? "#1AAE9E" : "#C3CFD9") : "#FBE192"}; 
    color: #000000;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    padding:0px;
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