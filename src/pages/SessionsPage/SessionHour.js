import styled from "styled-components"
import { Link } from "react-router-dom"


export default function SessionHour({day, hours, setIdSession, setDayMovie, setHour}){ 
    
    function chosenHour(event){
        setIdSession(event.target.id);
        const dayMovie = (event.target.name).replace(":","h");
        setDayMovie(dayMovie);
        setHour(event.target.value);
    }

    return(
        
            <ButtonsContainer>
                {hours.map((s)=>
                    <Link to={`/assentos/${s.id}`}>
                        <button 
                        onClick={chosenHour} 
                        name={day} 
                        value={s.name} 
                        id={s.id}>{s.name}</button>
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