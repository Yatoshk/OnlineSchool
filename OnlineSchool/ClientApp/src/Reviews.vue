<script setup lang="ts">
import Menu from "./components/Menu.vue";
import Bottom from "./components/Bottom.vue";
import { ref } from 'vue'

interface VKVideo {
  id: number
  title: string
  vkId: string
  duration: string
}

interface Photo {
  id: number
  filename: string
}

// Видео данные
const playlistVideos = ref<VKVideo[]>([
  // {
  //   id: 1,
  //   title: "Отзыв от Виктории",
  //   vkId: "-204212571_456240066",
  //   duration: "2:23"
  // },
  {
    id: 1,
    title: "Сильные учителя. Живой контакт. Честная поддержка.",
    vkId: "-204212571_456239981",
    duration: "2:46"
  },
  {
    id: 2,
    title: "Отзыв мамы ученика",
    vkId: "-204212571_456239967",
    duration: "0:40"
  },
  {
    id: 3,
    title: "✨ Спасибо, что делитесь с нами самым ценным — своими наблюдениями и отзывами ✨",
    vkId: "-204212571_456239962",
    duration: "3:42"
  },
  {
    id: 4,
    title: "Ученица РКШ Настя и её мама Алла рассказали о своём опыте обучения в Русской Классической Школе.",
    vkId: "-204212571_456239898",
    duration: "4:15"
  },
  {
    id: 5,
    title: "Ученик РКШ Матвей и его мама Людмила поделились рассказом об обучении",
    vkId: "-204212571_456239950",
    duration: "4:12"
  }
])

// Фото данные
const photos = ref<Photo[]>([
  {
    id: 1,
    filename: "review1.jpg",
  },
  {
    id: 2,
    filename: "review2.jpg",
  },
  {
    id: 3,
    filename: "review3.jpg",
  },
  {
    id: 4,
    filename: "review4.jpg",
  },
  {
    id: 5,
    filename: "review5.jpg",
  },
  {
    id: 6,
    filename: "review6.jpg",
  },
  {
    id: 7,
    filename: "review7.jpg",
  },
  {
    id: 8,
    filename: "review8.jpg",
  },
  {
    id: 9,
    filename: "review9.jpg",
  }
])

const currentVideoId = ref<number>(1)
const currentVideoUrl = ref<string>("")
const currentPhotoId = ref<number>(1)
const showPhotoModal = ref<boolean>(false)

// Функции для видео
function getVKVideoUrl(vkId: string): string {
  const [ownerId, videoId] = vkId.split('_')
  return `https://vk.com/video_ext.php?oid=${ownerId}&id=${videoId}&hd=2`
}

function selectVideo(video: VKVideo) {
  currentVideoId.value = video.id
  currentVideoUrl.value = getVKVideoUrl(video.vkId)
}

selectVideo(playlistVideos.value[0])

// Функции для фото
function getPhotoPath(filename: string): string {
  return `/reviews/${filename}`
}

function selectPhoto(photo: Photo) {
  currentPhotoId.value = photo.id
  showPhotoModal.value = true
}

function scrollGallery(offset: number, galleryClass: string) {
  const scrollContainer = document.querySelector(galleryClass)
  if (scrollContainer) {
    scrollContainer.scrollBy({ left: offset, behavior: 'smooth' })
  }
}

function closePhotoModal() {
  showPhotoModal.value = false
}

function getCurrentPhoto() {
  return photos.value.find(photo => photo.id === currentPhotoId.value)
}
</script>

<template>
  <div class="app">
    <Menu></Menu>

    <div class="content">
      <h1>Видео-отзывы</h1>

      <div class="video-section">
        <!-- Основное видео по центру -->
        <div class="main-video-container">
          <div class="main-video-wrapper">
            <iframe
                :src="currentVideoUrl"
                width="100%"
                height="100%"
                frameborder="0"
                allowfullscreen
                allow="autoplay; encrypted-media">
            </iframe>
          </div>
        </div>

        <!-- Прокручиваемый список видео снизу -->
        <div class="playlist-scroll-container">
          <div class="playlist-scroll">
            <div
                v-for="video in playlistVideos"
                :key="video.id"
                class="playlist-item"
                @click="selectVideo(video)"
                :class="{ active: video.id === currentVideoId }">
              <div class="video-info">
                <div class="video-title">{{ video.title }}</div>
                <div class="video-duration">{{ video.duration }}</div>
              </div>
            </div>
          </div>

          <!-- Навигационные стрелки -->
          <button class="scroll-btn scroll-left" @click="scrollGallery(-300, '.playlist-scroll')">
            ‹
          </button>
          <button class="scroll-btn scroll-right" @click="scrollGallery(300, '.playlist-scroll')">
            ›
          </button>
        </div>
      </div>
    </div>

    <h1>Фото-отзывы</h1>

    <div class="photos-section">
      <!-- Основное фото по центру -->
      <div class="main-photo-container">
        <div class="main-photo-wrapper" @click="selectPhoto(photos[0])">
          <img
              :src="getPhotoPath(photos[0]?.filename)"
              class="main-photo"
          />
        </div>
      </div>

      <!-- Прокручиваемый список фото снизу -->
      <div class="photos-scroll-container">
        <div class="photos-scroll">
          <div
              v-for="photo in photos"
              :key="photo.id"
              class="photo-item"
              @click="selectPhoto(photo)"
              :class="{ active: photo.id === currentPhotoId }">
            <div class="photo-thumb">
              <img
                  :src="getPhotoPath(photo.filename)"
                  class="thumb-image"
              />
            </div>
          </div>
        </div>

        <!-- Навигационные стрелки -->
        <button class="scroll-btn scroll-left" @click="scrollGallery(-300, '.photos-scroll')">
          ‹
        </button>
        <button class="scroll-btn scroll-right" @click="scrollGallery(300, '.photos-scroll')">
          ›
        </button>
      </div>
    </div>

    <!-- Модальное окно для просмотра фото -->
    <div v-if="showPhotoModal" class="photo-modal" @click.self="closePhotoModal">
      <div class="modal-content">
        <button class="modal-close" @click="closePhotoModal">×</button>

        <div class="modal-photo">
          <img
              v-if="getCurrentPhoto()"
              :src="getPhotoPath(getCurrentPhoto()!.filename)"
              class="modal-photo-image"
          />
        </div>

        <!-- Миниатюры внизу модального окна -->
        <div class="thumbnails-scroll-container">
          <div class="thumbnails-scroll">
            <div
                v-for="photo in photos"
                :key="photo.id"
                class="thumbnail-item"
                :class="{ active: photo.id === currentPhotoId }"
                @click="currentPhotoId = photo.id">
              <img
                  :src="getPhotoPath(photo.filename)"
                  class="thumbnail-image"
              />
            </div>
          </div>

          <button class="scroll-btn scroll-left" @click="scrollGallery(-200, '.thumbnails-scroll')">
            ‹
          </button>
          <button class="scroll-btn scroll-right" @click="scrollGallery(200, '.thumbnails-scroll')">
            ›
          </button>
        </div>
      </div>
    </div>

    <Bottom></Bottom>
  </div>
</template>

<style scoped>
h1 {
  padding: 40px;
  color: #002A82;
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
}

/* Общие стили для видео и фото секций */
.video-section, .photos-section {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

/* Основное видео по центру */
.main-video-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.main-video-wrapper {
  width: 100%;
  max-width: 1280px;
  height: 720px;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 42, 130, 0.2);
  position: relative;
}

/* Основное фото по центру */
.main-photo-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.main-photo-wrapper {
  width: 100%;
  max-width: 1280px;
  height: 720px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 42, 130, 0.2);
}

.main-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.main-photo-wrapper:hover .main-photo {
  transform: scale(1.05);
}


/* Общие стили для контейнеров прокрутки */
.playlist-scroll-container, .photos-scroll-container {
  width: 100%;
  max-width: 1280px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 40px;
}

.playlist-scroll, .photos-scroll, .thumbnails-scroll {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px 40px;
  scrollbar-width: thin;
  scrollbar-color: #002A82 #f0f0f0;
}

.playlist-scroll::-webkit-scrollbar,
.photos-scroll::-webkit-scrollbar,
.thumbnails-scroll::-webkit-scrollbar {
  height: 8px;
}

.playlist-scroll::-webkit-scrollbar-track,
.photos-scroll::-webkit-scrollbar-track,
.thumbnails-scroll::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.playlist-scroll::-webkit-scrollbar-thumb,
.photos-scroll::-webkit-scrollbar-thumb,
.thumbnails-scroll::-webkit-scrollbar-thumb {
  background: #002A82;
  border-radius: 4px;
}

/* Элементы плейлиста видео */
.playlist-item {
  flex: 0 0 150px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 15px;
  background: #f8faff;
  border: 2px solid #e6eeff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 70px;
}

/* Элементы фото */
.photo-item {
  flex: 0 0 180px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f8faff;
  border: 2px solid #e6eeff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.photo-item:hover, .playlist-item:hover {
  background: #e6eeff;
  border-color: #002A82;
  transform: translateY(-5px);
}

.photo-item.active, .playlist-item.active {
  background: #002A82;
  border-color: #002A82;
}

.photo-item.active .photo-title,
.photo-item.active .photo-date,
.playlist-item.active .video-title,
.playlist-item.active .video-duration {
  color: white;
}

/* Превью фото */
.photo-thumb {
  width: 100%;
  height: 120px;
  overflow: hidden;
}

.thumb-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo-item:hover .thumb-image {
  transform: scale(1.1);
}
 
.video-title {
  font-size: 14px;
  font-weight: 600;
  color: #002A82;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  margin: 0;
}

.video-duration {
  padding: 4px 8px;
  background: rgba(0, 42, 130, 0.1);
  border-radius: 4px;
  align-self: flex-start;
}

/* Кнопки прокрутки */
.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #002A82;
  border-radius: 50%;
  color: #002A82;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 42, 130, 0.2);
}

.scroll-btn:hover {
  background: #002A82;
  color: white;
}

.scroll-left {
  left: 10px;
}

.scroll-right {
  right: 10px;
}

/* Модальное окно для фото */
.photo-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 20px;
  padding: 30px;
  max-width: 1000px;
  width: 100vh;
  height: 70vh;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #002A82;
  color: white;
  border: none;
  font-size: 28px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s;
  z-index: 10;
}

.modal-close:hover {
  background: #001a66;
}

.modal-photo {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  height: 100%;
}

.modal-photo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #f5f5f5;
}

/* Контейнер миниатюр в модальном окне */
.thumbnails-scroll-container {
  position: relative;
  margin-top: 20px;
}

.thumbnails-scroll {
  display: flex;
  gap: 10px;
  padding: 15px 50px;
}

.thumbnail-item {
  flex: 0 0 80px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.thumbnail-item:hover {
  opacity: 0.8;
  transform: translateY(-2px);
}

.thumbnail-item.active {
  opacity: 1;
  border-color: #002A82;
  transform: translateY(-2px);
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Адаптивность */
@media (max-width: 1400px) {
  .main-video-wrapper, .main-photo-wrapper {
    max-width: 1100px;
    height: 620px;
  }
}

@media (max-width: 1200px) {
  .main-video-wrapper, .main-photo-wrapper {
    max-width: 900px;
    height: 506px;
  }

  .playlist-scroll-container, .photos-scroll-container {
    max-width: 900px;
  }
}

@media (max-width: 992px) {
  .main-video-wrapper, .main-photo-wrapper {
    max-width: 700px;
    height: 394px;
  }

  .playlist-scroll-container, .photos-scroll-container {
    max-width: 700px;
  }

  .playlist-item {
    flex: 0 0 180px;
    min-height: 100px;
  }

  .photo-item {
    flex: 0 0 160px;
  }

  .photo-thumb {
    height: 100px;
  }
}

@media (max-width: 768px) {
  .main-video-wrapper, .main-photo-wrapper {
    max-width: 100%;
    height: 300px;
    border-radius: 12px;
  }

  .playlist-scroll-container, .photos-scroll-container {
    max-width: 100%;
  }

  .playlist-scroll, .photos-scroll {
    padding: 15px;
    gap: 15px;
  }

  .playlist-item {
    flex: 0 0 160px;
    min-height: 90px;
  }

  .photo-item {
    flex: 0 0 140px;
  }

  .photo-thumb {
    height: 80px;
  }

  .scroll-btn {
    display: none;
  }

  h1 {
    padding: 30px 20px;
    font-size: 28px;
  }

  .modal-photo-image {
    height: 300px;
  }

  .thumbnails-scroll {
    padding: 15px 20px;
  }
}

@media (max-width: 480px) {
  .main-video-wrapper, .main-photo-wrapper {
    height: 220px;
  }

  .playlist-item {
    flex: 0 0 140px;
    min-height: 80px;
  }

  .photo-item {
    flex: 0 0 120px;
  }

  .photo-thumb {
    height: 70px;
  }

  .photo-title, .video-title {
    font-size: 12px;
  }

  h1 {
    padding: 25px 15px;
    font-size: 24px;
  }

  .modal-photo-image {
    height: 250px;
  }

  .thumbnail-item {
    flex: 0 0 60px;
    height: 45px;
  }
}
</style>