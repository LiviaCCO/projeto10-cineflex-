import styled from "styled-components"
import { Link } from "react-router-dom"


export default function SessionHour({day,weekDay, hours, setIdSession, setDayMovie, setHour, setDate}){ 
    
    function chosenHour(event){
        setDate(day);
        console.log(day, weekDay)
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
                        name={weekDay}
                        day={day} 
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