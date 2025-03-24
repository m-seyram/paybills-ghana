<script setup>
import { useRouter } from "vue-router";
import { toast } from "vue-sonner";
import DialogClose from "../ui/dialog/DialogClose.vue";

const router = useRouter();

function submit() {
  toast.success("Account is successfully Created and verified", {
    description: "You can make bill payment now :)",
  });
}
</script>
<template>
  <div>
    <div class="font-nunito">
      <!---->
      <h2 class="text-center font-bold text-3xl mb-5">Enter OTP</h2>
      <!---->
      <h3 class="text-base text-center">
        An OTP Code has been sent to
        <span class="text-paybill-secondary">johndoe@gmail.com.</span>
      </h3>
      <!---->
      <h4 class="text-base text-center mb-7">
        Enter the OTP to verify your account.
      </h4>
      <!--code box-->
      <form>
        <div class="flex items-center justify-center gap-2 w-full">
          <!---->
          <input
            maxlength="1"
            class="border text-3xl h-[84px] lg:w-[84px] w-[60px] rounded-lg outline-none focus:border-paybill-secondary text-center"
            type="password"
          />
          <!---->
          <input
            maxlength="1"
            class="border text-3xl h-[84px] lg:w-[84px] w-[60px] rounded-lg outline-none focus:border-paybill-secondary text-center"
            type="password"
          />
          <!---->
          <input
            maxlength="1"
            class="border text-3xl h-[84px] lg:w-[84px] w-[60px] rounded-lg outline-none focus:border-paybill-secondary text-center"
            type="password"
          />
          <!---->
          <input
            maxlength="1"
            class="border text-3xl h-[84px] lg:w-[84px] w-[60px] rounded-lg outline-none focus:border-paybill-secondary text-center"
            type="password"
          />
          <!---->
          <input
            maxlength="1"
            class="border text-3xl h-[84px] lg:w-[84px] w-[60px] rounded-lg outline-none focus:border-paybill-secondary text-center"
            type="password"
          />
        </div>
        <!---->
        <div>
          <DialogClose
            class="w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full mt-7"
            ><button @click.prevent="submit()" type="submit">
              Submit
            </button></DialogClose
          >
        </div>
      </form>
      <!---->
      <h3 class="text-base text-center mt-7">
        Didn’t receive OTP,
        <span class="text-paybill-secondary">Resend OTP</span>
      </h3>
    </div>
  </div>
</template>
