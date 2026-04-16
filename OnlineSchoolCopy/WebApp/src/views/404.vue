<script setup lang="ts">

import Menu from "@/components/layout/Menu.vue";
import Bottom from "@/components/layout/Bottom.vue";

</script>

<template>
  <div class="app background">
    <Menu></Menu>

    <div class="content">
      <div class="content-column">
        <p :style="{ margin: 0, fontSize: '60px', fontWeight: 600}">Ой! Страница не найдена</p>
        <p :style="{ margin: 0, fontSize: '60px', fontWeight: 600}">Ошибка 404</p>
      </div>
    </div>

    <Bottom></Bottom>
  </div>
</template>

<style scoped>

</style>