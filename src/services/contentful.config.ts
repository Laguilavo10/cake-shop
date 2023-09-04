import contentful  from "contentful";

export const client = contentful.createClient({
  space: import.meta.env.SPACE,
  environment: import.meta.env.ENVIRONMENT,
  accessToken: import.meta.env.ACCESSTOKEN
})
