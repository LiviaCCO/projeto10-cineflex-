import styled from "styled-components"
import { Link, useParams } from "react-router-dom"


export default function SessionHour({hours, setIdSession}){
    //console.log(hours)
    
    
    function chosenHour(event){
        setIdSession(event.target.id);
    }

    return(
        
            <ButtonsContainer>
                {hours.map((s)=>
                    <Link to={`/assentos/${s.id}`}>
                        <button onClick={chosenHour} id={s.id}>{s.name}</button>
                    </Link>
                )}
            </ButtonsContainer>
    )
}

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