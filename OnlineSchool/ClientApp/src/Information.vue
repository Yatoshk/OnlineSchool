<script setup lang="ts">
import Menu from "./components/Menu.vue";
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'


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

const goToClasses = (index: number) => {
  router.push({
    path: '/classes',
    query: { openAccordion: index }
  })
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
    title: 'Основные сведения',
    isOpen: false,
    content: `
      <p>Полное наименование организации: Индивидуальный предприниматель Нафина Гузялия Альфритовна
      <br>ИНН 732712462945, ОГРНИП 323730000023040
      <br>Сокращенное наименование организации: ИП Нафина Г.А.</p>
      
      <p>Дата создания организации: 18.04.2023 г.</p>
      
      <p>Юридический адрес: 432030, г. Ульяновск, ул. Ипподромная, 4Б-462</p>
      
      <p>Организация не имеет представительств и филиалов, в том числе находящихся <br>за пределами Российской Федерации.</p>
      <p>Место осуществления образовательной деятельности: <br>г. Ульяновск, ул. Ипподромная, 4Б-462</p>
      <p>Режим работы: понедельник - суббота 8.00-17.00 мск
      <br>Воскресенье - выходной</p>
      
      <p>Телефон: +7 (927) 100-48-95</p>
      
      <p>Адрес электронной почты
      <br>rksh_online@inbox.ru</p>
      
      <p>Адрес официального сайта: ркшнафина.рф</p>
    `
  },
  {
    title: 'Структура и органы управления образовательной организацией',
    isOpen: false,
    type: 'structure'
  },
  {
    title: 'Документы',
    isOpen: false,
    type: 'documents'
  },
  {
    title: 'Образование',
    isOpen: false,
    type: 'education'
  },
  {
    title: 'Руководство',
    isOpen: false,
    content: `
      
      <h3>Администрация:</h3>
      
      <p>Руководитель — Нафина Гузялия Альфритовна <br>
      Телефон: +7 (927) 100-48-95 <br>
      Адрес электронной почты: rksh_online@inbox.ru</p>
      
      <p>Администратор — Чугунова Елена Александровна <br>
      Телефон: +7 (927) 100-48-95 <br>
      Адрес электронной почты: rksh_online@inbox.ru</p>
      
      <p>Заместитель руководителя по финансовым вопросам - Тесленко Марина Алексеевна <br>
      Телефон: +7 (927) 100-48-95 <br>
      Адрес электронной почты: rksh_online@inbox.ru</p>
    `
  },
  {
    title: 'Педагогический состав',
    isOpen: false,
    type: 'teachers'
  },
  {
    title: 'Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда',
    isOpen: false,
    content: `
      <h3>Сведения об электронных образовательных ресурсах, к которым <br>
       обеспечивается доступ обучающихся</h3>
       
      <p>В образовательной организации созданы условия для функционирования  <br>
      электронной информационной образовательной среды, в том числе, наличие   <br>
      оборудование и программного обеспечения для дистанционного обучения. <br>
      Дистанционное обучение реализуется на платформе «Контур Толк», размещенной <br>
      по адресу: https://kontur.ru/</p>
      
      <p>Педагогами используются следующие средства обучения:</p>
      <ul>
        <li>ноутбуки и другие портативные персональные компьютеры</li> 
        <li>учебные наглядные пособия</li> 
        <li>интерактивные пособия</li> 
        <li>онлайн доски</li> 
        <li>видео-, аудио-материалы</li> 
      </ul>
      
      <h3>Доступная среда </h3>
      
      <p>Реализация образовательных программ в помещениях образовательной<br>
      организации не предусмотрена, вся образовательная деятельность осуществляется   <br>
      с использованием дистанционных образовательных технологий.<br>
      Доступ к информационным системам и электронным образовательным ресурсам<br>
      инвалидов и лиц с ограниченными возможностями здоровья осуществляется на <br>
      общих основаниях.</p>
    `
  },
  {
    title: 'Платные образовательные услуги',
    isOpen: false,
    type: 'paid-services'
  },
  {
    title: 'Финансово-хозяйственная деятельность',
    isOpen: false,
    content: `
      <p>Финансирование образовательной деятельности осуществляется по договорам об  <br>
      оказании платных образовательных услуг за счет средств физических и   <br>
      юридических лиц. <br>
      Финансирование образовательной деятельности за счет бюджетных ассигнований <br>
      федерального бюджета, бюджетов субъектов Российской Федерации, местных <br>
      бюджетов не предусмотрено.</p>
    `
  },
  {
    title: 'Вакантные места для приема (перевода) обучающихся',
    isOpen: false,
    content: `
      <p>Образовательная организация ведет прием обучающихся по договору публичной  <br>
      оферты без ограничений.<br>
      Специальные квоты не установлены. </p>
      
      <p>Дополнительную информацию о возможности для приема (перевода) по <br>
      дополнительным образовательным программам можно получить по электронной <br>
      почте: rksh_online@inbox.ru</p>
    `
  },
  {
    title: 'Стипендии и меры поддержки обучающихся',
    isOpen: false,
    content: `
      <p>Стипендии и иные виды материальной поддержки, общежития, организация<br>
      питания и трудоустройство обучающихся не предусмотрены. </p>
    `
  },
  {
    title: 'Международное сотрудничество',
    isOpen: false,
    content: `
      <h3>Заключенные и планируемые к заключению договора с <br>
      иностранными/международными организациями по вопросам<br>
      образования.</h3>
      <p>Заключенных и планируемых к заключению договоров с иностранными<br>
      организациями по вопросам образования и науки – <b>нет.</b><br>
      Международной аккредитации образовательных программ – <b>нет.</b> </p>
    `
  }
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

    <div class="content">
      <div class="content-column">
        <ol class="document-list">
          <li
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
                <!-- Специальные блоки для типов с документами -->
                <div v-if="item.type === 'structure'" class="documents-content">
                  <p class="document-link" data-file="Struct.pdf">Орг. структура</p>
                </div>

                <div v-else-if="item.type === 'documents'" class="documents-content">
                  <h3>Правоустанавливающие документы</h3>
                  <p class="document-link" data-file="3.1.pdf">Свидетельство о постановке на учет российской организации в налоговом органе</p>
                  <p class="document-link" data-file="3.2.pdf">Выписка из ЕГРИП</p>

                  <h3>Локальные нормативные акты</h3>
                  <p class="document-link" data-file="3.3.pdf">Правила приема, перевода, отчисления и восстановления обучающихся</p>

                  <p class="document-link" data-file="3.4.pdf">Положение о текущей, промежуточной и итоговой аттестации, выдаче документов о<br>
                    прохождении программы</p>

                  <p class="document-link" data-file="3.5.pdf">Правила внутреннего распорядка обучающегося</p>
                  <p class="document-link" data-file="3.6.pdf">Правила внутреннего трудового распорядка</p>
                  <p class="document-link" data-file="3.7.pdf">Положение о режиме занятий</p>

                  <p class="document-link" data-file="3.8.pdf">Правила ведения учета и осуществления хранения результатов образовательного<br>
                    процесса и внутреннего документооборота на бумажном и электронно-цифровом<br>
                    носителе при реализации образовательных программ или их частей с<br>
                    применением электронного обучения, дистанционных образовательных<br>
                    технологий</p>

                  <p class="document-link" data-file="3.9.pdf">Политика защиты и обработки персональных данных</p>
                  <p class="document-link" data-file="3.10.pdf">Положение об электронном журнале успеваемости</p>
                  <p class="document-link" data-file="3.11.pdf">Положение об электронной информационно-образовательной среде</p>
                  <p class="document-link" data-file="3.12.pdf">Шаблон согласия на обработку персональных данных обучающихся</p>
                  <p class="document-link" data-file="3.13.pdf">Шаблон согласия на обработку персональных данных работника</p>
                  <p class="document-link" data-file="3.14.pdf">Шаблон отзыва на обработку персональных данных</p>
                  <p class="document-link" data-file="3.15.pdf">Положение о работе с персональными данными работников</p>
                  <p class="document-link" data-file="3.16.pdf">Положение о работе с персональными данными клиентов и контрагентов</p>

                  <p class="document-link" data-file="3.17.pdf">Правила рассмотрения запросов субъектов персональных данных или их<br>
                    представителей</p>

                  <p class="document-link" data-file="3.18.pdf">Согласие на обработку персональных данных родителя и обучающегося</p>
                  <p class="document-link" data-file="3.19.pdf">Шаблон Заявление о присоединении к публичной оферте</p>
                  <p class="document-link" data-file="3.20.pdf">Шаблон Заявление о расторжении договора и возврате денежных средств</p>
                  <p class="document-link" data-file="3.21.pdf">Шаблон Форма Уведомления об отзыве Оферты</p>
                  
                  <p>Отчет о результатах самообследования – не проводилось</p>

                  <p>Предписания органов, осуществляющих государственный контроль (надзор) в<br>
                    сфере образования, отчеты об исполнении таких предписаний (до подтверждения<br>
                    органом, осуществляющим государственный контроль (надзор) в сфере<br>
                    образования, исполнения предписания или признания его недействительным в <br>
                    установленном законом порядке) (при наличии) – нет</p>
                </div>

                <div v-else-if="item.type === 'education'" class="documents-content">
                  <p>ИП Нафина Гузялия Альфритовна ведет образовательную деятельность на <br>
                    основании лицензии на осуществление образовательной деятельности <br>
                    дополнительного образования для детей и взрослых, выданной министерством <br>
                    просвещения и воспитания Ульяновской области</p>

                  <p class="document-link" @click="goToLink('https://islod.obrnadzor.gov.ru/rlic/details/00261bcf-ee09-161b-e0bb-b0dc8dff0f30/')">Выписка из реестра лицензий на осуществление образовательной деятельности*</p>

                  <p>*С 1 января 2021 года, в связи с изменениями в <span class="document-link" @click="goToLink('https://www.consultant.ru/document/cons_doc_LAW_341760/b5315c892df7002ac987a311b4a242874fdcf420/?ysclid=m5195yf6sr683845736')">законодательстве об образовании</span>, <br>
                    лицензии на осуществление образовательной деятельности на бланках не  <br>
                    выдаются. Наличие образовательной лицензии у организации подтверждается <br>
                    выпиской из <span class="document-link" @click="goToLink('https://islod.obrnadzor.gov.ru/rlic/details/00261bcf-ee09-161b-e0bb-b0dc8dff0f30/')">федерального реестра</span> лицензий</p>

                  <p>Дополнительное образование детей и взрослых</p>

                  <p>Дополнительное общеобразовательное общеразвивающая программа социально-
                    <br>гуманиторной направленности "Подготовка детей к школе"</p>

                  <h3>Сведения об образовательных программах</h3>

                  <!--<p class="document-link" data-file="4.4.pdf">О реализуемых образовательных программах</p>-->
                  
                  <p class="document-link" @click = "goToClasses(0)">Дошкольники</p>
                  <p class="document-link" @click = "goToClasses(1)">1 класс</p>
                  <p class="document-link" @click = "goToClasses(2)">2 класс</p>
                  <p class="document-link" @click = "goToClasses(3)">3 класс</p>
                  <p class="document-link" @click = "goToClasses(4)">4 класс</p>
                  <p class="document-link" @click = "goToClasses(5)">5 класс</p>
                  <p class="document-link" @click = "goToClasses(6)">6 класс</p>
                  <p class="document-link" @click = "goToClasses(7)">7 класс</p>
                  <p class="document-link" @click = "goToClasses(8)">Церковнославянский язык</p>
                  
                  <p>Форма обучения - дистанционная</p>
                  <p class="document-link" data-file="4.5.pdf">О языках образования</p>
                </div>

                <div v-else-if="item.type === 'teachers'" class="documents-content">
                  <p>Образовательный процесс реализуется педагогическими работниками,  <br>
                    соответствующими требованиям законодательства в части квалификации, стажа  <br>
                    работы и уровня образования, и не имеющими ограничений для занятия <br>
                    педагогической деятельностью.</p>

                  <p class="document-link" data-file="PedSostav.pdf">Педагогический состав</p>
                </div>

                <div v-else-if="item.type === 'paid-services'" class="documents-content">
                  <p class="document-link" data-file="RegulationsOnTheProcedure.pdf">Положение о порядке оказания платных образовательных услуг</p>
                  <p class="document-link" data-file="SampleContract.pdf">Образец договора об оказании платных образовательных услуг средствами <br>
                    материнского капитала </p>
                  <p class="document-link" data-file="Payment.pdf">Стоимость по образовательным программам</p>

                  <p class="document-link" data-file="PublicOffer.pdf">Публичная оферта</p>
                </div>

                <!-- Обычный контент через v-html -->
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
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

/* Стили для кликабельных документов */
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