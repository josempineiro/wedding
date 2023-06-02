import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://jmwbmyxrnrwvwzsfexlp.supabase.co/graphql/v1": {
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imptd2JteXhybnJ3dnd6c2ZleGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMxNDY4NDQsImV4cCI6MTk5ODcyMjg0NH0.ZCbI2xhzCkokS2FVDxjUN4ZZhUMWh1hCC1mlGD_z1v0",
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imptd2JteXhybnJ3dnd6c2ZleGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMxNDY4NDQsImV4cCI6MTk5ODcyMjg0NH0.ZCbI2xhzCkokS2FVDxjUN4ZZhUMWh1hCC1mlGD_z1v0",
        },
      },
    },
  ],
  documents: "infrastructure/graphql/documents",
  generates: {
    "infrastructure/graphql/client/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
    "infrastructure/graphql/apollo/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
