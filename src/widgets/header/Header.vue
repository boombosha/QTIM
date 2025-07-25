<template>
  <header class="header">
    <HeaderLogo />
    <nav class="header__nav">
      <NuxtLink href="/works" class="header__nav__link">Works</NuxtLink>
      <NuxtLink href="/about" class="header__nav__link">About</NuxtLink>
      <div class="header__buttons">
        <HeaderLang />
        <HeaderButton>Let's work</HeaderButton>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 40px 34px;
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 120px;

  &__nav {
    display: flex;
    gap: 58px;
    align-items: center;
    color: #101010;
    font-size: 20px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}

.header__nav__link {
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease;
  }
}
</style>