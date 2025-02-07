import { type SchemaTypeDefinition } from 'sanity'
import { newProducts } from './newProducts'
import { shipment } from './shipment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newProducts,shipment],
}
