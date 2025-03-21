<script setup>
import ArrowDown from "../icons/common/arrowDown.vue";
</script>
<template>
  <div class="font-nunito">
    <div class="mb-5">
      <h2 class="font-bold text-lg mb-3">Pay for me</h2>
      <p class="text-sm">
        Enter the following details of the recipient you want to send the bill
        to?
      </p>
    </div>
    <!---->
    <div class="lg:flex items-center gap-5">
      <!---->
      <div class="mb-5">
        <label class="font-bold block text-base mb-2" for="firstName"
          >First Name</label
        >
        <div
          class="h-[58px] border rounded-lg px-5 flex items-center justify-between"
        >
          <!---->
          <input
            class="outline-none bg-transparent"
            placeholder="First Name"
            type="text"
          />
        </div>
      </div>
      <!---->
      <div class="mb-5">
        <label class="font-bold block text-base mb-2" for="lastName"
          >Last Name</label
        >
        <div
          class="h-[58px] border rounded-lg px-5 flex items-center justify-between"
        >
          <!---->
          <input
            class="outline-none bg-transparent"
            placeholder="Last Name"
            type="text"
          />
        </div>
      </div>
    </div>
    <!---->
    <div class="mb-5">
      <label class="font-bold block text-base mb-2" for="phoneNumber"
        >Phone Number</label
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
          class="outline-none bg-transparent w-full"
          type="text"
          placeholder="Phone Number"
        />
      </div>
    </div>
    <!---->
    <div class="mb-5">
      <label class="font-bold block text-base mb-2" for="Email"
        >Email Address</label
      >
      <div
        class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 flex items-center justify-between"
      >
        <!---->
        <input
          class="outline-none w-full bg-transparent"
          placeholder="Email Address"
          type="email"
        />
      </div>
    </div>
  </div>
</template>
