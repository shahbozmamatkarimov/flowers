<template>
  <main class="pt-20 lg:mx-40 md:mx-10 mx-5">
    <section class="contact flex justify-center gap-5 z-10">
      <div class="text-center rounded bg-white w-72 px-5 py-7">
        <button
          class="text-[#E72463] border-2 border-[#E72463] rounded-full text-2xl hover:bg-[#E72463] hover:text-white duration-700 px-3 py-2"><i
            class='bx bx-map'></i></button>
        <h1 class="font-bold text-lg py-5">Bizning manzil</h1>
        <p class="text-gray-700">Toshkent, Chilonzor-9, 12-xonadon metro yaqinida</p>
      </div>
      <div class="text-center rounded bg-white w-72 px-5 py-7">
        <button
          class="text-[#E72463] border-2 border-[#E72463] rounded-full text-2xl hover:bg-[#E72463] hover:text-white duration-700 px-3 py-2"><i
            class='bx bxs-phone-call'></i></button>
        <h1 class="font-bold text-lg py-5">Biz bilan bog'lanish</h1>
        <p class="text-gray-700">Tel: +998 99 999 99 99</p>
        <p class="text-gray-700">+998 99 899 89 98</p>
      </div>
      <div class="text-center rounded bg-white w-72 px-5 py-7">
        <button
          class="text-[#E72463] border-2 border-[#E72463] rounded-full text-2xl hover:bg-[#E72463] hover:text-white duration-700 px-3 py-2"><i
            class='bx bx-envelope'></i></button>
        <h1 class="font-bold text-lg py-5">Xabar yuborish</h1>
        <p class="text-gray-700">example@gmail.com</p>
      </div>
    </section>
    <section class="flex justify-center">
      <form class="flex flex-col justify-center rounded items-center bg-[#E72463] gap-5 w-[40rem] pt-24 pb-10 -mt-12">
        <h1 class="text-3xl font-bold text-center text-white">Xabaringizni yuboring!</h1>
        <input class="w-[80%] border-2 bg-white outline-none p-1 rounded required" type="text"
          placeholder="Ismingizni kiriting">
        <input class="w-[80%] border-2 bg-white outline-none p-1 rounded required" type="email"
          placeholder="Emailingizni kiriting">
        <textarea class="w-[80%] border-2 bg-white outline-none p-1 rounded required" rows="5"
          placeholder="Xabaringizni kiriting"></textarea>
        <input
          class="border-2 border-white cursor-pointer text-white focus:border-[#E72463] px-5 py-1 font-bold rounded-lg"
          type="submit">
      </form>
    </section>
  </main>
</template>

<script setup></script>
  
<style lang="scss">
@media (max-width:1024px) {
  .contact {
    flex-wrap: wrap;
  }
}
</style>
  