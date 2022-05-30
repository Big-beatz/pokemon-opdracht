import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [pokemonName, setPokemonName] = useState('')
    const [sprite, setSprite] = useState('')
    const [abilities, setAbilities] = useState([])
    const [weight, setWeight] = useState('')
    const [moves, setMoves] = useState('')

    abilities.map(() => {})

    async function fetchData(){
        try{
            const {data: pokemonData} = await axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
            console.log(pokemonData)
            setPokemonName(pokemonData.forms[0].name)
            setSprite(pokemonData.sprites.front_default)
            setAbilities(pokemonData.abilities)
            setWeight(pokemonData.weight)
            setMoves(pokemonData.moves.length)
        }
        catch(e){
            console.error(e)
        }
    }
    fetchData()

  return (
      <>
        <header>
        <h1>Pokemon!</h1>
        </header>
    <div>
      <article>
          <h2>{pokemonName}</h2>
        <img src={sprite} alt="pokemon"/>
        <p>Moves: {moves}</p>
        <p>Weight: {weight}</p>
        <p>Abilities
        </p>
      </article>
    </div>
      </>
  );
}

export default App;
