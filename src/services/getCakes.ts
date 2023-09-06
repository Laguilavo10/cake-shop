import { client } from './contentful'
import type { Contentful, ItemFields } from '../types/contentful/types'

export interface Cake extends Omit<ItemFields, 'imageCake'> {
  imageCake?: string[]
}
export const getCakes = ()  => {
  const entries =  client.getEntries() as unknown as Contentful

  const requireData : Cake[] = entries.items.map(item => {
    const { name, price, description, imageCake, slug } = item.fields;    
    return {
      slug,
      name,
      price,
      imageCake: imageCake?.map(img => img.fields.file.url),
      description
    }
  }) 
  
  return requireData
}


