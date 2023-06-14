<template>
  <header class="fixed w-full z-50 font-bold">
    <nav class="nav bg-[#e80b85] md:py-0 py-1 text-lg flex justify-center px-3">
      <div class="flex flex-wrap items-center justify-between w-full max-w-[1700px]">
        <div>
          <router-link class="logo flex justify-center items-center" to="/"><img class="sm:h-10 h-9"
              src="../assets/florago.svg" alt="logo"></router-link>
        </div>
        <div class="hidden w-full md:flex md:items-center p-1 md:w-auto" id="menu">
          <ul class="pt-4 text-lg text-black md:flex md:justify-between md:pt-0">
            <li>
              <router-link to="/"
                class="md:py-1 my-1 md:px-5 hover:bg-[#c619925b5b] rounded-md active:animate-ping block text-black font-medium">Home</router-link>
            </li>
            <li>
              <router-link to="/products"
                class="md:py-1 my-1 md:px-5 hover:bg-[#c619925b] rounded-md active:animate-ping block text-black font-medium">Products</router-link>
            </li>
            <li>
              <router-link to="/about"
                class="md:py-1 my-1 md:px-5 hover:bg-[#c619925b] rounded-md active:animate-ping block text-black font-medium">About
                us</router-link>
            </li>
            <li>
              <router-link to="/contact"
                class="md:py-1 my-1 md:px-5 hover:bg-[#c619925b] rounded-md active:animate-ping block text-black font-medium">Contact
                us</router-link>
            </li>
          </ul>
        </div>

        <div class="flex">
          <!-- cart -->
          <div class="flex justify-between items-center px-5">
            <div>
              <p @click="store.toggleCart = !store.toggleCart" class="cursor-pointer"><i
                  class='text-white lg:mr-5 text-2xl bx bxs-cart-alt relative'></i><span
                  class="absolute left-4 top-3 text-xs border-2 border-[#e724a0] font-bold text-[#E72463] px-1 bg-white rounded-full inline-block">5</span>
              </p>

              <div v-show="store.toggleCart"
                class="carts bg-white absolute lg:right-4 -right-3 overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="w-80 pr-2 py-2">
                        <p class="font-extrabold">Subtotal:</p>
                      </th>
                      <th scope="col" class="pr-10 pl-2 py-2">
                        <p class="font-extrabold">95.000</p>
                      </th>
                      <th scope="col sm:block hidden"></th>
                      <th scope="col" class="py-2 font-bold text-[#E72463] cursor-pointer"></th>
                      <th scope="col" class="font-bold text-[#E72463] cursor-pointer"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b hover:bg-gray-50" v-for="i of 5" :key="i">
                      <td class="w-96">
                        <img :src="`https://picsum.photos/500/500?random=${i}}`" alt="img">
                      </td>
                      <td class="sm:flex items-center truncate h-20 hidden font-semibold text-gray-900">
                        Apple Watch
                      </td>
                      <td class="py-4 cartTitle">
                        <div class="flex flex-col items-center space-x-1">
                          <p class="sm:hidden flex items-center font-semibold -mt-5 pb-2 truncate">Apple Watch</p>
                          <div class="flex items-center space-x-2">
                            <button
                              class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                              type="button">
                              <svg class="w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                              </svg>
                            </button>
                            <div>
                              <input type="number" id="first_product"
                                class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                                placeholder="1" required>
                            </div>
                            <button
                              class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                              type="button">
                              <svg class="w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                  clip-rule="evenodd"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="px-2 text-center font-semibold text-gray-900">
                        $599
                      </td>
                      <td class="px-2">
                        <i class='bx bx-trash cursor-pointer text-red-500'></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p class="text-lg text-blue-600 float-right font-medium pr-2">View all</p>
              </div>
            </div>
          </div>
          <!-- cart end -->
          <ul class="md:hidden pr-5">
            <li>
              <i @click="store.toggleHead = !store.toggleHead" class="bx bx-menu sm:text-4xl text-3xl"></i>
            </li>
          </ul>
        </div>
        <!-- Main modal -->
        <div :class="{ hidden: !store.toggleHead }"
          class="nav md:hidden fixed bg-[#e80b85] top-12 shadow-lg rounded-xl border right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0">
          <ul class="text-base md:flex md:justify-between" @click="store.toggleHead = !store.toggleHead">
            <li>
              <router-link to="/"
                class="md:py-2 md:px-5 font-extrabold hover:bg-[#c619925b] rounded-xl px-4 active:animate-ping py-2 inline-block hover:text-white">Home</router-link>
            </li>
            <li>
              <router-link to="/products"
                class="md:py-2 md:px-5 font-extrabold hover:bg-[#c619925b] rounded-xl px-4 active:animate-ping py-2 inline-block hover:text-white">Products</router-link>
            </li>
            <li>
              <router-link to="/about"
                class="md:py-2 md:px-5 font-extrabold hover:bg-[#c619925b] rounded-xl px-4 active:animate-ping py-2 inline-block hover:text-white">About
                us</router-link>
            </li>
            <li>
              <router-link to="/contact"
                class="md:py-2 md:px-5 font-extrabold hover:bg-[#c619925b] rounded-xl px-4 active:animate-ping py-2 inline-block hover:text-white">Contact
                us</router-link>
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

@media (max-width:350px) {
  .cartTitle {
    display: none;
  }
}

@media (max-width:380px) {
  .logo img {
    height: 20px;
  }
}
</style>