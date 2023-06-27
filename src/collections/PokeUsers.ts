import { CollectionConfig } from "payload/types";

export const PokeUsers: CollectionConfig = {
  slug: "pokeusers",
  auth: {
    maxLoginAttempts: 0,
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "email",
      type: "text",
      unique: true
    },
    {
      name: "password",
      type: "text",
    },
  ],
  
};