<script setup>
import { useRoute } from "vue-router";
import { electricityStore } from "@/stores/categories/electricityStore";
import { waterBillStore } from "@/stores/categories/waterBillStore";

const route = useRoute();
const storeType = route.params.storeType;

// Map stores to the corresponding store and labels
const storeMapping = {
  electricity: {
    store: electricityStore(),
    labels: {
      country: "Country",
      number: "Meter Number",
      operator: "Bill Type",
      amount: "Bill Amount",
    },
  },
  water: {
    store: waterBillStore(),
    labels: {
      country: "Country",
      number: "Meter Number",
      operator: "Bill Type",
      amount: "Bill Amount",
    },
  },
};

// Default store
if (!storeMapping[storeType]) {
  console.error(`Invalid storeType: ${storeType}`);
}

const { store, labels } = storeMapping[storeType] || {};
</script>

<template>
  <div class="font-nunito" v-if="store && labels">
    <h2 class="font-bold text-lg mb-10">Order Summary</h2>
    <div class="h-[323px] bg-white rounded-md lg:p-10 p-5">
      <!-- Country -->
      <div class="flex items-center justify-between mb-5">
        <p class="text-base">{{ labels.country }}</p>
        <p class="font-bold text-base">{{ store.selectedCountry?.text }}</p>
      </div>

      <!-- Number or Gamer ID -->
      <div class="flex items-center justify-between mb-5">
        <p class="text-base">{{ labels.number }}</p>
        <p class="font-bold text-base">
          <span
            v-if="labels.number === 'Mobile Phone'"
            class="text-paybill-secondary"
            >(+233)
          </span>
          {{ store.meterNumber || store.meterNumberWater }}
        </p>
      </div>

      <!-- Operator or Game -->
      <div class="flex items-center justify-between mb-5">
        <p class="text-base">{{ labels.operator }}</p>
        <p class="font-bold text-base">
          {{ store.selectedOperator?.text || store.selectedOperator?.text }}
        </p>
      </div>

      <!-- Number for electricity -->
      <div
        v-if="storeType === 'electricity'"
        class="flex items-center justify-between mb-5"
      >
        <p class="text-base">Mobile Number</p>
        <p class="font-bold text-base">
          {{ store.mobileNumber }}
        </p>
      </div>
      <!-- Number for water -->
      <div
        v-if="storeType === 'water'"
        class="flex items-center justify-between mb-5"
      >
        <p class="text-base">Mobile Number</p>
        <p class="font-bold text-base">
          {{ store.mobileNumberWater }}
        </p>
      </div>

      <!-- Amount -->
      <div class="flex items-center justify-between mb-10">
        <p class="text-base">{{ labels.amount }}</p>
        <p class="font-bold text-base">
          GHS
          {{ store.rechargeAmount || store.rechargeAmountWater }}
        </p>
      </div>

      <!-- Divider and Final Amount -->
      <div class="border border-dashed"></div>
      <div class="flex items-center justify-between mt-5">
        <p class="text-base">{{ labels.amount }}</p>
        <p class="font-bold text-base">
          <span class="text-paybill-secondary">GHS</span>
          {{ store.rechargeAmount || store.rechargeAmountWater }}
        </p>
      </div>
    </div>
  </div>
</template>
