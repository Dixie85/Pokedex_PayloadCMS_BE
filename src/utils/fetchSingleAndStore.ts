export default async function fetchSingleAndStore(
  url: string,
  token: string
): Promise<any> {
  try {
    const res = await fetch(url);
    const poke = await res.json();

    const customPoke = {
      poke_id: poke?.id,
      name: poke?.name,
      weight: poke?.weight ?? 0,
      height: poke?.height ?? 0,
      abilities: poke?.abilities?.map((a: any) => {
        return { ability: a.ability.name };
      }) ?? 'unknown',
      types: poke?.types?.map((t: any) => {
        return { type: t.type.name};
      }) ?? 'unknown',
      image:
        poke?.sprites.other.dream_world.front_default ??
        poke?.sprites.other.home.front_default ??
        poke?.sprites.front_default ?? 
        'unknown',
    };

    const req = await fetch(`${process.env.SERVER_URL}/api/pokemon`, {
      method: "POST",
      credentials: "include",
      headers: {
        Cookie: `payload-token=${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customPoke),
    });
    const data = await req.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
