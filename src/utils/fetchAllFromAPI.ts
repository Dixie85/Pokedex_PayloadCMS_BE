import fetchSingleAndStore from "./fetchSingleAndStore";

export default async function fetchAllFromAPI(token:string): Promise<void> {
  try {
    const req = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0"
    );
    const { results } = await req.json();
    for(const pokemonObj of results){
      fetchSingleAndStore(pokemonObj.url, token )    
    }
  } catch (err) {
    console.log(err);
  }
}
