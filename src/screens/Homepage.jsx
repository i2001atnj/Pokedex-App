import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Navbar from '../components/Navbar'
import Pokedex from '../components/Pokedex'
import NotFound from '../components/NotFound'
import Searchbar from '../components/Searchbar'
import { PokemonContext, actions } from '../context/PokemonContext'
import { getPokemonData, getPokemons, searchPokemon } from '../components/API'

export default function Homepage (){
  const [state, dispatch] = React.useContext(PokemonContext);
  const {page, notFound, searching} = state
  const fetchPokemons = async () => {
    try {
      dispatch({ type: actions.LOAD_POKEMONS })
      const data = await getPokemons(30, 30 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      dispatch({ type: actions.POKEMONS_LOADED, pokemons: results, total: Math.ceil(data.count / 30) })
    } catch (err) {}
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    dispatch({type: actions.SET_SEARCHING})

    const result = await searchPokemon(pokemon);
    dispatch({type: actions.SHOW_SEARCH_RESULTS, result: result})
  };

  return (
    <View style={styles.Homepage}>
      <View style={{zIndex: 2}}>
        <Navbar/>
        <Searchbar onSearch={onSearch}/>
      </View>
      <View style={{zIndex: 1}}>
        {notFound ? <NotFound/> : <Pokedex/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Homepage: {
    backgroundColor: '#DC0A2D',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 4,
    paddingVertical: 10,
    width: '100%'
  }
})
