<script setup>
import { ref } from "vue";


</script>

<template>
    <!---->
    <div class="xl:w-[496px] w-full xl:h-20">
      <img class="object-cover w-full" src="@/assets/pay4me.png" alt="pay4me" />
    </div>
    <!---->
    <div>
      <h2 class="mt-5 font-bold text-base">Bill details</h2>
      <h3 class="mt-5 font-bold text-sm">Biller</h3>
    </div>
    <!---->
    <div class="mt-5 border h-[86px] rounded-md flex items-center gap-5 px-5">
      <!---->
      <div class="h-[53px] w-[53px] rounded-full border">
        <img
          class="h-[53px] w-[53px] object-scale-down"
          src="@/assets/summaryview/brij-wallet.png"
        />
      </div>
      <!---->
      <div>
        <h3 class="font-bold text-base">Biller Name</h3>
        <p class="text-sm">Biller ID</p>
      </div>
    </div>
    <!--bill information-->
    <div>
      <h3 class="font-bold text-sm mt-5 mb-5">Bill Information</h3>
      <!---->
      <div>
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">Bill Category</p>
          <!---->
          <p class="text-sm font-bold">Category</p>
        </div>
        <!---->
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">Bill Country</p>
          <!---->
          <p class="text-sm font-bold">Country</p>
        </div>
        <!---->
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">reference</p>
          <!---->
          <p class="text-sm font-bold">reference</p>
        </div>
        <!---->
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">Amount</p>
          <!---->
          <p class="text-sm font-bold">amount</p>
        </div>
        <!---->
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">Service Fee</p>
          <!---->
          <p class="text-sm font-bold">service fee</p>
        </div>
        <!---->
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">Total Amount</p>
          <!---->
          <p class="text-sm font-bold">total amount</p>
        </div>
      </div>
    </div>
    <!--  Sender details-->
    <div>
      <h3 class="font-bold text-sm mt-10 mb-5">Sender Details</h3>
      <!---->
      <div>
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">Name</p>
          <!---->
          <p class="text-sm font-bold">name</p>
        </div>
        <!---->
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">Phone Number</p>
          <!---->
          <p class="text-sm font-bold">number</p>
        </div>
        <!---->
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">reference</p>
          <!---->
          <p class="text-sm font-bold">reference</p>
        </div>
        <!---->
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">Email</p>
          <!---->
          <p class="text-sm font-bold">Email</p>
        </div>
        <!---->
        <div class="flex items-center justify-between mb-5">
          <p class="text-sm">Country</p>
          <!---->
          <p class="text-sm font-bold">country</p>
        </div>
      </div>
    </div>
   
</template>
