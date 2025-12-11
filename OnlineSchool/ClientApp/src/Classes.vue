<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Menu from "./components/Menu.vue";


const route = useRoute()
const router = useRouter()
const goToLink = (link: string) => {
  window.open(`${link}`, '_blank')
}
const goToNone = () => {
  const baseUrl = window.location.origin
  window.open(`${baseUrl}/none`, '_blank')
}
const openDocument = (fileName: string) => {
  const url = `/documents/${fileName}`
  window.open(url, '_blank')
}

const openAccordion = (index: number) => {
  accordionItems.value.forEach((item, i) => {
    item.isOpen = i === index
  })
}

onMounted(() => {
  const openAccordionIndex = route.query.openAccordion

  if (openAccordionIndex) {
    const index = typeof openAccordionIndex === 'string'
        ? parseInt(openAccordionIndex)
        : parseInt(openAccordionIndex[0])

    if (!isNaN(index) && index >= 0 && index < accordionItems.value.length) {
      openAccordion(index)
    }
  }
})

interface AccordionItem {
  title: string;
  isOpen: boolean;
  content?: string;
  subItems?: string[];
  type?: string;
}
const accordionItems = ref<AccordionItem[]>([
  {
    title: 'Дошкольники',
    isOpen: false,
    type: 'preschoolers'
  },
  {
    title: '1 класс',
    isOpen: false,
    type: '1_class'
  },
  {
    title: '2 класс',
    isOpen: false,
    type: '2_class'
  },
  {
    title: '3 класс',
    isOpen: false,
    type: '3_class'
  },
  {
    title: '4 класс',
    isOpen: false,
    type: '4_class'
  },
  {
    title: '5 класс',
    isOpen: false,
    type: '5_class'
  },
  {
    title: '6 класс',
    isOpen: false,
    type: '6_class'
  },
  {
    title: '7 класс',
    isOpen: false,
    type: '7_class'
  },
  {
    title: 'Церковнославянский язык',
    isOpen: false,
    type: 'church_slavonic_language'
  },
  ])

// Функция для открытия/закрытия аккордеона
const toggleAccordion = (index: number) => {
  accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen
}

// Обработка кликов по документам после рендеринга
const handleDocumentClick = (event: Event) => {
  const target = event.target as HTMLElement
  if (target.classList.contains('document-link')) {
    const fileName = target.getAttribute('data-file')
    if (fileName) {
      openDocument(fileName)
    }
  }
}

// Добавляем обработчик кликов после монтирования компонента
onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})
</script>

<template>
  <div class="app">
    <Menu></Menu>

    <div class="content-classes">
      <div class="content-column">
        <ol class="document-list">
          <ol
              v-for="(item, index) in accordionItems"
              :key="index"
              class="document-list-item"
              :class="{ 'active': item.isOpen }"
          >
            <div class="accordion-header" @click="toggleAccordion(index)">
              <span>{{ item.title }}</span>
              <span class="accordion-icon">{{ item.isOpen ? '−' : '+' }}</span>
            </div>
            <div class="accordion-content" v-if="item.isOpen">
              <div class="accordion-inner">
                <div v-if="item.type === 'structure'" class="documents-content">
                  <p class="document-link" data-file="Struct.pdf">Орг. структура</p>
                </div>

                <div v-else-if="item.type === 'preschoolers'" class="documents-content">
                  <p class="document-link" data-file="preschoolers.pdf">Подготовка детей к школе</p>
                </div>
                
                <div v-else-if="item.type === '1_class'" class="documents-content">
                  <p class="document-link" data-file="arifmetica_1.pdf">Арифметика</p>
                  <p class="document-link" data-file="rus_1.pdf">Русский язык</p>
                  <p class="document-link" data-file="reading_1.pdf">Чтение</p>
                  <p class="document-link" data-file="history_1.pdf">История</p>
                  <p class="document-link" data-file="english_1.pdf">Английский язык</p>
                </div>

                <div v-else-if="item.type === '2_class'" class="documents-content">
                  <p class="document-link" data-file="history_2.pdf">История</p>
                  <p class="document-link" data-file="english_2.pdf">Английский язык</p>
                </div>

                <div v-else-if="item.type === '3_class'" class="documents-content">
                  <p class="document-link" data-file="history_3.pdf">История</p>
                  <p class="document-link" data-file="english_3.pdf">Английский язык</p>
                </div>
                
                <div v-else-if="item.type === '4_class'" class="documents-content">
                  <p class="document-link" data-file="arifmetica_4.pdf">Арифметика</p>
                  <p class="document-link" data-file="rus_4.pdf">Русский язык</p>
                  <p class="document-link" data-file="reading_4.pdf">Чтение</p>
                  <p class="document-link" data-file="history_4.pdf">История</p>
                  <p class="document-link" data-file="english_4.pdf">Английский язык</p>
                </div>

                <div v-else-if="item.type === '5_class'" class="documents-content">
                  <p class="document-link" data-file="math_5.pdf">Математика</p>
                  <p class="document-link" data-file="rus_5.pdf">Русский язык</p>
                  <p class="document-link" data-file="literature_5.pdf">Литература</p>
                  <p class="document-link" data-file="history_5.pdf">История</p>
                  <p class="document-link" data-file="english_5.pdf">Английский язык</p>
                  <p class="document-link" data-file="biology_5.pdf">Биология</p>
                  <p class="document-link" data-file="geography_5.pdf">География</p>
                </div>
                
                <div v-else-if="item.type === '6_class'" class="documents-content">
                  <p class="document-link" data-file="math_6.pdf">Математика</p>
                  <p class="document-link" data-file="rus_6.pdf">Русский язык</p>
                  <p class="document-link" data-file="literature_6.pdf">Литература</p>
                  <p class="document-link" data-file="history_6.pdf">История</p>
                  <p class="document-link" data-file="english_6.pdf">Английский язык</p>
                  <p class="document-link" data-file="biology_6.pdf">Биология</p>
                  <p class="document-link" data-file="geography_6.pdf">География</p>
                </div>

                <div v-else-if="item.type === '7_class'" class="documents-content">
                  <p class="document-link" data-file="math_7.pdf">Математика</p>
                  <p class="document-link" data-file="english_7.pdf">Английский язык</p>
                  <p class="document-link" data-file="phys_7.pdf">Физика</p>
                  <p class="document-link" data-file="geography_7.pdf">География</p>
                </div>

                <div v-else-if="item.type === 'church_slavonic_language'" class="documents-content">
                  <p class="document-link" data-file="csl.pdf">Церковнославянский язык</p>
                </div>
                
                <div v-else-if="item.content" v-html="item.content"></div>

                <div v-else>
                  <p>Контент для {{ item.title }} будет добавлен позже.</p>
                  <ul v-if="item.subItems" class="sub-items">
                    <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                      {{ subItem }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ol>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-classes{
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 8vh;
}
.document-list{
  padding-left: 50px;
  width: 100vh;
  color: #002A82;
  font-size: 30px;
  font-weight: bold;
  overflow: hidden;
  transition: border-color 0.3s ease;
}
.document-list-item{
  padding: 20px;
  border-bottom: #C8DAFF solid 4px;
  list-style-type: none;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  z-index: 2;
}

.accordion-title {
  flex: 1;
  padding-right: 20px;
}

.accordion-icon {
  font-size: 18px;
  font-weight: bold;
  color: #3b82f6;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.accordion-content {
  background-color: white;
  overflow: hidden;
  transition: height 0.3s ease;
  position: relative;
  z-index: 1;
  font-weight: 200;
  font-size: 18px;
}

.accordion-inner {
  padding: 10px;
}

.sub-items {
  list-style: disc;
  margin-left: 20px;
  color: #4b5563;
}

.sub-items li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.accordion-header {
  min-height: 54px;
  box-sizing: border-box;
}

.accordion-content {
  will-change: height;
}

.document-link {
  color: #002A82;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.document-link:hover {
  color: #3b82f6;
  text-decoration: none;
}

.documents-content h3 {
  color: #002A82;
  margin: 20px 0 10px 0;
  font-size: 1.2em;
  font-weight: 600;
}

.documents-content h3:first-child {
  margin-top: 0;
}
</style>