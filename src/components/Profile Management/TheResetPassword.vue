<script setup>
import Eye from "../icons/common/eye.vue";
</script>
<template>
  <form action="">
    <div class="mt-10 font-nunito mx-auto container max-w-5xl">
      <h2 class="font-bold text-lg mb-10 pt-5 xl:pt-0">Change Password</h2>
      <!---->
      <div class="mt-5">
        <label class="font-meduim block text-base mb-2" for="country"
          >Current Password</label
        >
        <div class="h-[58px] xl:w-[527px] border rounded-lg px-5 pt-4">
          <!---->
          <div class="flex justify-between items-center">
            <!---->
            <input
              class="w-full outline-none"
              type="password"
              placeholder="Current Password"
            />
            <!---->
            <div class="cursor-pointer"><Eye /></div>
          </div>
        </div>
      </div>
      <!---->
      <div class="mt-7">
        <label class="font-meduim block text-base mb-2" for="country"
          >New Password</label
        >
        <div class="h-[58px] xl:w-[527px] border rounded-lg px-5 pt-4">
          <!---->
          <div class="flex justify-between items-center">
            <!---->
            <input
              class="w-full outline-none"
              type="password"
              placeholder="New Password"
            />
            <!---->
            <div class="cursor-pointer"><Eye /></div>
          </div>
        </div>
      </div>
      <!---->
      <div class="mt-7">
        <label class="font-meduim block text-base mb-2" for="country"
          >Confirm New Password</label
        >
        <div class="h-[58px] xl:w-[527px] border rounded-lg px-5 pt-4">
          <!---->
          <div class="flex justify-between items-center">
            <!---->
            <input
              class="w-full outline-none"
              type="password"
              placeholder="Confirm New Password"
            />
            <!---->
            <div class="cursor-pointer"><Eye /></div>
          </div>
        </div>
      </div>
      <!---->
      <div>
        <button
          class="xl:w-[527px] w-[227px] mb-5 xl:mb-0 h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full mt-10"
          type="button"
        >
          Update Password
        </button>
      </div>
    </div>
  </form>
</template>
