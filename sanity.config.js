// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  basePath: "/admin", // <-- important that `basePath` matches the route you're mounting your studio from

  name: "default",
  title: "DB-Insure",

  projectId: "ze2kt9tq",
  dataset: "production",
  plugins: [structureTool()],
  apiVersion: "2024-08-14",
  schema: {
    types: schemaTypes,
  },
});
