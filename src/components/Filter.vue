<template>
    <aside
        class="w-60 shadow-lg shadow-gray-400 lg:mt-12 md:mt-9 mt-8 pb-20 bg-white p-5 overflow-hidden overflow-y-auto max-h-[95vh]">
        <h1 class="text-2xl font-bold"><i class='bx bx-filter-alt'></i>Filter</h1>
        <div class="mt-3">
            <h1>Price:</h1>

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
        <hr class="border my-2">
        <div class="mt-3">
            <h1 class="flex justify-between">Category<i class='bx bx-chevron-down'></i><i
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
            <h1 class="flex justify-between">Colors<i class='bx bx-chevron-down'></i><i class='bx bx-chevron-up hidden'></i>
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
                class="mt-2 border-2 border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] w-[80%] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
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
</script>