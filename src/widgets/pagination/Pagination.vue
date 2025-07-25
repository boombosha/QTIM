<template>
  <div class="pagination">
    <button
      class="btn pagination__arrow pagination__arrow-prev"
      :class="{ show: currentPage === 1 }"
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
    >
      <svg
        class="icon-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.5 7.5L14.5 12.5L9.5 17.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <button
      class="btn pagination__btn"
      :class="{ active: currentPage === page }"
      v-for="page in visiblePages"
      :key="page"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <button
      class="btn pagination__arrow pagination__arrow-next"
      :class="{ show: currentPage === totalPages }"
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
    >
      <svg
        class="icon-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.5 7.5L14.5 12.5L9.5 17.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()
const emit = defineEmits(['page-change'])

const visiblePages = computed(() => {
  const start = Math.max(1, props.currentPage - 2)
  const end = Math.min(start + 4, props.totalPages)
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('page-change', page)
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination__arrow {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--color_border);
  background: var(--color_white);
  transition: background 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pagination__arrow.show {
  opacity: 0;
  visibility: hidden;
}

.pagination__arrow:hover:not(:disabled) {
  background: var(--color_border);
}

.pagination__arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination__arrow-prev {
  transform: rotate(180deg);
}

.pagination__arrow svg {
  width: 24px;
  height: 24px;
}

.pagination__btn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--color_pag);
  font-size: 16px;
  font-weight: 400;
  line-height: 50%;
  transition:
    color 0.3s ease-in-out,
    background 0.3s ease-in-out;
  border: none;
  cursor: pointer;
}

.pagination__btn:hover {
  background: var(--color_border);
}

.pagination__btn.active {
  background: var(--color_text);
  color: var(--color_white);
}
</style>