<template>
  <main @mousemove="toggleFunc" class="pb-20 lg:mt-12 sm:mt-10 mt-9 w-full overflow-y-auto max-h-screen"
    @scroll="scrolling">
    <nav class="sticky top-1 py-3 z-10 bg-white shadow-lg">
      <form class="sm:mx-10 mx-2">
        <div class="flex">
          <button @click="toggle.selectCategory = !toggle.selectCategory"
            class="flex-shrink-0 z-10 sm:inline-flex hidden items-center text-sm font-medium text-center border border-gray-300 rounded-l-lg hover:bg-gray-200 outline-none"
            type="button">
            <select class="outline-none rounded-l-lg text-white bg-[#E72463] py-2 x-4">
              <option value="1">title</option>
              <option value="2">price</option>
              <option value="3">description</option>
            </select>
          </button>
          <p @click="toggle.toggleFilter = !toggle.toggleFilter"
            class="flex-shrink-0 z-10 inline-flex sm:hidden items-center py-1 px-4 text-sm font-medium text-center border border-gray-300 rounded-l-lg hover:bg-gray-200 outline-none"><i
              class='bx bx-filter-alt'></i>Filter</p>
          <input type="search" id="search-dropdown"
            class="block sm:p-2 p-1 w-full z-20 text-sm rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300"
            placeholder="Search..." required>
          <button type="submit"
            class="absolute sm:top-[1.5px] top-[1px] z-20 right-0 sm:p-2 py-1 px-2 text-sm font-medium text-white bg-[#E72463] rounded-r-lg">
            <i class='bx bx-search'></i>
          </button>
        </div>
      </form>
    </nav>
    <section v-show="store.state.load == false">
      <div>
        <div class="wrapper lg:mx-10 mt-5">
          <div class="cards mx-auto" v-for="i in store.List[0]" :key="i.id">
            <div class="shadow-lg mb-4 hover:shadow-gray-300 pb-2 bg-white rounded text-center font-bold mx-1">
              <img :src="`https://picsum.photos/500/500?random=${i.id}}`" class="card-img rounded-t-md mx-auto max-h-52"
                alt="img">
              <hr class="border-gray-100">
              <h1 class="mx-auto w-[80%] text-center truncate">{{ i.category }}</h1>
              <h1 class="w-[80%] mx-auto text-start text-gray-400 text-xs truncate">{{ i.title }}</h1>
              <p class="font-bold flex w-[80%] justify-between mx-auto items-center"><span
                  class="font-medium">80.000</span><i class='bx bxs-cart-add cursor-pointer text-2xl text-red-500'></i>
              </p>
              <router-link :to="`/products/${i.id}/${i.title.split(' ').join('_')}`">
                <button
                  class="mt-2 border-2 border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] w-[80%] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
                  Sotib olish
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div v-show="store.state.load == true">
        <div class="wrapper lg:mx-10 mt-5">
          <div class="cards mx-auto" v-for="el in 12" :key="el">
            <div class="shadow-lg mb-4 hover:shadow-gray-300 rounded text-center font-bold mx-1">
              <img src="../assets/placeholder-image.png" class="activity card-img rounded-t-md mx-auto max-h-52"
                alt="img">
              <hr class="border-gray-100">
              <div class="activity text-white pb-2 rounded-b-md">
                <h1 class="text-center font-bold text-gray-400 truncate">category...
                </h1>
                <h1 class="w-[80%] mx-auto text-start text-xs truncate">describe...</h1>
                <p class="font-bold flex w-[80%] justify-between mx-auto items-center"><span
                    class="font-medium">price...</span><i
                    class='bx bxs-cart-add cursor-pointer text-2xl text-red-500'></i>
                </p>
                <button
                  class="activity mt-2 border-2 border-gray-500 rounded-lg px-2 py-1 text-sm text-gray-400 w-[80%] cursor-pointer">
                  Sotib olish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useContactStore } from '../stores/products'
import { useHeader } from '../stores/HeaderNav'
const toggle = useHeader()

const store = useContactStore()

const price = reactive({
  end: 100,
  select: 10,
})

function toggleFunc(e) {
  if (e.target.value == '') {
    return;
  }
  toggle.toggleFilter = false;
  toggle.selectCategory = false;
}

// const bottom = ref(false)
// const page = ref(1)

// const scrolling = (e) => {
//   const clientHeight = e.target.clientHeight
//   const scrollHeight = e.target.scrollHeight
//   const scrollTop = e.target.scrollTop
//   console.log(clientHeight, scrollHeight, scrollTop)

//   if (scrollTop + clientHeight >= scrollHeight) {
//     store.state.load = true;
//     console.log('End!')
//     setTimeout(() => {
//       store.getProducts()
//     }, 5000)
//     bottom.value = true
//     page.value += 1
//     store.state.load = true
//   } else {
//     bottom.value = false
//   }
// }

onMounted(() => {
  store.getProducts()
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 5fr));
}

.card-img {
  width: 100% !important;
}

.cards {
  max-width: 180px;
}

@media (max-width:760px) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 5fr));
  }
}

@media (max-width: 360px) {
  .cards {
    margin: 5px auto;
  }
}

.activity {
  background-size: 500% 500%;
  background-image: linear-gradient(-45deg, #001f3f 0%, #001f3f95 25%, #001f3f 51%, #001f3f6b 100%);
  -webkit-animation: AnimateBG 2s ease infinite;
  animation: AnimateBG 2s ease-in-out infinite;
}

@-webkit-keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>