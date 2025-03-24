<script setup>
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import { signUpSchema } from "@/utils/validations/auth";
import Eye from "../icons/common/eye.vue";
import { EyeOff } from "lucide-vue-next";
import TheOtp from "./TheOtp.vue";
import { useAuthStore } from "@/stores/Auth/authStore";
import { toast } from "vue-sonner";

const switchScreen = ref(false);
const authStore = useAuthStore();
const showPassword = ref(false);
const showConfirmPassword = ref(false);
//Sign Up
const { handleSubmit } = useForm({
  validationSchema: signUpSchema,
});

const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: confirmPassword, errorMessage: confirmPasswordError } =
  useField("confirmPassword");
const { value: termsAccepted, errorMessage: termsError } =
  useField("termsAccepted");

// Function to toggle OTP screen
const onSubmit = handleSubmit(async () => {
  console.log("Submitting registration...");
  const result = await authStore.register(email.value, password.value);

  console.log("Registration Result:", result); // Check what result is returned

  if (result.success) {
    switchScreen.value = true;
    console.log("Screen should switch now:", switchScreen.value); // Verify if this updates
  } else {
    toast.error("Registration Failed", {
      description: result.message,
    });
  }
});

// Function to finalize account creation after OTP verification
const completeRegistration = () => {
  toast.success("Account Created!", {
    description: "You can now log in and start using the platform.",
  });
};
</script>

<template>
  <div>
    <div v-if="!switchScreen" class="font-nunito">
      <h2 class="font-bold text-3xl mb-3">Quick Sign Up</h2>
      <p class="text-base mb-10">
        Already have an account?
        <span class="text-paybill-secondary">Click here</span>
      </p>
      <form @submit.prevent="onSubmit">
        <div class="mt-5">
          <label class="font-bold block text-base mb-2">Email Address</label>
          <input
            v-model="email"
            class="w-full outline-none h-[58px] border rounded-lg px-5"
            type="email"
            placeholder="Email Address"
          />
          <p class="text-red-500 text-sm">{{ emailError }}</p>
        </div>

        <div class="mt-5">
          <label class="font-bold block text-base mb-2">Password</label>
          <div
            class="h-[58px] w-full border rounded-lg px-5 flex justify-between items-center"
          >
            <input
              v-model="password"
              class="w-full outline-none"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
            />
            <div class="cursor-pointer" @click="showPassword = !showPassword">
              <Eye v-if="!showPassword" />
              <EyeOff v-else />
            </div>
          </div>
          <p class="text-red-500 text-sm">{{ passwordError }}</p>
        </div>

        <div class="mt-5">
          <label class="font-bold block text-base mb-2">Confirm Password</label>
          <div
            class="h-[58px] w-full border rounded-lg px-5 flex justify-between items-center"
          >
            <input
              v-model="confirmPassword"
              class="w-full outline-none"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Confirm Password"
            />
            <div
              class="cursor-pointer"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              <Eye v-if="!showConfirmPassword" />
              <EyeOff v-else />
            </div>
          </div>
          <p class="text-red-500 text-sm">{{ confirmPasswordError }}</p>
        </div>

        <div class="mt-5">
          <div
            class="flex items-center gap-4 border rounded-lg w-full h-[80px] p-5"
          >
            <input
              v-model="termsAccepted"
              type="checkbox"
              :true-value="true"
              :false-value="false"
            />
            <p class="text-sm">
              By submitting this form, you accept Paybills.Africa Terms &
              Conditions and Privacy Policy.
            </p>
          </div>
          <p class="text-red-500 text-sm">{{ termsError }}</p>
        </div>

        <div>
          <button
            @submit.prevent="onSubmit"
            type="submit"
            class="w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full mt-7"
          >
            Continue
          </button>
        </div>
      </form>
    </div>

    <div v-else>
      <TheOtp @verified="completeRegistration" />
    </div>
  </div>
</template>
