import { CollectionConfig } from "payload/types";

export const Pokemon: CollectionConfig = {
  slug: "pokemon",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "poke_id",
      label: "Poke_ID",
      type: "number",
    },
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "weight",
      label: "Weight",
      type: "number",
    },
    {
      name: "height",
      label: "Height",
      type: "number",
    },
    {
      name: "abilities",
      label: "Abilities",
      type: "array",
      fields: [
        {
          name: "ability",
          type: "text",
        },
      ],
    },
    {
      name: "types",
      label: "Types",
      type: "array",
      fields: [
        {
          name: "type",
          type: "text",
        },
      ],
    },
    {
      name: "image",
      label: "Image",
      type: "text",
    },
  ],
  endpoints: [
    {
      path: "/:userinput/:sortby",
      method: "get",
      handler: async (req, res, next) => {
        const { payload, params } = req;       
        const test = await payload.find({
          collection: "pokemon",
          limit: 1000,
          sort: params.sortby,
          where: {
            or:[
              {
                name: { contains: params.userinput}
              },
              {
                poke_id: { equals: isNaN(Number(params.userinput)) ? 0 : Number(params.userinput) }
              },
            ]
          },
        });
        if (test.docs.length > 0) {
          res.status(200).send( test );
        } else {
          res.status(404).send({ error: "No match found!!!" });
        }
      },
    },
  ],
};
