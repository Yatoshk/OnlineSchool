<script setup lang="ts">
import Menu from "./components/Menu.vue";
import Bottom from "./components/Bottom.vue";
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Home from "./Home.vue";

interface PriceItem {
  picture: string;
  description: string[];
  price: string;
  clarification?: string;
  isOne: boolean;
}



const cardItems = ref<PriceItem[]> ([
    {
      picture: '/price1.png',
      description: ['Классы: до 4 учеников', 'Учеба: 2 занятия в неделю по 2 урока', 'Утренняя и вечерняя группа'],
      price: '600',
      isOne: true
    },
    {
      picture: '/price2.png',
      description: ['Классы: до 10 учеников', 'Учеба: 5 дней в неделю с домашними заданиями и обратной связью от учителя', '16 уроков в неделю по программе РКШ'],
      price: '9 900 – 16 720',
      clarification: 'Стоимость зависит от класса и количества уроков в учебном месяце.\n' +
          'Цена актуальна на 2025-26 уч.год.',
      isOne: false
    },
    {
      picture: '/price3.png',
      description: ['Классы: до 12 учеников', 'Учеба: 5 дней в неделю с домашними заданиями и обратной связью от учителя', '21 урок в неделю по программе РКШ'],
      price: '18 480 – 42 000',
      clarification: 'Стоимость зависит от класса и количества уроков в учебном месяце.\n' +
          'Цена актуальна на 2025-26 уч.год.',
      isOne: false
    },
    {
      picture: '/price4.png',
      description: ['Классы: до 12 учеников', 'Учеба: 3-4 урока в неделю'],
      price: '360 – 500',
      clarification: 'Стоимость зависит от класса. Цена актуальна на 2025-26 уч.год',
      isOne: true
    },
    {
      picture: '/price5.png',
      description: ['Классы: до 10 учеников', 'Учеба: 1 урок в неделю'],
      price: '600',
      clarification: 'Цена актуальна на 2025-26 уч.год.',
      isOne: true
    },
    {
      picture: '/price6.png',
      description: ['Классы: до 10 учеников', 'Учеба: 1 урок в неделю'],
      price: '600',
      clarification: 'Цена актуальна на 2025-26 уч.год.',
      isOne: true
    },
    {
      picture: '/price7.png',
      description: ['Классы: до 10 учеников', 'Учеба: 1 урок в неделю'],
      price: '600',
      clarification: 'Цена актуальна на 2025-26 уч.год.',
      isOne: true
    },
  ]
) 
</script>

<template>
  <div class="app">
    <Menu></Menu>

    <div class="content">
      <div class="content-column">
        <h1>Основное направление</h1>

        <div class="cards-container">
          <div
              v-for="(item, index) in cardItems.slice(0, 3)"
              :key="index"
              class="card"
          >
            <!-- Левая колонка: картинка -->
            <div class="card-image-container">
              <img :src="item.picture" :alt="'Карточка ' + (index + 1)" class="card-image" >
            </div>

            <!-- Правая колонка: текст и цена -->
            <div class="card-content">
              <ul class="description-list">
                <li v-for="(desc, descIndex) in item.description" :key="descIndex">
                  {{ desc }}
                </li>
              </ul>
              <div class="price-container">
                <div class="price">
                  Цена: <span class="price-value">{{ item.price }} ₽</span><span v-if="item.clarification">*</span><span v-if="item.isOne"> за урок</span>
                </div>
                <div v-if="item.clarification" class="clarification">
                  *{{ item.clarification }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1>Дополнительное образование</h1>

        <div class="cards-container">
          <div
              v-for="(item, index) in cardItems.slice(3, 7)"
              :key="index"
              class="card"
          >
            <!-- Левая колонка: картинка -->
            <div class="card-image-container">
              <img :src="item.picture" :alt="'Карточка ' + (index + 1)" class="card-image" >
            </div>

            <!-- Правая колонка: текст и цена -->
            <div class="card-content">
              <ul class="description-list">
                <li v-for="(desc, descIndex) in item.description" :key="descIndex">
                  {{ desc }}
                </li>
              </ul>
              <div class="price-container">
                <div class="price">
                  Цена: <span class="price-value">{{ item.price }} ₽</span><span v-if="item.clarification">*</span><span v-if="item.isOne"> за урок</span>
                </div>
                <div v-if="item.clarification" class="clarification">
                  *{{ item.clarification }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>В нашей школе также организовано:</h3>
        <div class="container">
          <ul class="info">
            <li><b>Родительский чат</b> с вашим педагогом, в котором вы заблаговременно получаете организационную <br>информацию, напоминания и ответы на вопросы.</li>
            <li><b>Расписания уроков, каникул и праздничных дней</b> составлены на весь учебный год. Вы можете заранее <br>спланировать поездки и отдых.</li>
            <li><b>Комфортная сдача аттестаций</b> со своим учителем прямо во время онлайн-уроков. Прикрепляем детей к<br> аккредитованной школе-партнеру по самой приятной стоимости.</li>
            
            <li>Кроме учебного процесса, мы <b>организовываем детям общение в онлайн-формате</b>: - проводим классные<br>часы, игры, конкурсы, мастер-классы, чаепития и даже концерты и сценические постановки, на которых дети<br>
              могут проявлять свои таланты; - организовываем открытые уроки на духовно-нравственные и патриотические<br> темы.</li>
            <li>У нас организована качественная и своевременная <b>обратная связь с родителями.</b> Вы всегда можете написать <br>на контакты школы, администратор решит все вопросы, а делопроизводитель в установленные сроки<br>
              оформит необходимые документы.</li>
            <li>Каждую четверть Ваш педагог проводит <b>родительское собрание</b>, на котором сообщает успеваемость детей,<br> классную и школьную информацию, отвечает на ваши вопросы.</li>
            <li>В начале, в середине и в конце учебного года руководитель школы проводит общее родительское собрание,<br> на котором также сообщает важную орг.информацию, отвечает на вопросы, берет на заметку Ваши <br>
              пожелания.<br></li>
            
            <li><b>Мы сотрудничаем с юристом,</b> который специализируется в вопросах семейного образования. Один раз в год <br>юрист встречается с нашими родителями и отвечает на насущные вопросы. Каждый месяц юрист отвечает на<br>
              вопросы письменно.</li>
          </ul>
        </div>
      </div>
    </div>

    <Bottom></Bottom>
  </div>
</template>

<style scoped>
h3 {
  font-size: 20px;
  color: #002A82;
}
.info {
  display: flex;
  flex-direction: column;
  color: #002A82;
  font-size: 18px;
  text-align: start;
}
h1 {
  padding: 40px;
  color: #002A82;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100vh;
  align-items: center;
}
.content {
  padding: 20px;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  width: 100vh;
  justify-content: start;
  align-items: center;
}

.card {
  display: flex;
  overflow: hidden;
  background: white;
  justify-content: center;
  align-items: center;
  width: 75vh;
  padding-bottom: 40px;
  border-bottom: 2px solid #f0f0f0;
}
.card-image-container {
  flex: 0 0 50%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  overflow: hidden;
}

.card-image {
  justify-content: center;
  align-items: center;
}
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}

.description-list {
  list-style-type: none;
  padding: 0;
}

.description-list li {
  position: relative;
  padding-left: 22px;
  color: #002A82;
  font-size: 18px;
  line-height: 1.5;
}

.description-list li:before {
  content: "•";
  color: #002A82;
  position: absolute;
  left: 0;
  font-size: 22px;
}


.price {
  font-size: 24px;
  font-weight: 400;
  color: #002A82;
  margin-bottom: 8px;
  margin-left: 10px;
}

.price-value {
  color: #002A82;
  font-size: 24px;
  font-weight: 800;
}

.clarification {
  font-size: 14px;
  color: #002A82;
  font-style: italic;
  line-height: 1.4;
  padding-left: 10px;
}
</style>