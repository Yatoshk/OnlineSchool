<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuList = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLElement | null>(null)
const menuIcon = ref<HTMLElement | null>(null)
const isMenuOpen = ref(false)

const goToLink = (link: string) => {
  window.open(`${link}`, '_blank')
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value

  if (menuList.value && menuIcon.value) {
    menuList.value.classList.toggle('show')
  }
}

const goToInformationContacts = () => {
  router.push({
    path: '/information',
    query: { openAccordion: 4 } 
  })
  toggleMenu() 
}

const goTo = (route: string) => {
  router.push(route);
  toggleMenu()
}

const handleClickOutside = (event: MouseEvent) => {
  if (isMenuOpen.value &&
      menuList.value &&
      menuButton.value &&
      !menuList.value.contains(event.target as Node) &&
      !menuButton.value.contains(event.target as Node)) {
    toggleMenu()
  }
}
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    toggleMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>

<template>
  <div :style="{ alignItems: 'center' }">
    <div class="menu">
      <img class="document-item" src="/logo.svg" alt="логотип" width="138" height="40" @click="goTo('/')">
      <div class="nav">
        <p class="document-item" :style="{ margin: '10px' }" @click = "goTo('/prices')">Услуги</p>
        <p class="document-item" :style="{ margin: '10px' }" @click = "goTo('/about')">О нас</p>
        <p class="document-item" :style="{ margin: '10px' }" @click = "goToLink('/reviews')">Отзывы</p>
        <p class="document-item" :style="{ margin: '10px' }" @click = "goToInformationContacts">Контакты</p>
        <p class="document-item" :style="{ margin: '10px', textAlign: 'center' }" @click = "goTo('/information')">Сведения об образовательной<br> организации</p>
      </div>
      <div class="menu-button-container">
        <button class="menu-button" id="menuButton" @click="toggleMenu">
          <span>Меню</span>
          <img src="/menu.svg" alt="меню" class="menu-icon" :class="{ 'rotated': isMenuOpen }">
        </button>

        <ul class="menu-list" id="menuList" :class="{ 'show': isMenuOpen }">
          <li class="menu-list-item">Подготовка к школе</li>
          <li class="menu-list-item">1 - 4 класс</li>
          <li class="menu-list-item">5 - 7 класс</li>
          <li class="menu-list-item">8 класс</li>
          <li class="menu-list-item">Дополнительные предметы</li>
          <li class="menu-list-item" @click = "goTo('/about')">О нас</li>
          <li class="menu-list-item" @click = "goToLink('/reviews')">Отзывы</li>
          <li class="menu-list-item" @click = "goToInformationContacts">Контакты</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.document-item {
  cursor: pointer;
}
.nav {
  justify-content: center;
  align-items: center;
}
.menu {
  position: relative
}

.menu-button-container {
  position: relative;
  display: inline-block;
}

.menu-button {
  display: inline-flex;
  align-items: center;
  gap: 8px; 
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  color: #2E0B98;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-button:hover {
  background-color: #eaeaea;
}

.menu-icon {
  width: 20px;
  height: 20px;
}
.menu-list {
  top: 4vh;
  right: 0;
  justify-content: center;
  position: absolute;
  padding: 0;
  width: 220px;
  height: 354px;
  font-size: 16px; 
  color: #ffffff;
  background: #002A82;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  list-style: none;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.4s ease;
}

.menu-list.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.menu-list-item
{
  cursor: pointer;
  transition: all 0.4s ease;
  padding: 12px;
  text-align: center;
}

.menu-list-item:hover
{
  background-color: #0B3A9D;
  border-radius: 15px;
}
</style>