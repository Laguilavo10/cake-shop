import contentful  from "contentful";

export const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN
})
