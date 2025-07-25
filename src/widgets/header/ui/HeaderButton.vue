<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  font-family: 'TTCommons';
  font-weight: 400;
  font-size: 20px;
  padding: 16px 32px;
  background-color: var(--color_text);
  color: var(--color_white);
  border-radius: 999px;
  transition: all 0.3s ease;
  user-select: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease;
  }
}
</style>