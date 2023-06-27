export default async function getAllPokemon (token:string): Promise<any> {
  try {
  
  const req = await fetch(`${process.env.SERVER_URL}/api/pokemon`, {
      method: "GET",
      headers: {
        Cookie: `payload-token=${token}`,
      },
    });
    const {docs} = await req.json();
    return docs
  } catch (err) {
    console.log(err);
  }
}