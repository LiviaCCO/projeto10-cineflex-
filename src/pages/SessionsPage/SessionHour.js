import styled from "styled-components"
import { Link } from "react-router-dom"


export default function SessionHour({day,weekDay, hours, setDayMovie, setHour, setDate}){ 
    
    function chosenHour(event){
        setDate(day);
        const dayMovie = (event.target.name).replace(":","h");
        setDayMovie(dayMovie);
        setHour(event.target.value);
    }

    return(
        
            <ButtonsContainer>
                {hours.map((s)=>
                    <Link to={`/assentos/${s.id}`}>
                        <button data-test="showtime"
                        onClick={chosenHour} 
                        name={weekDay}
                        day={day} 
                        value={s.name} 
                        key={s.id}
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