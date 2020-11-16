import { useState } from 'react';
import Head from 'next/head';
import Pokedex from '../assets/Pokedex.svg';
import axios from 'axios';

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState({});
  const [details, setDetails] = useState([]);

  async function loadPokemon() {
    const randomNumber = Math.round(Math.random() * (150 - 1) + 1);

    const poke_form = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${randomNumber}`);
    const types = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    setPokemon(poke_form.data);
    setDetails(types.data);
  }

  function listen(){
    const utterance = new SpeechSynthesisUtterance();
    const typeText = details.types.map((item, index) => {
      const text = item.type.name;
      if(index === 0){
        return ' Esse é um pokémon do tipo '+ text;
      }
      return 'E também é do tipo '+ text;
    });
    utterance.text = pokemon.name;

    utterance.lang = "pt-BR";
    speechSynthesis.speak(utterance);
    utterance.text = typeText;
    speechSynthesis.speak(utterance);
  }


  return (
  <div>
    <Head>
      <title>Pokedex</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Pokedex/>
      {pokemon !== undefined && (
        <>
        <div>
        <img src={pokemon.sprites && pokemon.sprites.front_default}/>
        </div>
        <label>{pokemon.name}</label>
        </>
      )}

      <button type="button" onClick={loadPokemon}>RANDOM</button>
      <button type="button" className="listen" onClick={listen}>LISTEN</button>
    </main>
  </div>
  );
}

export default Home;
