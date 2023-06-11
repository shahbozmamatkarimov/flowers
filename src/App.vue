<template>
  <div>
    <header>
      <Header />
    </header>
    <!-- <p class="text-5xl pt-20" @click="toggleDark()">Dark theme: {{ isDark }}</p> -->
    <!-- <div class="h-16"></div> -->
    <div @mousemove="toggleFunc">
      <router-view></router-view>
    </div>
  </div>
</template>
  
<script setup>
// import { useDark, useToggle } from '@vueuse/core'
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { useHeader } from './stores/HeaderNav'
const store = useHeader()

function toggleFunc() {
  store.toggleCart = false;
  store.toggleHead = false;
}
</script>