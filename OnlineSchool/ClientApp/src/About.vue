<script setup>

import Menu from "./components/Menu.vue";
import Bottom from "./components/Bottom.vue";
</script>

<template>
  <div class="app">
    <Menu></Menu>

    <div class="content">
      <div class="content-column">
        <div class="video-wrapper">
          <iframe
              src="https://vkvideo.ru/video_ext.php?oid=-204212571&id=456239997&hash=969092c9e09e04e7&hd=3"
              width="1280"
              height="720"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              frameborder="0"
              allowfullscreen
              class="video-frame">
          </iframe>
        </div>
      </div>
    </div>

    <ul class="school-description">
      <li>Выбор школы – один из самых важных шагов для любой семьи.</li>
      <li>Каждый родитель хочет видеть, что его ребёнок не просто учится, а растёт, развивается и любит процесс познания.</li>
      <li>В этом видео мы показываем как устроено обучение в нашей школе изнутри:</li>
      <li class="sub-list">
        <ul>
          <li> уроки, на которых ребёнку интересно и понятно;</li>
          <li> педагоги, которые объясняют и поддерживают, а не «гонят программу»;</li>
          <li> внимание к каждому ученику и семье.</li>
        </ul>
      </li>
      <li>Мы верим, что образование должно быть не гонкой за оценками, а системой, которая помогает раскрывать сильные стороны ребёнка и учит мыслить глубоко.</li>
      <li>Посмотрите это видео и почувствуйте атмосферу нашей школы.</li>
      <li>А вы уже определились, какой должна быть школа для вашего ребёнка?</li>
    </ul>
    
    <Bottom></Bottom>
  </div>
</template>

<style scoped>
.video-wrapper {
  width: 1280px;
  height: 720px;
  border-radius: 20px; /* Скругление углов */
  overflow: hidden; /* Важно! Обрезает содержимое по скруглению */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Тень для красоты */
}

.video-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.content {
  padding: 20px;
}

.school-description {
  color: #002A82;
  font-size: 18px;
  line-height: 1.6;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 40px auto;
  padding: 0;
  list-style-type: none;
  text-align: left;
}

.school-description li {
  margin-bottom: 15px;
  padding-left: 20px;
  position: relative;
}

.school-description > li:not(.sub-list)::before {
  content: "•";
  color: #002A82;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 20px;
}

.school-description .sub-list {
  padding-left: 40px;
  margin: 10px 0;
}

.school-description .sub-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.school-description .sub-list li {
  padding-left: 20px;
  margin-bottom: 8px;
  position: relative;
}

.school-description .sub-list li::before {
  content: "—";
  color: #002A82;
  position: relative;
  left: 0;
}
</style>