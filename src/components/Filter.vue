<template>
    <aside
        class="min-w-60 shadow-lg shadow-gray-400 lg:mt-12 md:mt-11 mt-10 pb-20 bg-white p-5 overflow-hidden overflow-y-auto max-h-[95vh]">
        <h1 class="text-2xl font-bold"><i class='bx bx-filter-alt'></i>Filter</h1>
        <div class="mt-3">
            <h1 class="font-bold">Price:</h1>
            <label for="default-range" class="flex justify-between mb-2 text-sm font-medium">
                <p>{{ price.end * price.select }} UZS</p>
                <select v-model="price.select" class="border-2 rounded">
                    <option value="1">1</option>
                    <option value="10">10</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                </select>
            </label>
            <input id="default-range" v-model="price.end" type="range"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
        </div>
        <div>
            <div class="flex justify-between gap-1">
                <button @click="Filter('news')"
                    :class="{ 'bg-[blue] text-white': filterBtn.news, 'bg-white': !filterBtn.news }"
                    class="mt-2 border-2 border-blue-600 rounded-lg px-2 py-1 text-sm text-[blue] cursor-pointer active:animate-ping duration-200">
                    Yangilari
                </button>
                <button @click="Filter('selected')"
                    :class="{ 'bg-[blue] text-white': filterBtn.selected, 'bg-white': !filterBtn.selected }"
                    class="mt-2 float-right border-2 border-blue-600 rounded-lg px-2 py-1 text-sm text-[blue] cursor-pointer active:animate-ping duration-200">
                    Tanlanganlari
                </button>
            </div>
            <button @click="Filter('all')" :class="{ 'bg-[blue] text-white': filterBtn.all, 'bg-white': !filterBtn.all }"
                class="mt-2 border-2 border-blue-600 rounded-lg px-2 py-1 text-sm text-[blue] w-full cursor-pointer active:animate-ping duration-200">
                Barchasi
            </button>
            <div class="mt-2 border-2 border-blue-600 rounded-lg px-2 py-1 text-sm text-[blue] w-full duration-200">
                <select class="cursor-pointer outline-none font-medium">
                    <option selected>narxi bo'yicha</option>
                    <option value="1">likelari bo'yicha</option>
                    <option value="2">ko'rilganlari bo'yicha</option>
                </select>
            </div>
        </div>
        <hr class="border my-2">
        <div class="mt-3">
            <h1 class="flex justify-between font-bold">Category<i class='bx bx-chevron-down'></i><i
                    class='bx bx-chevron-up hidden'></i>
            </h1>
            <ul class="pl-5 text-gray-500">
                <li>
                    <input id="1" class="mr-1" type="checkbox">
                    <label for="1">Atirgul (231)</label>
                </li>
                <li>
                    <input id="2" class="mr-1" type="checkbox">
                    <label for="2">Atirgul (231)</label>
                </li>
                <li>
                    <input id="3" class="mr-1" type="checkbox">
                    <label for="3">Atirgul (231)</label>
                </li>
                <li>
                    <input id="4" class="mr-1" type="checkbox">
                    <label for="4">Atirgul (231)</label>
                </li>
                <li>
                    <input id="5" class="mr-1" type="checkbox">
                    <label for="5">Atirgul (231)</label>
                </li>
                <button class="text-blue-500">view all</button>
            </ul>
        </div>
        <hr class="border my-2">
        <div class="mt-3">
            <h1 class="flex justify-between font-bold">Colors<i class='bx bx-chevron-down'></i><i
                    class='bx bx-chevron-up hidden'></i>
            </h1>
            <ul class="pl-5 text-gray-500">
                <li>
                    <input id="6" class="rounded-full mr-1" type="checkbox">
                    <label for="6">All</label>
                </li>
                <li>
                    <input id="7" class="rounded-full mr-1" type="checkbox">
                    <label for="7">Oq</label>
                </li>
                <li>
                    <input id="8" class="rounded-full mr-1" type="checkbox">
                    <label for="8">Qora</label>
                </li>
                <li>
                    <input id="9" class="rounded-full mr-1" type="checkbox">
                    <label for="9">Qizil</label>
                </li>
                <li>
                    <input id="10" class="rounded-full mr-1" type="checkbox">
                    <label for="10">Yashil</label>
                </li>
                <li>
                    <input id="11" class="rounded-full mr-1" type="checkbox">
                    <label for="11">Sariq</label>
                </li>
                <li>
                    <input id="12" class="rounded-full mr-1" type="checkbox">
                    <label for="12">Ko'k</label>
                </li>
                <button class="text-blue-500">view all</button>
            </ul>
        </div>
        <div>
            <button
                class="mt-2 border-2 border-blue-600 rounded-lg px-2 py-1 text-sm text-[blue] w-[80%] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[blue] hover:text-white">
                Qayta o'rnatish
            </button>
        </div>
    </aside>
</template>

<script setup>
import { reactive } from 'vue'

const price = reactive({
    end: 100,
    select: 10,
})

const filterBtn = reactive({
    news: false,
    selected: false,
    all: false,
})

const Filter = (val) => {
    for (let i in filterBtn) {
        filterBtn[i] = false;
    }
    filterBtn[val] = true;
}
</script>