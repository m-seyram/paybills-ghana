<script setup>
import Pay4MeSuccessfulPayment from "@/components/Pay4me/Pay4MeSuccessfulPayment.vue";
import TheBillDetails from "@/components/Pay4me/TheBillDetails.vue";
import ThePay4MeSummary from "@/components/Pay4me/ThePay4MeSummary.vue";
import ThePaymentSource from "@/components/Transactions/ThePaymentSource.vue";
import { ref } from "vue";

const newscreen = ref(true);
const show = () => {
  newscreen.value = false;
};

const summaryscreen = ref(true);
const showSummary = () => {
  summaryscreen.value = false;
};
</script>
<template>
  <!--Nav-->
  <div class="sticky z-10 top-0">
    <div class="w-full bg-white h-20 flex items-center font-nunito">
      <div class="container mx-auto max-w-[1408px]">
        <img class="object-cover" src="../assets//logo.png" alt="logo" />
      </div>
    </div>
  </div>
  <!--Content-->
  <div class="container mx-auto max-w-[1408px] mt-12 mb-12">
    <div class="xl:flex items-center gap-5">
      <!--pay4me receipt-->
      <div
        v-if="summaryscreen"
        class="xl:w-[551px] w-full h-auto bg-white rounded-md shadow-md p-7"
      >
        <TheBillDetails />
        <!---->
        <div>
          <button
            @click.prevent="showSummary"
            class="w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full xl:hidden block"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>

      <!--pay4me paymentmethod-->
      <div
        class="w-full shadow-md lg:h-auto bg-white rounded-md lg:p-2 font-nunito mt-5 xl:mt-0"
        :class="{ hidden: summaryscreen, 'xl:block': true }"
      >
        <div class="h-auto bg-[#FAFAFA] rounded-md xl:p-7 p-3">
          <div v-if="newscreen">
            <h3 class="font-bold text-base mb-10">Pay Bill</h3>
            <ThePaymentSource />
            <!--Mini summary-->
            <ThePay4MeSummary />
          </div>
          <div v-else>
            <Pay4MeSuccessfulPayment />
          </div>
          <!---->
          <div>
            <button
              v-if="newscreen"
              @click.prevent="show"
              class="w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full"
              type="submit"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
