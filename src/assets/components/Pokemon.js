import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Pokemon({endpoint}){
    const [pokemon, setPokemon] = useState(null)

   useEffect(() =>
    {
        async function fetchData() {
            try {
                const {data} = await axios.get(endpoint)
                setPokemon(data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchData()
    }, [endpoint])

return(
    <section className='poke-card'>
        {pokemon &&
            <>
                <h2>{pokemon.name}</h2>
                <img
                    src={pokemon.sprites.front_default}
                    alt="afbeelding pokemon"
                />
                <p><strong>Moves: </strong>{pokemon.moves.length}</p>
                <p><strong>Weight: </strong>{pokemon.weight}</p>
                <p><strong>Abilities: </strong></p>
                <ul>
                    {pokemon.abilities.map((ability) => {
                        return (<li key={`${ability.ability.name}-${pokemon.name}`}>
                            {ability.ability.name}
                        </li>
                        )
                    })}
                </ul>
            </>
        }
    </section>
)
}

export default Pokemon