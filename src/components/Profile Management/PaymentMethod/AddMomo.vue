<script setup>
import { ref } from "vue";
import TheCustomDropdown from "@/components/common/TheCustomDropdown.vue";
import ArrowDown from "@/components/icons/common/arrowDown.vue";
import mtnImage from "@/assets/paymentmethods/momo-mtn.png";
import telecelImage from "@/assets/paymentmethods/telecel-cash.png";
import airteltigoImage from "@/assets/paymentmethods/at-money.png";
import ghanaImage from "@/assets/ghana.png";
import nigeriaImage from "@/assets/nigeria.png";
import kenyaImage from "@/assets/kenya.png";

const dropdownOption = [
  {
    image: mtnImage,
    text: "MTN Mobile Money Ghana",
  },
  {
    image: telecelImage,
    text: "Telecel Cash",
  },
  {
    image: airteltigoImage,
    text: "AirtelTigo Cash",
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
const selectedCountry = ref(country[0]);
const selectedImage = ref(dropdownOption[0]);
</script>

<template>
  <form>
    <div class="font-nunito">
      <!---->
      <div class="mb-5">
        <label class="font-meduim block text-base mb-2" for="country"
          >Country</label
        >
        <div class="h-[58px] w-full border rounded-lg px-5 pt-2">
          <div class="relative">
            <!-- Custom Dropdown -->
            <TheCustomDropdown
              :options="country"
              v-model:selectedOption="selectedCountry"
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
        <label class="font-meduim block text-base mb-2" for="country"
          >Mobile money provider</label
        >
        <div class="h-[58px] w-full border rounded-lg px-5 pt-2">
          <div class="relative">
            <!-- Custom Dropdown -->
            <TheCustomDropdown
              :options="dropdownOption"
              v-model:selectedOption="selectedImage"
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
        <label class="font-meduim block text-base mb-2" for="country"
          >Phone number</label
        >
        <div
          class="h-[58px] w-full border rounded-lg px-5 flex items-center gap-2"
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
            placeholder="Phone number"
          />
        </div>
      </div>
      <!---->
      <div class="mb-5">
        <label class="font-meduim block text-base mb-2" for="country"
          >Name on wallet</label
        >
        <div class="h-[58px] w-full border rounded-lg px-5 flex items-center">
          <!---->
          <input
            class="outline-none w-full"
            placeholder="Name on wallet"
            type="text"
          />
        </div>
      </div>
      <!---->
      <div class="flex items-center justify-center gap-5 pb-10">
        <!---->
        <button
          class="border-[1.5px] text-paybill-primary border-paybill-secondary h-11 w-full rounded-full font-bold text-base"
        >
          Cancel
        </button>
        <!---->

        <button
          class="text-paybill-primary bg-paybill-secondary h-11 w-full rounded-full font-bold text-base mb-3 xl:mb-0"
        >
          Save Wallet
        </button>
      </div>
    </div>
  </form>
</template>
