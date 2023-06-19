<template>
    <!-- Main modal -->
    <section v-show="store.imageModal" @mouseup="store.imageModal = false"
        class="flex justify-center items-center absolute bg-[#80808092] z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg mx-auto shadow border max-w-fit">
                <i class="bx bx-x bg-gray-300 text-lg font-bold px-1 rounded cursor-pointer z-10 right-0 absolute"></i>
                <img class="mx-auto rounded-md" :src="store.data.image" alt="img">
            </div>
        </div>
    </section>
</template>

<script setup>
import { useHeader } from '../stores/HeaderNav'
const store = useHeader()
</script>

<style lang="scss" scoped></style>