<script setup>
import { ref } from "vue";
import TheCustomDropdown from "../common/TheCustomDropdown.vue";
import ArrowDown from "../icons/common/arrowDown.vue";
import TheCardPayment from "./PaymentMethods/TheCardPayment.vue";
import cardImage from "@/assets/summaryview/card-broken.png";
import phoneImage from "@/assets/summaryview/phone.png";
const paymentOptions = [
  {
    image: cardImage,
    text: "Select Payment Method",
  },
  {
    image: cardImage,
    text: "Card Payment",
  },
  {
    image: phoneImage,
    text: "Apple Pay",
  },
];

const selectedPaymentOption = ref(paymentOptions[0]);
</script>

<template>
  <div>
    <div>
      <!---->
      <div class="mb-5">
        <label class="font-meduim block text-base mb-2" for="payment source"
          >Payment Source</label
        >
        <div class="2xl:w-auto h-[58px] w-full border rounded-lg px-5 pt-2">
          <div class="relative">
            <!-- Custom Dropdown -->
            <TheCustomDropdown
              :options="paymentOptions"
              v-model:selectedOption="selectedPaymentOption"
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
      <div v-if="selectedPaymentOption.text === 'Select Payment Method'">
        <div></div>
      </div>
      <!---->
      <div v-if="selectedPaymentOption.text === 'Card Payment'">
        <TheCardPayment />
      </div>
      <!---->
      <div v-if="selectedPaymentOption.text === 'Apple Pay'">
        <!--todo add apple pay component-->
      </div>
    </div>
  </div>
</template>
