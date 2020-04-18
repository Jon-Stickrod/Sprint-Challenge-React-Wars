import React, { useState, useEffect } from 'react';
import Cards from './Character';
import axios from 'axios';
import { Container, Row, Col, CardDeck } from 'reactstrap';
import styled from "styled-components";



const Style = styled.div`
display: flex;
margin: 0% auto;
justify-content: center;
flex-direction: column;
width: 300px;
margin-bottom: 15px;
`;

const CardGrid = () => {
  const [characters, setCharacters] = useState([]);
  // get api data via useeffect hook
  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people/`)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('no data', error);
      });
  }, []);

  console.log(characters);

  return (
  <Container className='style2'>

    


      {characters.map(character => {
        return (
            <Style>

          <Cards
            key={character.url}
            name={character.name}
            height={character.height}
            mass={character.mass}
            hairColor={character.hair_color}
            eyeColor={character.eye_color}
            birthYear={character.birth_year}
            gender={character.gender}
          />
          </Style>
        );
      })}
    
    </Container>
  );
};

export default CardGrid;