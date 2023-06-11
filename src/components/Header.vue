<template>
  <header class="fixed w-full z-50 font-bold">
    <nav class="nav bg-[#e80b85] text-lg flex justify-center px-3">
      <div class="flex flex-wrap items-center justify-between w-full max-w-[1700px]">
        <div>
          <router-link class="logo flex justify-center items-center" to="/"><img class="sm:h-10 h-9"
              src="../assets/florago.svg" alt="logo"></router-link>
        </div>
        <div class="hidden w-full lg:flex md:items-center p-1 md:w-auto" id="menu">
          <ul class="pt-4 text-lg text-black md:flex md:justify-between md:pt-0">
            <li>
              <router-link to="/"
                class="md:py-2 md:px-5 hover:bg-[#c619925b5b] rounded-xl active:animate-ping py-2 block hover:text-white">Home</router-link>
            </li>
            <li>
              <router-link to="/products"
                class="md:py-2 md:px-5 hover:bg-[#c619925b] rounded-xl active:animate-ping py-2 block hover:text-white">Products</router-link>
            </li>
            <li>
              <router-link to="/about"
                class="md:py-2 md:px-5 hover:bg-[#c619925b] rounded-xl active:animate-ping py-2 block hover:text-white">About
                us</router-link>
            </li>
            <li>
              <router-link to="/contact"
                class="md:py-2 md:px-5 hover:bg-[#c619925b] rounded-xl active:animate-ping py-2 block hover:text-white">Contact</router-link>
            </li>
          </ul>
        </div>

        <div class="flex">
          <!-- cart -->
          <div class="flex justify-between items-center px-5">
            <div  @click="store.toggleCart = !store.toggleCart">
              <p class="cursor-pointer"><i
                  class='text-white lg:mr-5 text-2xl bx bxs-cart-alt relative'></i><span
                  class="absolute left-4 top-3 text-xs border-2 border-[#e724a0] font-bold text-[#E72463] px-1 bg-white rounded-full inline-block">5</span>
              </p>

              <div v-show="store.toggleCart" class="bg-white absolute lg:right-4 right-0 overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="w-96 pr-2 py-2">
                        <p class="font-extrabold">Subtotal:</p>
                      </th>
                      <th scope="col" class="pr-16 pl-2 py-2">
                        <p class="font-extrabold">95.000</p>
                      </th>
                      <th scope="col"></th>
                      <th scope="col" class="py-2 font-bold text-[#E72463] cursor-pointer">Hammasini</th>
                      <th scope="col" class="font-bold text-[#E72463] cursor-pointer">ko'rish</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      v-for="i of 5" :key="i">
                      <td class="w-96">
                        <img :src="`https://picsum.photos/500/500?random=${i}}`" alt="Apple Watch">
                      </td>
                      <td class="px-2 font-semibold text-gray-900 dark:text-white">
                        Apple Watch
                      </td>
                      <td class="py-4">
                        <div class="flex items-center space-x-3">
                          <button
                            class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button">
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </button>
                          <div>
                            <input type="number" id="first_product"
                              class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1" required>
                          </div>
                          <button
                            class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button">
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td class="px-2 text-center font-semibold text-gray-900 dark:text-white">
                        $599
                      </td>
                      <td class="px-2">
                        <i class='bx bx-trash cursor-pointer text-red-500'></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- cart end -->
          <ul class="lg:hidden pr-5">
            <li>
              <i @click="store.toggleHead = !store.toggleHead" class="bx bx-menu sm:text-4xl text-3xl"></i>
            </li>
          </ul>
        </div>
        <!-- Main modal -->
        <div id="defaultModal" tabindex="-1" aria-hidden="true" :class="{ hidden: !store.toggleHead }"
          class="nav fixed bg-[#e80b85] top-12 shadow-lg rounded-xl border right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0">
          <ul class="text-base md:flex md:justify-between" @click="store.toggleHead = !store.toggleHead">
            <li>
              <router-link to="/"
                class="md:py-2 md:px-5 font-extrabold hover:bg-[#c619925b] rounded-xl px-4 active:animate-ping py-2 block hover:text-white">Home</router-link>
            </li>
            <li>
              <router-link to="/products"
                class="md:py-2 md:px-5 font-extrabold hover:bg-[#c619925b] rounded-xl px-4 active:animate-ping py-2 block hover:text-white">Products</router-link>
            </li>
            <li>
              <router-link to="/about"
                class="md:py-2 md:px-5 font-extrabold hover:bg-[#c619925b] rounded-xl px-4 active:animate-ping py-2 block hover:text-white">About
                us</router-link>
            </li>
            <li>
              <router-link to="/contact"
                class="md:py-2 md:px-5 font-extrabold hover:bg-[#c619925b] rounded-xl px-4 active:animate-ping py-2 block hover:text-white">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useHeader } from '../stores/HeaderNav'
const store = useHeader()
</script>

<style scoped>
.router-link-active {
  color: white;
  font-weight: bold;
}

.logo {
  background: none;
  border: none;
  box-shadow: none;
}

@media (max-width:380px) {
  .logo img{
    height: 20px;
  }
}
</style>