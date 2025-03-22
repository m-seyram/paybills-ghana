<template>
  <footer class="bg-[#f5f5f5] pt-[140px] font-nunito">
    <div
      class="bg-white shadow-lg pt-[128px] lg:px-[220px] px-4 pb-[136px] relative flex flex-col items-center"
    >
      <img
        class="absolute w-[9.097vw] min-w-[90px] max-w-[131px] lg:top-[-66px] top-[-40px] mx-auto left-0 right-0"
        src="@/assets/PayBills-Africa-icon.png"
        alt="logo"
      />
      <div class="flex flex-col gap-[35px] iems-center max-w-[1000px]">
        <!---->
        <div
          class="flex flex-wrap justify-center lg:justify-start lg:px-16 px-4 w-full"
        >
          <!---->
          <div
            class="text-[14px] leading-[30px] text-center text-black lg:mr-[40px] mr-7 mb-[13px]"
          >
            <a href="/paybill">Home</a>
          </div>
          <!---->
          <div
            class="text-[14px] leading-[30px] text-center text-black lg:mr-[40px] mr-7 mb-[13px]"
          >
            <a href="/become-a-partner">Partners & Developers</a>
          </div>
          <!---->
          <div
            class="text-[14px] leading-[30px] text-center text-black lg:mr-[40px] mr-7 mb-[13px]"
          >
            <a href="/contact-us">Contact</a>
          </div>
          <!---->
          <div
            class="text-[14px] leading-[30px] text-center text-black lg:mr-[40px] mr-7 mb-[13px]"
          >
            <router-link to="/suggest-biller">Suggest A Biller</router-link>
          </div>
        </div>
        <!---->
        <div class="w-full border-t border-[#ABB4BD]"></div>
        <!---->
        <div class="flex flex-wrap justify-center lg:px-16 px-4 w-full">
          <!---->
          <div
            class="text-[14px] leading-[30px] text-center text-black lg:mr-[40px] mr-7 mb-[13px]"
          >
            ©️ 2020 - 2025
          </div>
          <!---->
          <div
            class="text-[14px] leading-[30px] text-center text-black lg:mr-[40px] mr-7 mb-[13px]"
          >
            <a href="">Privacy Policy</a>
          </div>
          <!---->
          <div
            class="text-[14px] leading-[30px] text-center text-black lg:mr-[40px] mr-7 mb-[13px]"
          >
            <a href="">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
