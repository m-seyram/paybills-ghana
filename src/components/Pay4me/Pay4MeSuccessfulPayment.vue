<script setup>
import successful from "../icons/common/successful.vue";
</script>
<template>
  <div class="font-nunito">
    <div class="flex items-center justify-center">
      <successful />
    </div>
    <!---->
    <div class="text-center">
      <p class="font-bold text-2xl mt-10">Billed Paid Successfully</p>
      <p class="text-lg mt-10">
        You have successfully paid a bill of
        <span class="font-bold">GHS 20.00</span> to
        <span class="font-bold">Electricity Company of Ghana </span> on behalf
        of <span class="font-bold">John Doe</span>. Recipient will be notified
        about the payment.
      </p>
    </div>
    <!---->
    <button
      @click.prevent=""
      class="w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full mt-10"
    >
      Done
    </button>
  </div>
</template>
