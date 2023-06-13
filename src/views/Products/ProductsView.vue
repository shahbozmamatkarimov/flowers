<template>
  <div>
    <div class="flex">
      <Filter v-show="toggle.toggleFilter" class="sm:hidden block absolute top-12 left-0 z-20"/>
      <Filter class="sm:block hidden sticky lg:top-10 top-8 w-60"/>
      <Products />
    </div>
  </div>
</template>

<script setup>
import { Products, Filter } from '../../components'
import { useHeader } from '../../stores/HeaderNav'
const toggle = useHeader()
</script>

<style scoped></style>