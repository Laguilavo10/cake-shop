import { client } from './contentful'
import type { Contentful, ItemFields } from '../types/contentful/types'
import { slugify } from '../utils/slugify'

export interface Cake extends Omit<ItemFields, 'imageCake'> {
  imageCake?: string[]
}
export const getCakes = async () => {
  const entries = (await client.getEntries()) as unknown as Contentful

  const requireData: Cake[] = entries.items.map((item) => {
    const { name, description, imageCake, slug, prices } = item.fields
    return {
      slug,
      name,
      prices,
      imageCake: imageCake?.map((img) => img.fields.file.url),
      description
    }
  })

  return requireData
}
