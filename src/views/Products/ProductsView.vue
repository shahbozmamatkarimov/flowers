<template>
  <div>
    <div class="flex">
      <Filter v-show="toggle.toggleFilter" class="sm:hidden block absolute top-12 left-0 z-20"/>
      <Filter class="sm:block hidden sticky lg:top-14 top-8 w-60"/>
      <Products />
      <Modal />
    </div>
  </div>
</template>

<script setup>
import { Products, Filter, Modal } from '../../components'
import { useHeader } from '../../stores/HeaderNav'
const toggle = useHeader()
</script>

<style scoped></style>