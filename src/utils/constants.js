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

export const SCORE_OPTIONS = [
  {
    name: '1 punto',
    value: 1
  },
  {
    name: '2 punto',
    value: 2
  },
  {
    name: '3 punto',
    value: 3
  },
  {
    name: '4 punto',
    value: 4
  },
  {
    name: '5 punto',
    value: 5
  }
]

export const SORT_BY_ENUM = SORT_BY.map(sort => sort.value)

export const ORDER_BY_ENUM = ORDER_BY.map(order => order.value)

export const AVATAR_DEFAULT =
  'https://simulacionymedicina.es/wp-content/uploads/2015/11/default-avatar-300x300-1.jpg'

export const BANNER_DEFAULT =
  'https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png'
