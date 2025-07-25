<template>
  <div class="loader-container">
    <div class="loader-spinner"></div>
    <span class="loader-text" v-if="$slots.default || text">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  text?: string
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'currentColor'
})
</script>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.loader-spinner {
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: v-bind(color);
  animation: spin 1s ease-in-out infinite;
}

.loader-spinner {
  width: 1.5rem;
  height: 1.5rem;
}

.size-sm .loader-spinner {
  width: 1rem;
  height: 1rem;
  border-width: 1.5px;
}

.size-lg .loader-spinner {
  width: 2rem;
  height: 2rem;
  border-width: 3px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader-text {
  font-size: 0.875rem;
  color: v-bind(color);
  text-align: center;
}
</style>