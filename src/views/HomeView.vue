<template>
  <main class="overflow-y-auto overflow-hidden max-h-screen">
    <section>
      <div class="flex flex-col justify-center items-center min-h-screen">
        <h1 class="welcome lg:text-9xl text-6xl text-[#E72463]">Xush kelibsiz</h1>
        <h2 class="lg:text-8xl text-5xl text-white font-bold text-center">2023 Trend gullar</h2>
        <button
          class="mt-14 lg:text-2xl border-2 border-red-600 rounded-lg px-3 py-2 bg-[#E72463] text-white cursor-pointer active:animate-ping duration-200 hover:font-bold hover:bg-white hover:text-[#E72463]">
          Save changes
        </button>
      </div>
      <div class="flex lg:justify-center absolute -z-10 top-0 overflow-hidden max-h-screen">
        <img class="min-h-screen min-w-fit" v-show="slider.slide == 1" src="../assets/slider/1.jpg" alt="img">
        <img class="min-h-screen min-w-fit" v-show="slider.slide == 2" src="../assets/slider/2.jpg" alt="img">
      </div>
      <div class="flex md:flex-row flex-col">
        <div
          class="image overflow-hidden scale md:mx-5 mx-auto flex bg-[#0000004a] justify-center items-center m-5 md:w-1/3 sm:w-1/2 w-[80%] md:my-10 lg:h-96 md:h-72 h-96 cursor-pointer">
          <img class="h-full absolute  duration-1000 -z-10" src="../assets/slider/1.jpg" alt="img">
          <div class="text-center">
            <h1 class="font-serif text-4xl font-bold text-white">Gullar</h1>
            <p class="text-2xl">10% chegirma</p>
          </div>
        </div>
        <div
          class="image overflow-hidden scale md:mx-5 mx-auto flex bg-[#0000004a] justify-center items-center m-5 md:w-1/3 sm:w-1/2 w-[80%] md:my-10 lg:h-96 md:h-72 h-96 cursor-pointer">
          <img class="h-full absolute duration-1000 -z-10" src="../assets/slider/2.jpg" alt="img">
          <div class="text-center">
            <h1 class="font-serif text-4xl font-bold text-white">Gullar</h1>
            <p class="text-2xl">40% chegirma</p>
          </div>
        </div>
        <div
          class="image overflow-hidden scale md:mx-5 mx-auto flex bg-[#0000004a] justify-center items-center m-5 md:w-1/3 sm:w-1/2 w-[80%] md:my-10 lg:h-96 md:h-72 h-96 cursor-pointer">
          <img class="h-full absolute duration-1000 -z-10" src="../assets/slider/3.jpg" alt="img">
          <div class="text-center">
            <h1 class="font-serif text-4xl font-bold text-white">Gullar</h1>
            <p class="text-2xl">20% chegirma</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="overflow-hidden mr-3">
        <div class=" text-center my-10">
          <h1 class="welcome text-3xl">Ajoyib sovg'alar</h1>
          <p class="sm:text-4xl text-2xl">TANLANGAN MAHSULOTLAR</p>
        </div>
        <div class="lg:w-[1024px] md:w-[992] sm:w-[528px] w-[353px] mx-auto overflow-hidden overflow-x-auto">
          <div class="flex m-2" v-for="i in 2" :key="i">
            <div
              class="media380 shadow-lg hover:shadow-gray-400 lg:w-1/4 md:w-1/3 pb-2 bg-white rounded text-center font-bold mx-1 leading-9"
              v-for="i in 5" :key="i">
              <img src="../assets/flower/1.jpg" class="rounded h-52 w-full" alt="img">
              <h1 class="w-[80%] mx-auto truncate">Flowers daisy pink stick</h1>
              <p class="font-bold flex justify-between items-center px-10"><span class="font-medium">80.000</span><i
                  class='bx bxs-cart-add cursor-pointer text-2xl text-red-500'></i></p>
              <button
                class="mt-4 border-2 border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] w-[80%] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
                Sotib olish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          class="mt-4 border-2 border-red-600 rounded-lg px-2 py-1 text-sm text-white cursor-pointer active:animate-ping duration-200 bg-[#E72463] hover:bg-white hover:text-[#E72463]">
          Show More
        </button>
      </div>
    </section>

    <section>
      <div class="text-center my-16">
        <h1 class="welcome text-3xl">Yangi mahsulotlar</h1>
        <h1 class="text-4xl">Eng so'ngi mahsulotlar</h1>
      </div>
      <div class="lg:w-[1024px] md:w-[992] sm:w-[528px] w-[353px] mx-auto overflow-hidden overflow-x-auto">
        <div class="flex">
          <div class="news lg:w-1/3 sm:w-1/2 sm:mx-0 mx-3 rounded font-bold lg:mx-5 leading-9" v-for="i in 3" :key="i">
            <div class="mx-2 bg-white rounded">
              <div class="flex justify-between py-1 px-2">
                <div class="flex items-center">
                  <img class="h-10 w-10 rounded-full"
                    src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                    alt="user">
                  <p class="font-medium">Emily</p>
                </div>
                <p class="text-gray-500">Today</p>
              </div>
              <img src="../assets/flower/blog3.jpg" class="h-72 w-full" alt="img">
              <div class="py-5 px-10">
                <h1 class="truncate text-xl font-medium">Flowers daisy pink stick</h1>
                <p class="truncate text-gray-500 py-2 font-medium text-sm">By Admin <i
                    class="text-red-500 font-bold">-</i>
                  December 18,
                  2022</p>
                <p class="description leading-5 h-16">Lorem ipsu dolor sit amet cons elits cumque adipisicing, sed do
                  incid
                  eiusmod tempor ut
                  labore et dolore
                  eveniet.</p>
                <div>
                  <button
                    class="mt-4 border-2 w-28 border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] cursor-pointer active:animate-ping duration-200 hover:bg-[#E72463] hover:text-red-100">
                    Read More<i class='bx bxs-right-arrow-alt w-5'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          class="mt-4 border-2 w-28 border-red-600 rounded-lg px-2 py-1 text-sm text-white cursor-pointer active:animate-ping duration-200 bg-[#E72463] hover:bg-white hover:text-[#E72463]">
          Show More
        </button>
      </div>
    </section>

    <section class="text-center sm:w-[60%] w-[80%] mx-auto mt-20">
      <h1 class="welcome text-2xl">Bizning xizmatlarimiz</h1>
      <div class="relative">
        <div class="flex items-center h-40 animate-spin justify-center">
          <p class="w-5 h-5 bg-yellow-500 rounded-full"></p>
          <p class="w-28"></p>
          <p class="w-5 h-5 bg-yellow-500 rounded-full"></p>
        </div>
        <div class="flex absolute rotate-90 top-0 items-center h-40 w-full justify-center">
          <div class="flex mx-auto items-center h-40  animate-spin justify-center">
            <p class="w-5 h-5 bg-yellow-500 left- rounded-full"></p>
            <p class="w-28"></p>
            <p class="w-5 h-5 bg-yellow-500 rounded-full"></p>
          </div>
        </div>
        <div class="flex absolute rotate-45 top-0 items-center h-40 w-full justify-center">
          <div class="flex mx-auto items-center h-40  animate-spin justify-center">
            <p class="w-5 h-5 bg-yellow-500 left- rounded-full"></p>
            <p class="w-28"></p>
            <p class="w-5 h-5 bg-yellow-500 rounded-full"></p>
          </div>
        </div>
        <div class="flex absolute rotate-[135deg] top-0 items-center h-40 w-full justify-center">
          <div class="flex mx-auto items-center h-40  animate-spin justify-center">
            <p class="w-5 h-5 bg-yellow-500 left- rounded-full"></p>
            <p class="w-28"></p>
            <p class="w-5 h-5 bg-yellow-500 rounded-full"></p>
          </div>
        </div>
        <div class=" top-0 absolute w-full">
          <img class="w-28 h-28 my-5 mx-auto shadow-lg shadow-gray-400 bg-white px-1 py-4 rounded-full"
            src="https://www.seekpng.com/png/full/5-50932_lotus-flower-silhouette-at-getdrawings-lotus-flower-logo.png"
            alt="logo">
        </div>
        <p class="lg:text-lg md:text-md text-xs w-full">
          Siz bizning saytimiz orqali o'zingiz xohlagan har qanday gulni sotib olishingiz mumkin.
          Shuningdek bizning kompaniyamizga ariza berish orqali o'zingizning gullaringizni sotishingiz mumkin.
          Buning uchun bizning kompaniyamizga ariza qoldirishingiz mumkin.
        </p>
        <button
          class="mt-4 border-2 border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
          Ariza qoldirish
        </button>
      </div>
    </section>
    <footer>
      <div class="bg-[#000000e3]">
        <div class="flex justify-between flex-wrap mx-auto w-[80%] mt-20 text-white py-10">
          <div class="lg:w-1/4 sm:w-1/2 w-full p-4">
            <h1 class="-ml-5 mb-3"><img class="h-10" src="../assets/florago.svg" alt=""></h1>
            <p>
              Siz o'zingiz uchun har qanday gulni sotib oling,
              yoki har qanday gulingizni soting.
            </p>
            <p class="flex gap-3 py-5">
              <i class='p-2 border hover:bg-[#E72463] hover:border-[#E72463] rounded-full bx bxl-telegram'></i>
              <i class='p-2 border hover:bg-[#E72463] hover:border-[#E72463] rounded-full bx bxl-facebook'></i>
              <i class='p-2 border hover:bg-[#E72463] hover:border-[#E72463] rounded-full bx bxl-instagram'></i>
              <i class='p-2 border hover:bg-[#E72463] hover:border-[#E72463] rounded-full bx bxl-twitter'></i>
              <i class='p-2 border hover:bg-[#E72463] hover:border-[#E72463] rounded-full bx bxl-linkedin'></i>
            </p>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 p-4">
            <h1 class="text-2xl pb-5">Biz haqimizda</h1>
            <ul>
              <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">
                Bizning kompaniyamiz
              </li>
              <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">
                Biz bilan bog'lanish
              </li>
              <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">
                Bizning xizmatlar
              </li>
            </ul>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 sm:px-4 px-0 pl-4 p-4">
            <h1 class="text-2xl pb-5">Havolalar</h1>
            <ul>
              <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">Profile</li>
              <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">About us</li>
              <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">Contact</li>
              <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">Sign Up</li>
            </ul>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 w-full p-4">
            <h1 class="text-2xl pb-5">Ma'lumotlar</h1>
            <p>Tashkent, Yunusobod, 142-uy</p>
            <p>Telefon: +998 99 142 23 03</p>
            <p>Elektron pochta: example@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center bg-black">
        <img class="h-4 text-red-500" src="../assets/florago.svg" alt="img">
        <p class="py-5 text-[#E72463]">2023/07/01</p>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { reactive } from "vue";

const slider = reactive({
  slide: 1,
})

setInterval(() => {
  slider.slide += 1;
  if (slider.slide == 3) {
    slider.slide = 1;
  }
}, 2000)
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap");

.welcome {
  font-family: "Great Vibes", cursive;
}

.scale:hover {
  img {
    transform: scale(1.2);
  }
}

.description {
  display: inline-block;
  overflow: hidden !important;
  text-overflow: ellipsis;
  line-height: 1.4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.news:hover {
  h1 {
    color: #E72463;
  }
}

@media (max-width:400px) {
  .image {
    height: 300px;
  }
}
</style>