<template>
  <div class="article-list">
    <Loader v-if="loading" />

    <template v-else>
      <div v-if="paginatedItems.length > 0" class="articles-grid">
        <ArticleCard v-for="article in paginatedItems" :key="article.id" :article="article"
          @click="navigateToArticle(article.id)" />
      </div>
      <div v-else class="no-articles">
        No articles found
      </div>

      <Pagination v-if="totalPages > 1 && !loading" :current-page="currentPage" :total-pages="totalPages"
        :visible-pages="visiblePages" @page-change="goToPage" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { usePagination } from '../lib/usePagination'
import type { Article } from '../api/types'
import Loader from '~/shared/ui/Loader.vue';

const props = defineProps<{
  articles: Article[]
  loading?: boolean
  itemsPerPage?: number
}>()

const {
  currentPage,
  paginatedItems,
  totalPages,
  visiblePages,
  goToPage
} = usePagination(
  props.articles,
  props.itemsPerPage ?? 8
)

const emit = defineEmits<{
  (e: 'article-click', id: string): void
}>()

const navigateToArticle = (id: string) => {
  emit('article-click', id)
}
</script>

<style scoped>
.article-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.no-articles {
  text-align: center;
  padding: 2rem;
  color: #666;
}
</style>