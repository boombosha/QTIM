<template>
  <div class="Header">
    <HeaderLogo />
    <div class="Header__nav-block">
      <nav>
        <ul class="Header__nav">
          <li class="Header__link-item">
            <NuxtLink class="Header__link" to="/works">Works</NuxtLink>
          </li>
          <li class="Header__link-item">
            <NuxtLink class="Header__link" to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="Header__language-cta-group">
        <HeaderLang />
        <div class="Header__cta">
          <NuxtLink class="Header__cta-link" to="/">Let's work</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 40px 34px;
}

.Header__logo {
  width: 84px;
  height: 25px;
}

.Header__nav-block {
  display: flex;
  align-items: center;
}

.Header__nav {
  display: flex;
  align-items: center;
  margin-right: 91px;
}

.Header__link-item {
  margin-right: 58px;
}

.Header__link-item:last-child {
  margin-right: 0;
}

.Header__link {
  font-family: "TTCommons", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #101010;
  transition: all 0.3s ease;
  user-select: none;
}

.Header__link:hover {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.Header__language-cta-group {
  display: flex;
  align-items: center;
}

.Header__language {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 16px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
}

.Header__cta-link {
  font-family: "TTCommons", sans-serif;
  font-weight: 400;
  font-size: 20px;
  padding: 16px 32px;
  background-color: #101010;
  color: #fff;
  border-radius: 999px;
  transition: all 0.3s ease;
  user-select: none;
}

.Header__cta-link:hover {
  opacity: 0.8;
  transition: all 0.3s ease;
}
</style>