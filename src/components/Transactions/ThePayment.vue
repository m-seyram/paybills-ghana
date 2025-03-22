<script setup>
import { useRoute } from "vue-router";
import ThePaymentSource from "./ThePaymentSource.vue";
import { electricityStore } from "@/stores/categories/electricityStore";
import { waterBillStore } from "@/stores/categories/waterBillStore";
import { passportStore } from "@/stores/categories/passportStore";

const route = useRoute();
const storeType = route.params.storeType;

// Map stores to the corresponding store and labels
const storeMapping = {
  electricity: {
    store: electricityStore(),
  },
  water: {
    store: waterBillStore(),
  },
  passport: {
    store: passportStore(),
  },
};

// Default store
if (!storeMapping[storeType]) {
  console.error(`Invalid storeType: ${storeType}`);
}

const { store, labels } = storeMapping[storeType] || {};
</script>
<template>
  <div class="font-nunito">
    <div class="bg-white h-[200px] rounded-md mb-10">
      <div>
        <!---->
        <div class="lg:p-10 p-5">
          <!---->
          <div class="flex items-center justify-between mb-5">
            <p class="text-base">Recharge Amount</p>
            <p class="font-bold text-base">
              <span class="text-paybill-secondary">GHS</span>
              {{
                store.rechargeAmount ||
                store.rechargeAmountWater ||
                store.passportPrice
              }}
            </p>
          </div>
          <!---->
          <div class="flex items-center justify-between mb-5">
            <p class="text-base">Fee</p>
            <p class="font-bold text-base">0.00</p>
          </div>
          <!---->
          <div class="border border-dashed"></div>
          <div class="flex items-center justify-between mt-5">
            <p class="text-base">Payment Amount</p>
            <p class="font-bold text-base">
              <span class="text-paybill-secondary">GHS</span>
              {{
                store.rechargeAmount ||
                store.rechargeAmountWater ||
                store.passportPrice
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--Payment Source-->
    <ThePaymentSource />
  </div>
</template>
