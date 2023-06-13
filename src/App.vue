<template>
  <div>
    <header>
      <Header />
    </header>
    <!-- <p class="text-5xl pt-20" @click="toggleDark()">Dark theme: {{ isDark }}</p> -->
    <!-- <div class="h-16"></div> -->
    <div @mousedown="toggleFunc" :class="{'overflow-y-auto max-h-screen': routerUrl != '/products'}">
      <router-view></router-view>
      <Footer v-show="routerUrl != '/products'" />
    </div>
  </div>
</template>
  
<script setup>
import { Footer } from "./components"
// import { useDark, useToggle } from '@vueuse/core'
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { useHeader } from './stores/HeaderNav'
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useHeader()

const routerUrl = ref('/');

watch(
  () => route.fullPath,
  async () => {
    routerUrl.value = route.fullPath
  } 
);


function toggleFunc(e) {
  console.log(e.target.value);
  store.toggleCart = false;
  store.toggleHead = false;
}
</script>