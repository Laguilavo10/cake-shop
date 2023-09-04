export function convertToCOP(price: number | string): string {
  if(typeof price === 'string') {
    price = Number(price)
  }
  return price.toLocaleString('es-CO')
}