<script setup lang="ts">
import {ref, onMounted} from "vue";

const isCookieOpen = ref(false)
const Cookie = ref<HTMLElement | null>(null)

// Проверяем, было ли уже показано уведомление
const hasSeenCookie = localStorage.getItem('cookieSeen')

const openDocument = (fileName: string) => {
  const url = `/documents/${fileName}`
  window.open(url, '_blank')
}

const toggleCookie = () => {
  isCookieOpen.value = !isCookieOpen.value
  if (Cookie.value) {
    Cookie.value.classList.toggle('show')
  }
}

// Принимаем куки
const acceptCookies = () => {
  localStorage.setItem('cookieSeen', 'true')
  toggleCookie()
}

// Отклоняем куки
const rejectCookies = () => {
  localStorage.setItem('cookieSeen', 'true')
  toggleCookie()
}

// При монтировании компонента проверяем, нужно ли показать уведомление
onMounted(() => {
  if (!hasSeenCookie) {
    // Небольшая задержка для лучшего UX
    setTimeout(() => {
      isCookieOpen.value = true
      // Небольшая задержка для применения CSS transition
      setTimeout(() => {
        if (Cookie.value) {
          Cookie.value.classList.add('show')
        }
      }, 100)
    }, 1000)
  }
})
</script>

<template>
  <div class="bottom">
    <div :style="{ marginRight: '20vh' }">
      <img src="/logo.svg" alt="логотип" width="220" height="64">
      <p>ИП Нафина Гузялия Альфритовна</p>
      <p>ИНН 732712462945</p>
      <p>ОГРНИП 323730000023040</p>
    </div>
    <div class="bottom_column2">
      <p class="document-item" @click="openDocument('PublicOffer.pdf')">Публичная оферта</p>
      <p class="document-item" @click="openDocument('3.9.pdf')">Политика защиты и обработки персональных данных</p>
      <p class="document-item" @click="openDocument('4.1.pdf')">Лицензия</p>
      <p class="document-item" @click="openDocument('Cookies.pdf')">Политика cookies</p>
      <p class="document-item" @click="toggleCookie">Пользовательское соглашение</p>
    </div>

    <div class="cookie" id="Cookie" ref="Cookie" :class="{ 'show': isCookieOpen }">
      <p :style="{fontWeight: 500, fontSize: '18px', textAlign: 'center'}">Используя наш сайт, вы даете <br>
        <u class="document-item" @click="openDocument('UserAccept.pdf')">пользовательское соглашение</u> на<br>
        использование файлов cookie</p>
      <p :style="{fontWeight: 100, fontSize: '16px'}">Политика конфиденциальности</p>
      <div>
        <button class="cookies_btn" :style="{color: '#002A82', backgroundColor: 'white'}" @click="acceptCookies">Принять</button>
        <button class="cookies_btn" :style="{color: 'white', backgroundColor: '#154AB9'}" @click="rejectCookies">Отклонить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.document-item {
  cursor: pointer;
}

.bottom {
  position: relative
}

.bottom_column2 {
  position: relative;
  display: inline-block;
}

.cookie {
  bottom: 16vh;
  right: 25vh;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 20vw;
  height: 20vh;
  background-color: #002a82;
  border: #002a82 solid 0;
  border-radius: 25px ;
  color: white;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.4s ease;
}
.cookie.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.cookies_btn{
  font-size: 18px;
  border: none;
  border-radius: 15px;
  padding: 5px;
  margin: 10px;
  width: 8vw;
  height: 4vh;
}
</style>