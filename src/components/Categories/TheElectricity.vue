<script setup>
//import { ref } from "vue";
import ArrowDown from "../icons/common/arrowDown.vue";
import TheCustomDropdown from "../common/TheCustomDropdown.vue";
import { useRouter } from "vue-router";
import { electricityStore } from "@/stores/categories/electricityStore";
import { useAuthStore } from "@/stores/Auth/authStore";
import { toast } from "vue-sonner";

const router = useRouter();
const authStore = useAuthStore();
const electricStore = electricityStore();

function Continue() {
  if (!authStore.isAuthenticated) {
    toast.warning("Access Denied", {
      description: "You need to log in first to make transactions",
    });
    return;
  }

  router.push("/summary/electricity");
}
</script>

<template>
  <form @submit.prevent="Continue">
    <div class="p-3 2xl:pl-10 pl-5 font-nunito">
      <h2 class="font-bold text-lg mb-10">Pay Electricity Bill</h2>
      <!---->
      <div class="mb-10">
        <label class="font-meduim block text-base mb-2" for="country"
          >Bill Operator</label
        >
        <div class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 pt-2">
          <div class="relative">
            <!-- Custom Dropdown -->
            <TheCustomDropdown
              v-model:selectedOption="electricStore.selectedOperator"
            />
          </div>
        </div>
      </div>
      <!---->
      <div class="mb-10">
        <label class="font-meduim block text-base mb-2" for="meterNumber"
          >Meter Number</label
        >
        <div
          class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 flex items-center justify-between"
        >
          <!---->
          <input
            class="outline-none w-full"
            placeholder="Meter Number"
            type="text"
            v-model="electricStore.meterNumber"
          />
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
            v-model="electricStore.mobileNumber"
          />
        </div>
      </div>
      <!---->
      <div class="mb-10">
        <label class="font-meduim block text-base mb-2" for="country"
          >Recharge Amount</label
        >
        <div
          class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 flex items-center justify-between"
        >
          <!---->
          <input
            class="outline-none w-full"
            placeholder="Recharge Amount"
            type="text"
            v-model="electricStore.rechargeAmount"
          />
          <!---->
          <p class="text-paybill-secondary text-base font-bold">GHS</p>
        </div>
      </div>
      <!---->
      <!---->
      <div>
        <button
          class="2xl:w-[587px] w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full"
          type="submit"
        >
          Continue
        </button>
      </div>
    </div>
  </form>
</template>
