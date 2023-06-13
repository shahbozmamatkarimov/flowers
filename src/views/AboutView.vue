<template>
  <main class="md:mt-20 mt-10">
    <section class="flex md:flex-row flex-col lg:mx-40 md:mx-20 sm:mx-10">
      <div class="flex flex-col justify-center mx-auto sm:gap-5 gap-2 md:w-1/2 sm:w-full w-[270px] sm:h-96 h-72 text-center lg:pr-10">
        <h1 class="welcome lg:text-4xl sm:text-3xl text-2xl font-medium text-[#E72463]">Bizning saytimiz haqida</h1>
        <p class="sm:text-md text-sm sm:font-normal font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis in fugiat rerum assumenda autem illum
          laudantium itaque odit esse, libero doloremque enim vel exercitationem ad dicta quod dolores consequuntur.
        </p>
        <button
          class="mt-4 mx-auto border-2 w-40 font-medium border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
          Xarid qilish
        </button>
      </div>
      <div class="sm:w-96 w-[270px] sm:h-96 h-[270px] mx-auto">
        <img class="sm:w-96 md:ml-5 w-[270px] sm:h-96 h-[270px] mx-auto"
          src="https://st.depositphotos.com/1674023/4340/i/950/depositphotos_43408743-stock-photo-collage-of-beautiful-spring-flowers.jpg"
          alt="img">
      </div>
    </section>

    <section>
      <div class="flex flex-col justify-center items-center mt-16 sm:h-96 h-72 sm:text-xl text-lg sm:w-full bgImage">
        <p>Bizning</p>
        <p>
          <i class="welcome font-medium sm:text-5xl text-3xl text-[#E72463]">arzon va hamyonbop</i>
        </p>
        <p class="sm:w-full w-[270px] text-center">gullarimizni uyingizdan turib xarid qiling</p>
        <button
          class="mt-10 mx-auto border-2 font-medium border-red-600 rounded-lg px-5 py-1 text-sm text-[#E72463] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
          Xarid qilishni boshlang
        </button>
      </div>
    </section>

    <h1 class="text-center text-3xl mb-10 mt-20">Bizning xizmatlar</h1>
    <section class="flex md:flex-row flex-col justify-center items-center text-center lg:mx-40 mx-20 gap-5">
      <div class="md:w-1/3 w-[270px] p-5 shadow-md border-2 bg-white rounded">
        <button
          class="hover:text-[#E72463] border-2 border-[#E72463] rounded-full text-2xl text-white hover:bg-white bg-[#E72463] duration-700 px-3 py-2">
          <i class='bx bxs-dollar-circle'></i>
        </button>
        <h1 class="text-xl font-medium py-2">Arzon narx</h1>
        <p class="md:h-20 md:text-normal text-sm">Bizning mahsulotlarimizni eng arzon narxlarda sotib oling</p>
      </div>
      <div class="md:w-1/3 w-[270px] p-5 shadow-md border-2 bg-white rounded">
        <button
          class="hover:text-[#E72463] border-2 border-[#E72463] rounded-full text-2xl text-white hover:bg-white bg-[#E72463] duration-700 px-3 py-2">
          <i class='bx bxs-shopping-bag'></i>
        </button>
        <h1 class="text-xl font-medium py-2">10% chegirma</h1>
        <p class="md:h-20 md:text-normal text-sm">Mahsulotlarimizni sotib olishda davomli bo'ling va chegirmalarga ega
          bo'ling</p>
      </div>
      <div class="md:w-1/3 w-[270px] p-5 shadow-md border-2 bg-white rounded">
        <button
          class="hover:text-[#E72463] border-2 border-[#E72463] rounded-full text-2xl text-white hover:bg-white bg-[#E72463] duration-700 px-3 py-2">
          <i class='bx bxs-taxi'></i>
        </button>
        <h1 class="text-xl font-medium py-2">Yetkazib berish</h1>
        <p class="md:h-20 md:text-normal text-sm">Siz istalgan va o'zingiz yoqtirgan gulni sotib oling va biz sizga ularni
          yetkazib beramiz!</p>
      </div>
    </section>

    <section class="bgimage1 flex justify-between lg:px-40 items-center mt-16 sm:h-96 h-72 text-xl">
      <div class="flex sm:justify-between justify-center sm:w-1/2 w-full sm:px-40 px-7 sm:leading-10 leading-9">
        <ul class="sm:text-4xl text-3xl">
          <li class="sm:text-gray-600 text-black sm:font-medium font-bold welcome">Foydalanuvchilar:</li>
          <li class="sm:text-gray-600 text-black sm:font-medium font-bold welcome">Sotuvchilar:</li>
          <li class="sm:text-gray-600 text-black sm:font-medium font-bold welcome">Barcha gullar:</li>
          <li class="sm:text-gray-600 text-black sm:font-medium font-bold welcome">Sotilgan gullar:</li>
        </ul>
        <ul class="pl-5">
          <li class="font-bold sm:text-[#e72462be] text-white numbers">2310</li>
          <li class="font-bold sm:text-[#e72462be] text-white numbers">100</li>
          <li class="font-bold sm:text-[#e72462be] text-white numbers">4502</li>
          <li class="font-bold sm:text-[#e72462be] text-white numbers">2955</li>
        </ul>
      </div>
      <div></div>
    </section>

    <h1 class="text-center sm:text-3xl text-xl sm:mb-10 mb-5 mt-20">Kompaniyamiz haqida</h1>
    <p class="text-center sm:text-5xl text-4xl text-[#E72463] font-bold sm:mb-10 mb-5 welcome">Eng yaxshi sotuvchilar</p>
    <section class="flex sm:flex-row flex-col justify-center items-center text-center lg:mx-40 md:mx-20 sm:mx-10 lg:gap-16 md:gap-5">
      <div class="sm:w-1/3 w-[270px] sm:mt-0 mt-2 md:p-5 p-2 shadow-md border-2 bg-white rounded">
        <img class="w-full lg:h-96 md:h-[22rem] h-80"
          src="https://previews.123rf.com/images/jackf/jackf1903/jackf190303061/118571940-positive-african-american-male-florist-offering-flower-arrangements-at-his-flower-shop.jpg"
          alt="img">
        <h1 class="md:text-xl text-lg font-medium py-2">John Doe</h1>
        <p class="md:text-md text-sm">Gullari soni: 200</p>
        <p class="welcome flex justify-center items-center md:text-2xl text-xl sm:h-14 font-bold text-[#E72463]">Sotilgan gullar soni: 125</p>
        <button
          class="mt-4 mx-auto border-2 w-40 font-medium border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
          Kuzatish
        </button>
      </div>
      <div class="sm:w-1/3 w-[270px] sm:mt-0 mt-2 md:p-5 p-2 shadow-md border-2 bg-white rounded">
        <img class="w-full lg:h-96 md:h-[22rem] h-80"
          src="https://media.istockphoto.com/id/1170542489/photo/male-florist-working.jpg?s=612x612&w=is&k=20&c=LShZWRALQnLTzQC85Fl7fIwMeW5gGEYFArpLkpUyDH8="
          alt="img">
        <h1 class="md:text-xl text-lg font-medium py-2">Samuel Mole</h1>
        <p class="md:text-md text-sm">Gullari soni: 364</p>
        <p class="welcome flex justify-center items-center md:text-2xl text-xl sm:h-14 font-bold text-[#E72463]">Sotilgan gullar soni: 109</p>
        <button
          class="mt-4 mx-auto border-2 w-40 font-medium border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
          Kuzatish
        </button>
      </div>
      <div class="sm:w-1/3 w-[270px] sm:mt-0 mt-2 md:p-5 p-2 shadow-md border-2 bg-white rounded">
        <img class="w-full lg:h-96 md:h-[22rem] h-80"
          src="https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2Fcompany-vehicle-rules.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5248&fp-y=0.3664&h=415&q=88&w=622&s=f464f5bb155c1e8f5a48242ccb8a56bd"
          alt="img">
        <h1 class="md:text-xl text-lg font-medium py-2">Charlie Doe</h1>
        <p class="md:text-md text-sm">Gullari soni: 50</p>
        <p class="welcome flex justify-center items-center md:text-2xl text-xl sm:h-14 font-bold text-[#E72463]">Sotilgan gullar soni: 95</p>
        <button
          class="mt-4 mx-auto border-2 w-40 font-medium border-red-600 rounded-lg px-2 py-1 text-sm text-[#E72463] cursor-pointer active:animate-ping duration-200 bg-white hover:bg-[#E72463] hover:text-white">
          Kuzatish
        </button>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.bgImage {
  background: url('https://png.pngtree.com/thumb_back/fh260/background/20200825/pngtree-vintage-floral-watercolor-smudge-border-background-image_396923.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.bgimage1 {
  background: url('https://static.vecteezy.com/system/resources/thumbnails/006/640/597/small/nature-of-flower-in-garden-using-as-cover-page-background-natural-flora-wallpaper-or-template-brochure-landing-page-design-photo.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 500px) {
    .bgImage {
      background-position: left;
    }

    .bgimage1{
      background-position: right;
    }
}
</style>