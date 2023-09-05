

export function slugify(name: string) {
  const slug = name
    .toLowerCase() // Convierte el nombre a minúsculas
    .replace(/[^a-zA-Z0-9]+/g, '-') // Reemplaza caracteres no alfanuméricos con guiones
    .replace(/^-+|-+$/g, '') // Elimina guiones al principio y al final

  return slug;
}