<script setup>
import successful from "@/components/icons/common/successful.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goHome() {
  router.push("/");
}
</script>
<template>
  <div class="font-nunito mt-10 mb-10">
    <div class="flex items-center justify-center">
      <successful />
    </div>
    <!---->
    <div class="text-center">
      <p class="font-bold text-2xl mt-10">Request sent Successfully</p>
      <p class="text-lg mt-10">
        Our Team will review the request and add biller to the list. Keep Using
        Paybills Ghana
      </p>
    </div>
    <!---->
    <div class="text-center">
      <button
        @click.prevent="goHome"
        class="2xl:w-[587px] w-full h-[58px] font-bold text-base text-paybill-primary bg-transparent border-paybill-primary border-2 rounded-full hover:bg-transparent mt-5"
      >
        Back to home
      </button>
    </div>
  </div>
</template>
