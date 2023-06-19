import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeader = defineStore('toggleHead', () => {
  const toggleHead = ref(false);
  const toggleFilter = ref(false);
  const toggleCart = ref(false);
  const selectCategory = ref(false);
  const imageModal = ref(false);

  const data = reactive({
    image: "",
  })

  return { data, toggleHead, imageModal, toggleFilter, toggleCart, selectCategory };
})