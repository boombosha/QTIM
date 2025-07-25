<template>
  <footer class="site-footer">
    <div class="site-footer__container">
      <p class="site-footer__intro">Is there a project?</p>

      <div class="contact-section">
        <h2 class="contact-section__title">Let's work together</h2>
        <div class="contact-list">
          <div class="contact-card" v-for="contact in contacts" :key="contact.id">
            <p class="contact-card__label">{{ contact.text }}</p>
            <p class="contact-card__info">{{ contact.info }}</p>
            <p v-if="contact.email" class="contact-card__email">{{ contact.email }}</p>
            <a v-if="contact.link" :href="contact.link" class="contact-card__link">
              <div class="contact-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z" stroke="#E2BEFF" stroke-width="1.4"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <nav class="footer-nav">
        <ul class="footer-nav__group">
          <li class="footer-nav__item">
            <a href="https://facebook.com" class="footer-nav__link">Facebook</a>
          </li>
          <li class="footer-nav__item">
            <a href="https://instagram.com" class="footer-nav__link">Instagram</a>
          </li>
          <li class="footer-nav__item">
            <a href="https://telegram.org/" class="footer-nav__link">Telegram</a>
          </li>
        </ul>

        <div class="footer-nav__cta">
          <a href="/" class="footer-nav__cta-link">Go</a>
        </div>

        <ul class="footer-nav__group">
          <li class="footer-nav__item">
            <a href="/" class="footer-nav__link">Behance</a>
          </li>
          <li class="footer-nav__item">
            <a href="/" class="footer-nav__link">Linkedn</a>
          </li>
          <li class="footer-nav__item">
            <a href="/" class="footer-nav__link">Privacy Policy</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
const contacts = [
  {
    id: 1,
    text: "For all questions",
    info: "+7 (920) 278—00—68",
    email: "qtim@agency.com",
  },
  {
    id: 2,
    text: "Office in Russia",
    info: "139 Ruben Station Lake Drew, NM 52678",
    link: "/",
  },
  {
    id: 3,
    text: "Office in Dubai",
    info: "139 Ruben Station Lake Drew, NM 52678",
    link: "/",
  },
];
</script>

<style scoped>
.site-footer {
  margin-top: 140px;
  padding-top: 140px;
  background-color: var(--color_second);
}

.site-footer__container {
  max-width: 1247px;
  margin: 0 auto;
  padding: 0 15px;
}

.site-footer__intro {
  margin-bottom: 56px;
}

.contact-section {
  display: flex;
  justify-content: space-between;
  padding-right: 232px;
  padding-bottom: 148px;
}

.contact-section__title {
  font-size: 112px;
  line-height: 100%;
  font-weight: 400;
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 9px;
  max-width: 464px;
}

.contact-list {
  display: flex;
  flex-direction: column;
  max-width: 152px;
}

.contact-card {
  margin-bottom: 36px;
}

.contact-card__label {
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 400;
  line-height: 120%;
}

.contact-card__info {
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
}

.contact-card__email {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
}

.contact-card__icon {
  background-color: var(--color_text);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  transition: opacity 0.3s ease;
}

.contact-card__icon:hover {
  opacity: 0.8;
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  position: relative;
}

.footer-nav::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  width: 358px;
  height: 179px;
  z-index: 1;
  background-color: var(--color_text);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

.footer-nav__group {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav__item {
  margin-right: 32px;
}

.footer-nav__item:last-child {
  margin-right: 0;
}

.footer-nav__link {
  border-bottom: 1px solid var(--color_text);
  font-family: "TTCommons", sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;
  font-size: 16px;
  line-height: 120%;
}

.footer-nav__link:hover {
  opacity: 0.8;
}

.footer-nav__cta-link {
  font-family: "TTCommons", sans-serif;
  font-weight: 400;
  position: relative;
  color: var(--color_pag);
  z-index: 2;
  transition: opacity 0.3s ease;
  text-decoration: none;
}

.footer-nav__cta-link:hover {
  opacity: 0.8;
}
</style>