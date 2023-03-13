import styled from "styled-components"
import {useState , useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios';

export default function HomePage({movie, setMovie, setIdFilme}) {
 
    function chooseMovie(movie){
        setIdFilme(movie.target.id);
    }


    useEffect (()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
        promise.then(resposta => {
            setMovie(resposta.data);
        })
        promise.catch(resposta => {
            console.log(resposta.response.data);
        })
    }, [])

    
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {movie.map((m)=>
                    <Link to={`/sessoes/${m.id}`}>
                        <MovieContainer  data-test="movie">
                            <img onClick={(e)=>chooseMovie(e)} alt={m.title} src={m.posterURL} key={m.id} id={m.id}/>
                        </MovieContainer>
                    </Link>
                )}
                
            </ListContainer>

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
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`