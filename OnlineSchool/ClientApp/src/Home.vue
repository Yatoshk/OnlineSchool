<script setup>
import Bottom from './components/Bottom.vue'
import Menu from './components/Menu.vue'

import { ref } from 'vue'

const currentSlide = ref(0)
const slides = ref([
  {
    image: '/slide1.png',
  }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Автопрокрутка
setInterval(nextSlide, 10000)

</script>

<template>
  <div class="app background">
    <Menu></Menu>

    <div class="content">
      <div class="content-column" :style="{marginRight: '15vh'}">
        <p :style="{margin : 0, fontSize: '60px', fontWeight: 600, backgroundColor: '#2E0B98', color: '#FFFFFF', textAlign: 'center', borderRadius: '25px'}">ЛИЦЕНЗИРОВАННАЯ</p>
        <p :style="{margin : 0, fontSize: '80px', fontWeight: 800}">ОНЛАЙН-ШКОЛА</p>
        <p :style="{margin : 0, fontSize: '45px', fontWeight: 200}">ДОПОЛНИТЕЛЬНОГО</p>
        <p :style="{margin : 0, fontSize: '45px', fontWeight: 200, marginBottom: '6vh'}">ОБРАЗОВАНИЯ</p>
        <div :style="{display: 'flex'}">
          <img src="/feather.svg" alt="перо" width="65px" height="65px">
          <div class="content-column" :style="{marginLeft: '1vh'}">
            <p :style="{margin : 0, fontSize: '25px', fontWeight: 200}">Работаем по программе</p>
            <p :style="{margin : 0, fontSize: '25px', fontWeight: 600}">Русская Классическая Школа</p>
          </div>
        </div>
      </div>
      <div class="content-column">
        <div class="slider">
          <div class="slider-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="slide">
              <img :src="slide.image" :alt="slide.title" class="slide-image">
            </div>
          </div>

          <button class="slider-btn prev" @click="prevSlide">‹</button>
          <button class="slider-btn next" @click="nextSlide">›</button>

          <div class="slider-dots">
            <button
                v-for="(_, index) in slides"
                :key="index"
                :class="['dot', { active: currentSlide === index }]"
                @click="goToSlide(index)"
            ></button>
          </div>
        </div>
      </div>
      </div>

    <Bottom></Bottom>
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;
  border-radius: 10px;
}

.slider-wrapper {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}

.slide {
  flex: 0 0 100%;
  min-width: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 30px;
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s ease;
}

.dot.active {
  background: white;
}
</style>