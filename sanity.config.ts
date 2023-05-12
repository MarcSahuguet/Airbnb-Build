import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"


const config = defineConfig({
  projectId: "l1a05fsu",
  dataset: "production",
  title: "Hourrail Admin",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn : true,
})

export default config
