<script setup>
import TheGaming from "@/components/Categories/TheGaming.vue";
import ThePaymentContainer from "@/components/Homeview/ThePaymentContainer.vue";
import TheSecurityContainer from "@/components/Homeview/TheSecurityContainer.vue";
import TheSocialsContainer from "@/components/Homeview/TheSocialsContainer.vue";
import Education from "@/components/icons/categories/education.vue";
import Electricity from "@/components/icons/categories/electricity.vue";
import PaidTv from "@/components/icons/categories/paidTv.vue";
import Clock from "@/components/icons/home/clock.vue";
import Facebook from "@/components/icons/home/facebook.vue";
import Instagram from "@/components/icons/home/instagram.vue";
import LinkedIn from "@/components/icons/home/linkedIn.vue";
import Lock from "@/components/icons/home/lock.vue";
import ThumbsUp from "@/components/icons/home/thumbs-up.vue";
import Twitter from "@/components/icons/home/twitter.vue";

import { ref } from "vue";
import TheElectricity from "@/components/Categories/TheElectricity.vue";
import TheWaterBill from "@/components/Categories/TheWaterBill.vue";
import Wifi from "@/components/icons/categories/wifi.vue";
import Mobile from "@/components/icons/categories/mobile.vue";

const activeButton = ref(0);
const activeSection = ref(0);

const setActive = (index) => {
  activeButton.value = index;
  activeSection.value = index;
};
</script>

<template>
  <main
    class="mt-24 container mx-auto max-w-[1408px] px-5 2xl:px-0 font-nunito"
  >
    <div class="">
      <!--col 1-->
      <div class="lg:flex items-center gap-2">
        <!--categories-->
        <div
          class="xl:h-[683px] lg:w-[330px] xl:bg-white rounded-md xl:shadow-md"
        >
          <h2 class="px-7 pt-5 text-sm xl:pb-10 pb-2">Categories</h2>
          <!---->
          <div>
            <ul
              class="px-10 space-y-2 flex xl:flex-col space-x-10 xl:space-x-0 pb-5 xl:pb-0 items-center overflow-x-auto xl:overflow-x-hidden"
            >
              <!---->
              <li
                @click="setActive(0)"
                :class="[
                  'flex items-center gap-2 hover:bg-[#FFF5E2] h-[49px] w-[270px] hover:px-5 rounded-md cursor-pointer text-nowrap',
                  {
                    'bg-[#FFF5E2] px-4': activeButton === 0,
                    '': activeButton !== 0,
                  },
                ]"
              >
                <Electricity />
                <p class="text-sm">Electricity</p>
              </li>
              <!---->
              <li
                @click="setActive(1)"
                :class="[
                  'flex items-center gap-2 hover:bg-[#FFF5E2] h-[49px] w-[270px] hover:px-5 rounded-md cursor-pointer text-nowrap',
                  {
                    'bg-[#FFF5E2] px-4': activeButton === 1,
                    '': activeButton !== 1,
                  },
                ]"
              >
                <PaidTv />
                <p class="text-sm">Water Bill</p>
              </li>
              <!---->
              <li
                @click="setActive(2)"
                :class="[
                  'flex items-center gap-2 hover:bg-[#FFF5E2] h-[49px] w-[270px] hover:px-5 rounded-md cursor-pointer text-nowrap',
                  {
                    'bg-[#FFF5E2] px-4': activeButton === 2,
                    '': activeButton !== 2,
                  },
                ]"
              >
                <Education />
                <p class="text-sm">Passport Service</p>
              </li>
              <!---->
              <li
                @click="setActive(3)"
                :class="[
                  'flex items-center gap-2 hover:bg-[#FFF5E2] h-[49px] w-[270px] hover:px-5 rounded-md cursor-pointer text-nowrap',
                  {
                    'bg-[#FFF5E2] px-4': activeButton === 3,
                    '': activeButton !== 3,
                  },
                ]"
              >
                <Wifi />
                <p class="text-sm">GRA Services</p>
              </li>
              <!---->
              <li
                @click="setActive(4)"
                :class="[
                  'flex items-center gap-2 hover:bg-[#FFF5E2] h-[49px] w-[270px] hover:px-5 rounded-md cursor-pointer text-nowrap',
                  {
                    'bg-[#FFF5E2] px-4': activeButton === 4,
                    '': activeButton !== 4,
                  },
                ]"
              >
                <Mobile />
                <p class="text-sm">Immigration Services</p>
              </li>
            </ul>
          </div>
        </div>
        <!--main content-->
        <div
          class="xl:h-[683px] lg:w-[686px] bg-white mt-5 lg:mt-0 rounded-md shadow-md xl:overflow-y-auto"
        >
          <div v-if="activeSection === 0"><TheElectricity /></div>
          <div v-if="activeSection === 1"><TheWaterBill /></div>
          <div v-if="activeSection === 2"><TheGaming /></div>
        </div>
        <!--Ads-->
        <div
          class="lg:flex-row items-center justify-between mt-5 lg:mt-0 space-y-1"
        >
          <!---->
          <div class="h-[280px] lg:w-[375px] w-full rounded-md shadow-md">
            <img
              class="h-[280px] lg:w-[375px] w-full object-cover rounded-md shadow-md"
              src="../assets//homeview/oldlady.png"
              alt="old-lady"
            />
          </div>
          <!---->
          <div
            class="h-[398px] lg:w-[375px] w-full mt-5 lg:mt-0 rounded-md shadow-md"
          >
            <img
              class="h-[398px] lg:w-[375px] w-full object-cover rounded-md shadow-md"
              src="../assets//homeview/ladyphone.png"
              alt="lady-phone"
            />
          </div>
        </div>
      </div>
      <!--Security-->
      <div class="bg-white lg:h-[261px] w-full mt-5 rounded-md shadow-md mb-5">
        <div
          class="md:flex p-12 items-center justify-evenly text-center gap-36"
        >
          <!---->
          <TheSecurityContainer
            title="100% Secure Payment"
            content="Moving your card details to a much secure place"
            ><Lock
          /></TheSecurityContainer>

          <!---->
          <TheSecurityContainer
            title="Trust Pay"
            content="100% Payment Protection. Easy Payment Return Policy"
            ><ThumbsUp
          /></TheSecurityContainer>
          <!---->
          <TheSecurityContainer
            title="24 X &7 Support"
            content="We are here to help. Have a query and need help? Click here"
            ><Clock
          /></TheSecurityContainer>
        </div>
      </div>
      <!--Brij mobile-->
      <div class="bg-white lg:h-[470px] w-full mt-5 rounded-md shadow-md mb-5">
        <div
          class="lg:flex items-center justify-between gap-20 pt-[70px] lg:px-32"
        >
          <!---->
          <div class="flex justify-center lg:justify-normal lg:flex-none">
            <div
              class="lg:w-[408px] lg:h-[400px] bg-[#FFEFCE] flex justify-center pt-[50px] rounded-t-[40px]"
            >
              <img
                class="h-[350px]"
                src="../assets/homeview/brij-mobile.png"
                alt="brij-mobile"
              />
            </div>
          </div>
          <!---->
          <div class="pb-5 lg:pb-0">
            <h2
              class="font-bold text-4xl text-center lg:text-start mt-5 lg:mt-0"
            >
              Download the <span class="text-[#D9B228]">Brj App</span> Today
            </h2>
            <p class="mt-5 text-base font-meduim text-center lg:text-start">
              Access the power of Remittance and Bill Payment at your fingertips
              with the Brij mobile app. Seamlessly Pay bills across Africa, Send
              Money and manage your transactions on the go. Simplify bill
              payment and remittance across Africa with the Brij App today!
            </p>
            <!---->
            <div class="flex justify-center lg:flex-none lg:justify-start">
              <div class="mt-7 lg:flex items-center gap-10">
                <!---->
                <button
                  class="bg-black flex gap-1 items-center lg:w-[221px] w-full h-[74px] rounded-lg px-3 mb-5 lg:mb-0"
                >
                  <img
                    class="h-12"
                    src="../assets/homeview/android.png"
                    alt="android"
                  />
                  <div>
                    <h3
                      class="uppercase text-white font-medium text-sm text-left"
                    >
                      get it on
                    </h3>
                    <p class="text-white font-bold">Google Play Store</p>
                  </div>
                </button>
                <!---->
                <button
                  class="bg-black flex gap-2 items-center lg:w-[221px] w-full h-[74px] rounded-lg px-3"
                >
                  <img
                    class="h-12"
                    src="../assets/homeview/apple.png"
                    alt="android"
                  />
                  <div>
                    <h3
                      class="uppercase text-white font-medium text-sm text-left"
                    >
                      get it on
                    </h3>
                    <p class="text-white font-bold">App Store</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Payments and Socials-->
      <div class="mt-12 mb-10">
        <div class="lg:flex items center justify-between">
          <!---->
          <div>
            <h3 class="font-bold text-xl">Payments</h3>
            <div class="flex items-center gap-4 mt-5">
              <!---->
              <ThePaymentContainer class="pt-2"
                ><img
                  class="h-12"
                  src="../assets//homeview/Mastercard.png"
                  alt="Mastercard"
              /></ThePaymentContainer>

              <!---->
              <ThePaymentContainer class="pt-5"
                ><img
                  class="h-7"
                  src="../assets/homeview/visa-logo.png"
                  alt="visa"
              /></ThePaymentContainer>
              <!---->
              <ThePaymentContainer class="pt-2"
                ><img
                  class="h-12"
                  src="../assets//homeview/telecel-ghana.png"
                  alt="telecel"
              /></ThePaymentContainer>
              <!---->
              <ThePaymentContainer class="pt-2"
                ><img class="h-12" src="../assets//homeview/mtn.png" alt="mtn"
              /></ThePaymentContainer>

              <!---->
              <ThePaymentContainer class="pt-2"
                ><img
                  class="h-14"
                  src="../assets/homeview/airtelTigo.png"
                  alt="airtelTigo"
              /></ThePaymentContainer>

              <!---->
              <ThePaymentContainer class="pt-5"
                ><img
                  class="h-10"
                  src="../assets/homeview/brij-wallet.png"
                  alt="brij-wallet"
              /></ThePaymentContainer>
            </div>
          </div>
          <!---->
          <div>
            <h3 class="font-bold text-xl lg:text-right mt-5 lg:mt-0">
              Socials
            </h3>
            <div class="flex items-center gap-4 mt-5">
              <!---->
              <TheSocialsContainer class="pt-[14px]"
                ><Facebook
              /></TheSocialsContainer>
              <!---->
              <TheSocialsContainer class="pt-4"
                ><Twitter
              /></TheSocialsContainer>
              <!---->
              <TheSocialsContainer class="pt-3"
                ><Instagram
              /></TheSocialsContainer>
              <!---->
              <TheSocialsContainer class="pt-3"
                ><LinkedIn
              /></TheSocialsContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
