import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [number, setNumber] = useState(1)
  const [sprites, setSprites] = useState('')
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    setTimeout(() => getPokemonsOnStart(), 10000)
  }, [])


  async function getPokemons(number) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    setPokemons(data)
    const parseData = data.sprites
    setSprites(parseData.front_default)
  }

  async function getPokemonsOnStart() {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
    setPokemons(data)
    const parseData = data.sprites
    setSprites(parseData.front_default)
  }

  function foward() {
    const numberAux = number + 1
    if (!number < 890) {
      setNumber(numberAux)
      getPokemons(numberAux)
    }
  }

  function back() {
    const numberAux = number - 1
    if (!numberAux < 1) {
      setNumber(numberAux)
      getPokemons(numberAux)
    }
  }

  return (
    <div className="all-items">
      <div className="pokedex">
        <h1 className="list"> Pokédex</h1>
        <img src={sprites} alt="imagem pokemon" />
        <p className="pokemon-number">#{pokemons.id}</p>
        <p className="pokemon-name">Pokemon: {pokemons.name}</p>
        <ul className="list-pokemons">
          <li className="back-pokemon" onClick={back}><button className="button-back button-poke">Back</button></li>
          <li className="next-pokemon" onClick={foward}><button className="button-next button-poke">Next</button></li>
        </ul>
      </div>
    </div>

  );
}
export default App;
