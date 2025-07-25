<template>
  <div class="article-page">
    <article v-if="article" class="article-content">
      <header class="article-header">
        <h1 class="article-title">{{ article.title }}</h1>
      </header>
      <div class="article-image-wrapper">
        <NuxtImg
          :src="article.image"
          :alt="article.title"
          class="article-image"
          width="1216"
          height="700"
          loading="eager"
        />
      </div>
      <div class="article-text">
        <p class="about">About</p>
        <p class="article-description">{{ article.description }}</p>
      </div>
    </article>

  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/features/article/api/types.js'
import { useArticles } from '~/features/article/api/useArticles'

const route = useRoute()

const {
  data: article,
  pending,
  error,
  refresh
} = await useAsyncData<Article>(
  `article-${route.params.id}`,
  async () => {
    try {
      const { fetchArticleById } = useArticles()
      return await fetchArticleById(route.params.id as string)
    } catch (err) {
      console.error('Failed to load article')
      throw err
    }
  },
  {
    watch: [
      () => route.params.id
    ]
  }
)
</script>

<style lang="scss" scoped>
.article-page {
  max-width: 1247px;
  margin: 0 auto;
  padding: 0 15px 80px;
}

.article-image {
  display: block;
}

.about {
  font-size: 16px;
  margin-bottom: 32px;
}

.article-text {
  max-width: 695px;
  display: flex;
  flex-direction: column;
  color: var(--color_text);
}

.article-description {
  font-size: 36px;
  line-height: 124%;
}
</style>