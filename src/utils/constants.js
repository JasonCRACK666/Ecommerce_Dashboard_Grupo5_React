export const SORT_BY = [
  {
    name: 'titulo',
    value: 'title'
  },
  {
    name: 'fecha de publicación',
    value: 'publicationDate'
  },
  {
    name: 'precio original',
    value: 'originalPrice'
  },
  {
    name: 'vendido',
    value: 'sold'
  }
]

export const ORDER_BY = [
  {
    name: 'Descendente',
    value: 'desc'
  },
  {
    name: 'Ascendente',
    value: 'asc'
  }
]

export const SORT_BY_ENUM = SORT_BY.map(sort => sort.value)

export const ORDER_BY_ENUM = ORDER_BY.map(order => order.value)
