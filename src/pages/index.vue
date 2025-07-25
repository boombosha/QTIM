<template>
  <div>
    <h1>Articles</h1>
    <section class="articles-section">
      <div class="container">
        <ArticleList :articles="allArticles ?? []" :loading="pending" @article-click="navigateToArticle" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useArticles } from '~/features/article/api/useArticles'

const { fetchAllArticles } = useArticles()

const { data: allArticles, pending } = await useAsyncData(
  'articles',
  async () => {
    try {
      return await fetchAllArticles()
    } catch (error) {
      console.error('Failed to load articles', error)
      return []
    }
  }
)

const navigateToArticle = (id: string) => {
  navigateTo(`/articles/${id}`)
}
</script>