import styled from "styled-components"

export default function Legend(){
    const legend = [
        {color: "verde", disp: "Selecionado"},
        {color: "cinza", disp: "Disponível"},
        {color: "amarelo", disp: "Indisponível"}]

    return(
        <>
        {legend.map((l)=>
            <CaptionItem>
                <CaptionCircle color={l.color}/>
                {l.disp}
            </CaptionItem>
        )}
        </>
    )
}

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