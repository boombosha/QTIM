<template>
  <button class="language">
    <NuxtImg src="/img/eng.png" alt="Eng" title="English" />
  </button>
</template>

<style lang="scss" scoped>
.language {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: #fff;
  align-items: center;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
}
</style>