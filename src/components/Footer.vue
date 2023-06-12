<template>
    <footer>
        <div class="bg-[#000000e3]">
            <div class="flex justify-between max-w-[1700px] flex-wrap mx-auto w-[80%] mt-20 text-white py-10">
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
                        <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">
                            <router-link to="/products">Products</router-link>
                        </li>
                        <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">
                            <router-link to="/about">About us</router-link>
                        </li>
                        <li class="duration-300 hover:text-[#E72463] cursor-pointer hover:pl-1">
                            <router-link to="/contact">Contact</router-link>
                        </li>
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
</template>

<script setup>

</script>

<style lang="scss" scoped>
.router-link-active {
    color: #E72463;
    padding-left: 1px;
}
</style>