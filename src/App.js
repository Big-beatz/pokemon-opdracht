import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./assets/components/Pokemon";
import Button from "./assets/components/Button";

function App() {
    const [pokemons, setPokemons] = useState([])
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [loading, toggleLoading] = useState(false)
    const [error, setError] = useState(false)

useEffect(() => {
    async function fetchData() {
        toggleLoading(true)
        setError(false)
        try {
            const {data} = await axios(endpoint)
            setPokemons(data)
            console.log(data)
        } catch (e) {
            console.error(e)
            setError(true)
        }
        toggleLoading(false)
    }
    fetchData()
}, [endpoint])


  return (

          <div className="poke-deck">
              {pokemons &&
              <>
                  <header>
                      <h1>Pokemon!</h1>
                  </header>
                  <section>
                      <Button
                          disabled={!pokemons.previous}
                          clickHandler={() => setEndpoint(pokemons.previous)}
                      >
                          Vorige
                      </Button>
                      <Button
                          disabled={!pokemons.next}
                          clickHandler={() => setEndpoint(pokemons.next)}
                      >
                          Volgende
                      </Button>
                  </section>
                  {pokemons.results && pokemons.results.map((pokemon) => {
                      return <Pokemon key={pokemon.name} endpoint={pokemon.url}/>
                  })}

                  {loading && <p>Loading</p>}
                  {error && <p>error</p>}
              </>
              }
    </div>

  );
}

export default App;
