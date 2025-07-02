<script setup>
import { computed } from "vue";
import ItemFragment from "../Fragments/ItemFragment.vue";

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
<template>
  <div class="bg-slate-100 h-screen">
    <!-- Header -->
    <div
      class="relative flex md:flex-row flex-col gap-2 bg-pink-500 p-2 md:p-5 justify-between w-full"
    >
      <div class="flex flex-col flex-1">
        <div class="font-bold text-3xl text-slate-50">Kantong Resti</div>
        <div class="text-md text-slate-50">
          Pemantauan Ibu Hamil Resiko Tinggi
        </div>
      </div>
      <div class="flex flex-1 gap-2 items-center md:justify-end">
        <div class="">
          <button
            class="bg-pink-500 outline-2 outline-slate-50 rounded text-slate-50 px-4 py-1 inline hover:bg-slate-50 cursor-pointer hover:text-pink-500 hover:outline-slate-50"
          >
            <v-icon name="fa-plus" />
            Tambah Data
          </button>
        </div>
        <div class="">
          <button
            class="bg-pink-500 outline-2 outline-slate-50 rounded text-slate-50 px-4 py-1 inline hover:bg-slate-50 cursor-pointer hover:text-pink-500 hover:outline-slate-50"
          >
            <v-icon name="fa-print" />
            Cetak Data
          </button>
        </div>
      </div>
    </div>
    <div class="relative w-full h-16 md:h-32 xl:h-48 2xl:h-80">
      <svg
        class="absolute top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f6339a"
          fill-opacity="1"
          d="M0,96L30,117.3C60,139,120,181,180,165.3C240,149,300,75,360,53.3C420,32,480,64,540,85.3C600,107,660,117,720,112C780,107,840,85,900,69.3C960,53,1020,43,1080,48C1140,53,1200,75,1260,90.7C1320,107,1380,117,1410,122.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </div>
    <!-- CONTENT -->
    <div class="flex flex-col px-2 md:px-5 py-2">
      <div
        class="flex md:flex-row gap-2 md:gap-0 flex-col py-2 md:py-3 bg-white rounded px-2"
      >
        <div class="flex-1 px-0 md:px-2">
          <input
            type="text"
            class="outline-1 outline-slate-300 rounded p-2 focus:outline-2 focus:outline-pink-500 w-full h-full"
            placeholder="Cari nama ibu ..."
          />
        </div>
        <div class="w-full md:w-3/12 lg:w-2/12 px-0 md:px-2">
          <select
            name="risk"
            id=""
            class="bg-gray-200 rounded w-full h-full p-2 outline-1 outline-slate-300 hover:outline-2 hover:outline-pink-500"
          >
            <option value="Hipertensi">Hipertensi</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Anemia">Anemia</option>
          </select>
        </div>
        <div class="w-full md:w-3/12 lg:w-2/12 px-0 md:px-2">
          <button
            class="bg-slate-100 p-2 rounded w-full cursor-pointer hover:bg-pink-500 hover:text-slate-50 font-medium"
          >
            <v-icon name="fa-filter" />
            Reset Filter
          </button>
        </div>
      </div>
      <div class="flex flex-wrap py-2">
        <ItemFragment v-for="i in 20" key="i" />
      </div>
    </div>
    <!-- FOOTER -->
    <div class="flex items-center justify-center bg-pink-500">
      <span class="text-sm font-medium text-pink-50 py-2">
        Hak cipta &copy; {{ currentYear }} | Moch Diki Widianto
      </span>
    </div>
  </div>
</template>
