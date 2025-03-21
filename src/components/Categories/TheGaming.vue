<script setup>
//import { ref } from "vue";
import ArrowDown from "../icons/common/arrowDown.vue";
import TheCustomDropdown from "../common/TheCustomDropdown.vue";
import { useRouter } from "vue-router";
import { gamingStore } from "@/stores/categories/gamingStore";
import ghanaImage from "@/assets/ghana.png"
import nigeriaImage from "@/assets/nigeria.png"
import kenyaImage from "@/assets/kenya.png"
import xboxImage from "@/assets/homeview/xbox.png"
import fortniteImage from "@/assets/homeview/fortnite.png"
import playstationImage from "@/assets/homeview/playstation.png"

const router = useRouter();
const gameStore = gamingStore();

const gamingOptions = [
  {
    image: xboxImage,
    text: "Xbox",
  },
  {
    image: fortniteImage,
    text: "Fortnite",
  },
  {
    image: playstationImage,
    text: "Playstation",
  },
];

const country = [
  {
    image: ghanaImage,
    text: "Ghana",
  },
  {
    image: nigeriaImage,
    text: "Nigeria",
  },
  {
    image: kenyaImage,
    text: "Kenya",
  },
];

function Continue() {
  router.push("/summary/gaming");
}
</script>

<template>
  <form @submit.prevent="Continue">
    <div class="p-3 2xl:pl-10 pl-5 font-nunito">
      <h2 class="font-bold text-lg mb-10">Purchase Gaming Voucher</h2>
      <!---->
      <div class="mb-10">
        <label class="font-meduim block text-base mb-2" for="country"
          >Biller Country</label
        >
        <div class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 pt-2">
          <div class="relative">
            <!-- Custom Dropdown -->
            <TheCustomDropdown
              :options="country"
              v-model:selectedOption="gameStore.selectedCountry"
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
      <div class="mb-10">
        <label class="font-meduim block text-base mb-2" for="country"
          >Gaming Service</label
        >
        <div class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 pt-2">
          <div class="relative">
            <!-- Custom Dropdown -->
            <TheCustomDropdown
              :options="gamingOptions"
              v-model:selectedOption="gameStore.selectedGame"
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
      <div class="mb-10">
        <label class="font-meduim block text-base mb-2" for="country"
          >Amount</label
        >
        <div
          class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 flex items-center justify-between"
        >
          <!---->
          <input
            class="outline-none w-full"
            placeholder="Amount"
            type="text"
            v-model="gameStore.rechargeAmount"
          />
          <!---->
          <p class="text-paybill-secondary text-base font-bold">GHS</p>
        </div>
      </div>
      <!---->
      <div class="mb-10">
        <label class="font-meduim block text-base mb-2" for="country"
          >Mobile Number</label
        >
        <div
          class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 flex items-center gap-2"
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
            class="outline-none w-full"
            type="text"
            placeholder="mobile number"
            v-model="gameStore.mobileNumber"
          />
        </div>
      </div>
      <!---->
      <div>
        <button
          @click.prevent="Continue"
          class="2xl:w-[587px] w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full"
          type="submit"
        >
          Continue
        </button>
      </div>
    </div>
  </form>
</template>
