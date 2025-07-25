import { ref, computed } from 'vue'

export function usePagination<T>(items: T[], itemsPerPage: number = 8) {
  const currentPage = ref(1)
  
  const totalPages = computed(() => 
    Math.ceil(items.length / itemsPerPage)
  )

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return items.slice(start, end)
  })

  const visiblePages = computed(() => {
    const maxVisible = 5
    if (totalPages.value <= maxVisible) {
      return Array.from({ length: totalPages.value }, (_, i) => i + 1)
    }

    const half = Math.floor(maxVisible / 2)
    let start = Math.max(1, currentPage.value - half)
    let end = Math.min(start + maxVisible - 1, totalPages.value)

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  })

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  return {
    currentPage,
    totalPages,
    paginatedItems,
    visiblePages,
    goToPage
  }
}