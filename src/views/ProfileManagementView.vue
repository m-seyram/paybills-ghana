<script setup>
import Account from "@/components/icons/common/account.vue";
import ThePaymentMethods from "@/components/Profile Management/ThePaymentMethods.vue";
import TheResetPassword from "@/components/Profile Management/TheResetPassword.vue";
import TheTransactionHistory from "@/components/Profile Management/TheTransactionHistory.vue";
import TheUpdateProfile from "@/components/Profile Management/TheUpdateProfile.vue";
import { CreditCard, List, LockKeyhole } from "lucide-vue-next";
import { ref } from "vue";

const activeButton = ref(0);
const activeSection = ref(0);

const setActive = (index) => {
  activeButton.value = index;
  activeSection.value = index;
};
</script>

<template>
  <div class="mt-24 container mx-auto max-w-[1408px] px-5 2xl:px-0 font-nunito">
    <!--col 1-->
    <div class="lg:flex items-center">
      <!--categories-->
      <div class="xl:h-[683px] lg:w-[230px] rounded-md">
        <!---->
        <div>
          <ul
            class="space-y-2 flex xl:flex-col space-x-10 xl:space-x-0 pb-5 xl:pb-0 items-center overflow-x-auto xl:overflow-x-hidden"
          >
            <!---->
            <li
              @click="setActive(0)"
              :class="[
                'flex items-center px-1 hover:bg-[#F9AB10] h-[49px] w-[170px] rounded-md cursor-pointer mt-2 xl:mt-0',
                {
                  'bg-[#F9AB10]': activeButton === 0,
                  '': activeButton !== 0,
                },
              ]"
            >
              <p
                class="text-sm text-nowrap flex items-center justify-center gap-2"
              >
                <Account /> Personal Information
              </p>
            </li>
            <!---->
            <li
              @click="setActive(1)"
              :class="[
                'flex items-center px-2  hover:bg-[#F9AB10] h-[49px] w-[170px]  rounded-md cursor-pointer',
                {
                  'bg-[#F9AB10]': activeButton === 1,
                  '': activeButton !== 1,
                },
              ]"
            >
              <p
                class="text-sm text-nowrap flex items-center justify-center gap-2"
              >
                <List />
                Transaction History
              </p>
            </li>
            <!---->
            <li
              @click="setActive(2)"
              :class="[
                'flex items-center px-2 hover:bg-[#F9AB10] h-[49px] w-[170px]  rounded-md cursor-pointer',
                {
                  'bg-[#F9AB10]': activeButton === 2,
                  '': activeButton !== 2,
                },
              ]"
            >
              <p
                class="text-sm text-nowrap flex items-center justify-center gap-2"
              >
                <LockKeyhole />
                Change Password
              </p>
            </li>
            <!---->
            <li
              @click="setActive(3)"
              :class="[
                'flex items-center px-2 hover:bg-[#F9AB10] h-[49px] w-[170px]  rounded-md cursor-pointer',
                {
                  'bg-[#F9AB10]': activeButton === 3,
                  '': activeButton !== 3,
                },
              ]"
            >
              <p
                class="text-sm text-nowrap flex items-center justify-center gap-2"
              >
                <CreditCard />
                Payment Method
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!--main content-->
      <div
        class="xl:h-[683px] lg:w-full bg-white mt-5 lg:mt-0 rounded-md shadow-md xl:overflow-y-auto"
      >
        <div v-if="activeSection === 0"><TheUpdateProfile /></div>
        <div v-if="activeSection === 1"><TheTransactionHistory /></div>
        <div v-if="activeSection === 2"><TheResetPassword /></div>
        <div v-if="activeSection === 3"><ThePaymentMethods /></div>
      </div>
    </div>
  </div>
</template>
