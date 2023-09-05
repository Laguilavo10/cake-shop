import type { Cake } from '../types/types'
import { slugify } from '../utils/slugify'
import { client } from './contentful.config'
import customCakeImage from '../assets/custom-cake.webp'

export const getCakes = async () => {
  const data = await client.getEntries()

  const requireData = data.items.map(({ fields }): Cake => {
    const name = fields.name as string
    const price = fields.price as string
    const description = fields?.description?.content[0].value as string
    const imageCake = fields?.imageCake?.map((item: any) => item?.fields?.file?.url)
    
    return {
      slug: slugify(name),
      name,
      price,
      imageCake,
      description
    }
  })

  requireData.push({
    slug: slugify('Personaliza tu pastel'),
    name: 'Personaliza tu pastel',
    price: '50000',
    description: 'uwu',
    imageCake: [customCakeImage]
  })

  return requireData
}
