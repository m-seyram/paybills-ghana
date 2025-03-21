<script setup>
import successful from "../icons/common/successful.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goHome() {
  router.push("/");
}
</script>
<template>
  <div class="font-nunito">
    <div class="flex items-center justify-center">
      <successful />
    </div>
    <!---->
    <div class="text-center">
      <p class="font-bold text-2xl mt-10">Billed Paid Successfully</p>
      <!--<p class="text-lg mt-10">
        You have successfully purchased airtime of
        <span class="font-bold">GHS 20.00</span> to
        <span class="font-bold">+2330553487654 </span> from
        <span span class="font-bold">MTN Ghana</span>
      </p>-->
    </div>
    <!---->
    <button
      class="2xl:w-[587px] w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full mt-10"
    >
      View transactions
    </button>
    <button
      @click.prevent="goHome"
      class="2xl:w-[587px] w-full h-[58px] font-bold text-base text-paybill-primary bg-transparent border-paybill-primary border-2 rounded-full hover:bg-transparent mt-5"
    >
      Back to home
    </button>
  </div>
</template>
