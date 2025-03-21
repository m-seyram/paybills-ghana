<script setup>
import wallet from "@/components/icons/common/wallet.vue";
</script>
<template>
  <div class="font-nunito">
    <div>
      <h2 class="text-base font-bold">Brij Wallet</h2>
      <!---->
      <div
        class="h-[89px] border mt-10 flex bg-white items-center px-3 gap-5 rounded-md shadow-sm"
      >
        <!---->
        <div
          class="w-[57px] h-[57px] rounded-full border flex items-center justify-center"
        >
          <wallet />
        </div>
        <!---->
        <div>
          <p class="font-medium text-sm">GHS 20,000.00</p>
          <p class="font-medium text-sm">Ghana</p>
        </div>
      </div>
      <!---->
      <div
        class="h-[89px] border mt-5 flex bg-white items-center px-3 gap-5 rounded-md shadow-sm"
      >
        <!---->
        <div
          class="w-[57px] h-[57px] rounded-full border flex items-center justify-center"
        >
          <wallet />
        </div>
        <!---->
        <div>
          <p class="font-medium text-sm">NGN</p>
          <p class="font-medium text-sm">Nigeria</p>
        </div>
      </div>
      <!---->
      <div
        class="h-[89px] border mt-5 flex bg-white items-center px-3 gap-5 rounded-md shadow-sm"
      >
        <!---->
        <div
          class="w-[57px] h-[57px] rounded-full border flex items-center justify-center"
        >
          <wallet />
        </div>
        <!---->
        <div>
          <p class="font-medium text-sm">KES Wallet</p>
          <p class="font-medium text-sm">Kenya</p>
        </div>
      </div>
    </div>
  </div>
</template>
