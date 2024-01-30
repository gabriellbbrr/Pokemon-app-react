import React, {FunctionComponent, useState} from 'react';
import Pokemons from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

const App: FunctionComponent = () => {
    const [pokemons] = useState<Pokemons[]>(POKEMONS);
  
 return (
    <div>
        <h1>Pokédex</h1>
        <p>Il y a {pokemons.length} Pokémons dans le Pokedéx.</p>
    </div>
 )
}

export default App;


