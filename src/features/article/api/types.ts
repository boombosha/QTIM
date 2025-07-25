export interface Article {
  id: string
  createdAt: string
  title: string
  preview: string
  image: string
  description: string
}

export type ArticlesResponse = Article[]

export interface PaginationParams {
  page: number
  perPage: number
}

export interface PaginatedResult<T> {
  data: T[]
  currentPage: number
  totalPages: number
}