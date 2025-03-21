<script setup>
import BackArrow from "@/components/icons/common/backArrow.vue";
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { ref } from "vue";
import {
  Stepper,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import TheOrderSummary from "@/components/Transactions/TheOrderSummary.vue";
import ThePayment from "@/components/Transactions/ThePayment.vue";
import TheSuccessfulPayment from "@/components/Transactions/TheSuccessfulPayment.vue";
import TheRecipientInfo from "@/components/Transactions/TheRecipientInfo.vue";
import ThePaymentSent from "@/components/Transactions/ThePaymentSent.vue";

const router = useRouter();

function goBack() {
  router.push("/");
}

// Stepper logic
const stepIndex = ref(1);
const steps = ref([
  {
    step: 1,
    title: "Order Summary",
  },
  {
    step: 2,
    title: "Payment",
  },
  {
    step: 3,
    title: "Done",
  },
]);

//Pay for me section
const payForMeClicked = ref(false);
const handlePayForMe = () => {
  payForMeClicked.value = true;
  // Change Step 2 title to "Recipient Info"
  steps.value[1].title = "Recipient Info";
  stepIndex.value = 2;
};
const cancel = () => {
  payForMeClicked.value = false;
  steps.value[1].title = "Payment";
  stepIndex.value = 1;
};
</script>

<template>
  <div class="px-5 lg:px-0">
    <div
      class="mt-24 mx-auto lg:w-[731px] lg:h-auto bg-white rounded-md lg:p-2 font-nunito"
    >
      <div class="h-auto bg-[#FAFAFA] rounded-md pt-10 pb-12">
        <div
          class="flex justify-between items-center px-2 lg:px-12 mt-2 lg:mt-0"
        >
          <h3 class="font-medium text-base"></h3>
          <div
            @click.prevent="goBack()"
            class="flex items-center justify-center lg:w-[93px] h-[32px] bg-[#F5F5F5] rounded-full cursor-pointer gap-2"
          >
            <div><BackArrow /></div>
            <h3 class="text-sm">Go Back</h3>
          </div>
        </div>
        <!-- Stepper -->
        <div class="mt-7 w-full">
          <Stepper
            v-slot="{ nextStep }"
            v-model="stepIndex"
            class="block w-full px-2 lg:px-0"
          >
            <form
              @submit="
                (e) => {
                  e.preventDefault();
                  if (stepIndex === steps.length) {
                    console.log('paid');
                  }
                }
              "
            >
              <div class="flex w-full flex-start gap-2">
                <StepperItem
                  v-for="step in steps"
                  :key="step.step"
                  v-slot="{ state }"
                  class="relative flex w-full flex-col items-center justify-center"
                  :step="step.step"
                >
                  <StepperSeparator
                    v-if="step.step !== steps[steps.length - 1].step"
                    class="absolute left-[calc(45%+20px)] right-[calc(-54%+10px)] top-2 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-paybill-secondary border border-paybill-secondary"
                  />
                  <StepperTrigger as-child>
                    <Button
                      :variant="
                        state === 'completed' || state === 'active'
                          ? 'default'
                          : 'outline'
                      "
                      class="rounded-full shrink-0 w-5 h-5 bg-paybill-secondary hover:bg-paybill-secondary"
                      :class="[
                        state === 'active' &&
                          'ring-2 ring-ring ring-offset-2 ring-offset-background ring-paybill-secondary bg-paybill-secondary',
                      ]"
                      :disabled="state !== 'completed'"
                    >
                    </Button>
                  </StepperTrigger>

                  <div
                    class="flex flex-col items-center text-center text-paybill-secondary text-opacity-40"
                  >
                    <StepperTitle
                      :class="[state === 'active' && ' text-paybill-secondary']"
                      class="transition text-sm"
                    >
                      {{ step.title }}
                    </StepperTitle>
                  </div>
                </StepperItem>
              </div>
              <div class="mt-10">
                <div v-if="stepIndex === 1">
                  <!-- Summary -->
                  <div class="lg:mx-14">
                    <TheOrderSummary />
                  </div>
                </div>
                <div v-if="stepIndex === 2">
                  <!-- Payment or Recipient Info based on button click -->
                  <div class="lg:mx-14">
                    <div v-if="payForMeClicked">
                      <TheRecipientInfo />
                    </div>
                    <div v-else>
                      <ThePayment />
                    </div>
                  </div>
                </div>
                <div v-if="stepIndex === 3">
                  <div class="lg:mx-14">
                    <div v-if="payForMeClicked"><ThePaymentSent /></div>
                    <div v-else><TheSuccessfulPayment /></div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <!---->
                <div class="mt-12 mb-5">
                  <button
                    class="2xl:w-[587px] w-full h-[58px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full"
                    v-if="stepIndex !== 3"
                    @click="nextStep()"
                  >
                    Make Payment
                  </button>
                </div>
              </div>
            </form>
          </Stepper>
        </div>
      </div>
    </div>
  </div>
</template>
