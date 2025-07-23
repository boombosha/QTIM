<template>
  <div class="Header">
  <HeaderLogo />
  <div class="Header__nav-block">
    <nav>
      <ul class="Header__nav">
        <li class="Header__link-item">
          <NuxtLink class="Header__link" to="/Works">works</NuxtLink>
        </li>
        <li class="Header__link-item">
          <NuxtLink class="Header__link" to="/About">about</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</div>
</template>

<style scoped>
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
</style>