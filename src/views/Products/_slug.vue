<template>
  <div class="flex flex-col justify-center items-center min-h-screen px-5">
    <div class="h-20"></div>
    <div class="flex">
      <div
        class="overflow-y-auto rounded-lg p-5 lg:pb-5 pb-52 max-h-screen lg:flex justify-between bg-white mx-auto lg:w-[70%] sm:w-1/2"
      >
        <div
          class="mx-auto cursor-pointer md:w-[250px] w-[250px] min-h-[300px] md:min-h-[350px] relative"
        >
          <img
            :src="store.List1?.image"
            alt="img"
            class="card-img md:min-w-[250px] p-5 min-w-[250px] min-h-[300px] md:min-h-[350px] bg-white"
          />
        </div>
        <div class="bg-white px-5 py-2 border rounded shadow-lg">
          <div>
            <h1 class="text-lg truncate">
              <strong>category:</strong><br />
              {{ store.List1?.category }}
            </h1>
          </div>
          <div class="border-gray-500">
            <h2 class="title text-md">
              <strong>title:</strong><br />
              {{ store.List1?.title }}
            </h2>
            <h2 class="text-md">
              <strong>description:</strong> <br />
              {{ store.List1?.description }}
            </h2>
            <p>
              <strong>Price: </strong>
              <strong class="text-md text-orange-500 my-5 inline-block text-lg"
                >{{ store.List1?.price }} so'm</strong
              >
            </p>
            <div class="flex justify-around items-center text-2xl">
              <p>
                <i class="bx bx-dislike"></i><i v-if="like" class="bx bxs-dislike"></i
                >{{ store.List1?.rating?.rate }}
              </p>
              <p>
                <i class="bx bx-like float-right pt-1"></i
                ><i v-if="like" class="bx bxs-like float-right pt-1"></i
                >{{ store.List1?.rating?.count }}
              </p>
            </div>
            <button
              @click="toggle = !toggle"
              class="float-right my-5 px-5 py-2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm .5 text-center mr-2 mb-2"
            >
              Sotib olish
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      :class="{ hidden: toggle }"
      aria-hidden="true"
      class="fixed flex md:justify-center md:items-center top-0 min-h-screen bg-[#80808079] left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative pt-32 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Sotib olish</h3>
            <button
              type="button"
              @click="toggle = !toggle"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <i class="bx bx-x"></i>
            </button>
          </div>
          <!-- Modal body -->
          <div
            class="flex flex-col  bg-gray-400 rounded-b-lg border justify-center items-center w-full mx-auto text-xl p-20"
          >
            <div class="flex gap-1">
              <i class="bx bx-minus cursor-pointer p-1 bg-white rounded-full"></i>
              <input
                type="number"
                minlength="1"
                maxlength="4"
                min="1"
                value="1"
                class="w-16 px-2 rounded-full focus:outline-none"
              />
              <i class="bx bx-plus cursor-pointer p-1 bg-white rounded-full"></i>
            </div>
            <div class="sm:text-lg text-sm">Narx: <span>1000</span> so'm</div>
            <div class="flex flex-wrap justify-center items-center">
              <button
                class="my-3 px-5 py-2 text-white bg-gradient-to-r from-[#e0079893] via-[#e00798b1] to-[#e00798] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#e00798] dark:focus:ring-[#e00798] font-medium rounded-lg text-sm .5 text-center mr-2 mb-2"
              >
                Savatga qo'shish
              </button>
              <button
                class="my-3 px-5 py-2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm .5 text-center mr-2 mb-2"
              >
                Hozir sotib olish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal end -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useContactStore } from '../../stores/products'

const route = useRoute()
const id = route.params.id
const store = useContactStore()
const toggle = ref(true)

onMounted(() => {
  store.getOneProduct(id)
})
</script>

<style lang="scss">
.card-img {
  // transform: scale(0.5);
  height: 350px;
  object-fit: contain;
}
</style>