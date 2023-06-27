import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import { Pokemon } from './collections/Pokemons';
import { PokeUsers } from './collections/PokeUsers';

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Pokemon,
    PokeUsers,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
