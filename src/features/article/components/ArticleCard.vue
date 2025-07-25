<template>
  <article class="article-card" @click="handleClick" data-testid="article-card">
    <div class="image-container">
      <NuxtImg :src="article.image" :alt="article.title" width="280" height="210" loading="lazy"
        class="article-image" />
    </div>

    <div class="content">
      <p class="preview">
        {{ article.preview }}
      </p>
      <div class="actions">
        <button class="read-more">
          Read more
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Article } from '../api/types'

const props = defineProps<{
  article: Article
  variant?: 'default' | 'compact'
}>()

const emit = defineEmits<{
  (e: 'click', id: string): void
}>()

const handleClick = () => {
  emit('click', props.article.id)
}
</script>

<style lang="scss" scoped>
.article-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  transform: translateY(20px);
  background: transparent;
  transition: transform 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(0px);
  }
}

.image-container {
  height: 210px;
  position: relative;
  overflow: hidden;
}

.article-image {
  margin-bottom: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.actions {
  margin-top: 12px;
}

.preview {
  padding-right: 8px;
  line-height: 120%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.read-more {
  position: absolute;
  left: 0;
  opacity: 0;
  visibility: hidden;
  line-height: 120%;
  font-size: 20px;
  font-family: 'TTCommons';
  color: var(--color_second);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
}

.article-card:hover .read-more {
  opacity: 1;
  visibility: visible;
}
</style>