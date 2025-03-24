<script setup>
//import { ref } from "vue";
import ArrowDown from "../icons/common/arrowDown.vue";
import { useRouter } from "vue-router";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { passportStore } from "@/stores/categories/passportStore";
import { useAuthStore } from "@/stores/Auth/authStore";
import { toast } from "vue-sonner";

const router = useRouter();
const authStore = useAuthStore();
const usePassportStore = passportStore();

function Continue() {
  if (!authStore.isAuthenticated) {
    toast.warning("Access Denied", {
      description: "You need to log in first to make transactions",
    });
    return;
  }

  router.push("/summary/passport");
}
</script>

<template>
  <form @submit.prevent="Continue">
    <div class="p-3 2xl:pl-10 pl-5 font-nunito">
      <h2 class="font-bold text-lg mb-5">Passport Service</h2>

      <!-- First Name -->
      <div class="mb-5">
        <label class="font-medium block text-base mb-2" for="first-name"
          >First Name</label
        >
        <div
          class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 flex items-center"
        >
          <input
            v-model="usePassportStore.firstName"
            class="outline-none w-full"
            placeholder="First Name"
            type="text"
          />
        </div>
      </div>

      <!-- Last Name -->
      <div class="mb-5">
        <label class="font-medium block text-base mb-2" for="last-name"
          >Last Name</label
        >
        <div
          class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 flex items-center"
        >
          <input
            v-model="usePassportStore.lastName"
            class="outline-none w-full"
            placeholder="Last Name"
            type="text"
          />
        </div>
      </div>

      <!-- Email Address -->
      <div class="mb-5">
        <label class="font-medium block text-base mb-2" for="email"
          >Email Address</label
        >
        <div
          class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 flex items-center"
        >
          <input
            v-model="usePassportStore.email"
            class="outline-none w-full"
            placeholder="Email Address"
            type="email"
          />
        </div>
      </div>

      <!-- Mobile Number -->
      <div class="mb-5">
        <label class="font-medium block text-base mb-2" for="mobile"
          >Mobile Number</label
        >
        <div
          class="2xl:w-[587px] h-[58px] w-full border rounded-lg px-5 flex items-center gap-2"
        >
          <div class="relative">
            <select
              v-model="usePassportStore.countryCode"
              class="bg-white border-none pr-8 appearance-none text-base cursor-pointer"
            >
              <option value="+233">🇬🇭 +233</option>
              <option value="+234">🇳🇬 +234</option>
              <option value="+254">🇰🇪 +254</option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <ArrowDown />
            </div>
          </div>
          <input
            v-model="usePassportStore.mobileNumber"
            class="outline-none w-full"
            type="text"
            placeholder="Mobile Number"
          />
        </div>
      </div>

      <!-- Passport Selection -->
      <RadioGroup v-model="usePassportStore.selectedOption">
        <div class="flex items-center gap-20 mb-5">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r1" value="Standard Application 48 pages" />
            <Label for="r1">Standard Application 48 pages</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r2" value="Standard Application 32 pages" />
            <Label for="r2">Standard Application 32 pages</Label>
          </div>
        </div>
      </RadioGroup>

      <!-- Display Price -->
      <div class="mb-5" v-if="usePassportStore.selectedOption">
        <p class="text-lg font-medium">
          <span class="text-paybill-secondary font-bold">GHS</span>
          {{ usePassportStore.passportPrice }}
        </p>
      </div>

      <!-- Continue Button -->
      <div>
        <button
          @click.prevent="Continue"
          class="2xl:w-[587px] w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full"
          type="submit"
        >
          Continue
        </button>
      </div>
    </div>
  </form>
</template>
