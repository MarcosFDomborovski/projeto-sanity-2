import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Atividade 08.10',

  projectId: 'a6y7msoi',
  dataset: 'ativi',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
