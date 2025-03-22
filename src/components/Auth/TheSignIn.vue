<script setup>
import { useForm, useField } from "vee-validate";
import { ref } from "vue";
import { EyeOff } from "lucide-vue-next";
import Eye from "../icons/common/eye.vue";
import { signInSchema } from "@/utils/validations/auth";
import router from "@/router";

const { handleSubmit } = useForm({
  validationSchema: signInSchema,
});

const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

function onSubmit() {
  router.push("/");
}

const showPassword = ref(false);
</script>

<template>
  <div>
    <div>
      <div class="font-nunito">
        <h2 class="font-bold text-3xl mb-3">Sign In</h2>
        <p class="text-base mb-10">
          Don't have an account?
          <span class="text-paybill-secondary">Click here</span>
        </p>
        <form>
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
            <label class="font-bold block text-base mb-2" for="password"
              >Password</label
            >
            <div class="h-[58px] w-full border rounded-lg px-5 pt-4">
              <div class="flex justify-between items-center">
                <input
                  v-model="password"
                  class="w-full outline-none"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Password"
                />
                <div
                  class="cursor-pointer"
                  @click="showPassword = !showPassword"
                >
                  <Eye v-if="!showPassword" />
                  <EyeOff v-else />
                </div>
              </div>
            </div>
            <p class="text-red-500 text-sm">{{ passwordError }}</p>
          </div>
          <div>
            <button
              @click="onSubmit"
              class="w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full mt-7"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
