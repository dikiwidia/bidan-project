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
    <div class="flex bg-pink-500 px-5 justify-between w-full py-5">
      <div class="flex flex-col flex-1">
        <div class="font-bold text-3xl text-slate-50">Kantong Resti</div>
        <div class="text-md text-slate-50">
          Pemantauan Ibu Hamil Resiko Tinggi
        </div>
      </div>
      <div class="flex flex-1 gap-2 items-center justify-end">
        <div class="">
          <button
            class="bg-pink-500 outline-2 outline-slate-50 rounded text-slate-50 px-4 py-1 inline hover:bg-slate-50 cursor-pointer hover:text-pink-500 hover:outline-slate-50"
          >
            Tambah Data
          </button>
        </div>
        <div class="">
          <button
            class="bg-pink-500 outline-2 outline-slate-50 rounded text-slate-50 px-4 py-1 inline hover:bg-slate-50 cursor-pointer hover:text-pink-500 hover:outline-slate-50"
          >
            Cetak Data
          </button>
        </div>
      </div>
    </div>
    <!-- CONTENT -->
    <div class="flex flex-col px-5 py-2">
      <div class="flex bg-white w-full p-4">
        <div class="flex-1 px-2">
          <input
            type="text"
            class="outline-1 outline-slate-300 rounded px-2 focus:outline-2 focus:outline-pink-500 w-full h-full"
            placeholder="Cari nama ibu ..."
          />
        </div>
        <div class="w-2/12 px-2">
          <select
            name="risk"
            id=""
            class="bg-gray-200 rounded w-full h-full px-2 outline-1 outline-slate-300 hover:outline-2 hover:outline-pink-500"
          >
            <option value="Hipertensi">Hipertensi</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Anemia">Anemia</option>
          </select>
        </div>
        <div class="w-2/12 px-2">
          <button
            class="bg-slate-100 px-2 py-2 rounded w-full cursor-pointer hover:bg-pink-500 hover:text-slate-50 font-medium"
          >
            Reset Filter
          </button>
        </div>
      </div>
      <div class="flex flex-wrap py-4">
        <ItemFragment v-for="i in 100" key="i" />
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
