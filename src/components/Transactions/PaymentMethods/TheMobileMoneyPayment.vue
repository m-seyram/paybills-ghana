<script setup>
import { ref } from "vue";
import ArrowDown from "@/components/icons/common/arrowDown.vue";
import TheCustomDropdown from "@/components/common/TheCustomDropdown.vue";
import mtnImage from "@/assets/homeview/mtn.png";
import telecelImage from "@/assets/homeview/telecel-ghana.png";
import airteltigoImage from "@/assets/homeview/airtelTigo.png";

const dropdownOptions = [
  {
    image: mtnImage,
    text: "MTN Ghana",
  },
  {
    image: telecelImage,
    text: "Telecel",
  },
  {
    image: airteltigoImage,
    text: "AirtelTigo",
  },
];

const selectedOption = ref(dropdownOptions[0]);
</script>

<template>
  <form>
    <!---->
    <div class="mb-5 font-nunito">
      <label class="font-meduim block text-base mb-2" for="network"
        >Network</label
      >
      <div class="2xl:w-auto h-[58px] w-full border rounded-lg px-5 pt-2">
        <div class="relative">
          <!-- Custom Dropdown -->
          <TheCustomDropdown
            :options="dropdownOptions"
            v-model:selectedOption="selectedOption"
          />
          <!--Arrow Icon -->
          <div
            class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-30"
          >
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="mb-5">
      <label class="font-meduim block text-base mb-2" for="momo"
        >MoMo Number</label
      >
      <div
        class="2xl:w-auto h-[58px] w-full border rounded-lg px-5 flex items-center gap-2"
      >
        <!---->
        <div class="relative">
          <!--country icon and code-->
          <select
            class="bg-white border-none pr-8 appearance-none text-base cursor-pointer"
          >
            <option value="GH" class="flex items-center">🇬🇭 +233</option>
            <option value="NG" class="flex items-center">🇳🇬 +234</option>
            <option value="KE" class="flex items-center">🇰🇪 +254</option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none border-gray-400 border-r"
          >
            <ArrowDown />
          </div>
        </div>
        <!---->
        <input
          class="outline-none bg-transparent w-full"
          type="text"
          placeholder="phone"
        />
      </div>
    </div>
  </form>
</template>
