import fetchAllFromAPI from "./fetchAllFromAPI";
import fetchAuthToken from "./fetchUserToken";
import getAllPokemon from "./getPokemone";

export default async function populatePokemon(): Promise<void> {
  try {
    const token = await fetchAuthToken();
    const pokemonData = await getAllPokemon(token)
    if(!pokemonData.length) fetchAllFromAPI(token)
    
  } catch (err) {
    console.log(err);
  }
}
