export interface Review {
  id: string
  name: string
  email: string
  rating: number
  comment: string
  date: string
  location: string
  avatar?: string
}

export interface Tour {
  id: string
  title: string
  description: string
  days: number
  price: number
  image: string
  destinations: string[]
  highlights: string[]
  itinerary: {
    title: string
    description: string
    location: string
  }[]
}

