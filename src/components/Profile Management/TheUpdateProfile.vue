<script setup>
import ArrowDown from "../icons/common/arrowDown.vue";
</script>
<template>
  <form action="">
    <div class="mt-10 font-nunito mx-auto container max-w-5xl">
      <h2 class="font-bold text-lg mb-10 pt-5 xl:pt-0">Personal Information</h2>
      <!--Names-->
      <div class="xl:flex gap-10 mb-10">
        <!---->
        <div class="mt-5">
          <label class="font-meduim block text-base mb-2" for="country"
            >First name</label
          >
          <div class="h-[58px] xl:w-[395px] border rounded-lg px-5 pt-4">
            <!---->
            <input
              class="w-full outline-none"
              type="text"
              placeholder="First name"
            />
          </div>
        </div>
        <!---->
        <div class="mt-5">
          <label class="font-meduim block text-base mb-2" for="country"
            >Last name</label
          >
          <div class="h-[58px] xl:w-[395px] border rounded-lg px-5 pt-4">
            <!---->
            <input
              class="w-full outline-none"
              type="text"
              placeholder="last name"
            />
          </div>
        </div>
      </div>
      <!---->
      <div class="mb-10">
        <label class="font-meduim block text-base mb-2" for="country"
          >Mobile Number</label
        >
        <div
          class="2xl:w-[587px] h-[58px] xl:min-w-[830px] border rounded-lg px-5 flex items-center gap-2"
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
            class="outline-none w-full"
            type="text"
            placeholder="mobile number"
          />
        </div>
      </div>
      <!---->
      <div class="mt-5">
        <label class="font-meduim block text-base mb-2" for="country"
          >Email</label
        >
        <div class="h-[58px] xl:w-[830px] border rounded-lg px-5 pt-4">
          <!---->
          <input
            class="w-full outline-none"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <!---->
        <div>
          <button
            class="xl:w-[830px] w-[227px] mb-5 xl:mb-0 h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full mt-12"
            type="button"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
