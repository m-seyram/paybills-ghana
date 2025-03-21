<script setup>
import Copy from "../icons/common/copy.vue";
import Alert from "../ui/alert/Alert.vue";
import AlertDescription from "../ui/alert/AlertDescription.vue";

defineProps({
  transaction: Object,
});
</script>

<template>
  <div class="font-nunito text-black" v-if="transaction">
    <div class="mt-10">
      <Alert>
        <AlertDescription>
          <div class="flex items-center justify-between px-3">
            <!---->
            <div>
              <p class="text-sm">Transaction ID</p>
              <p class="text-base font-bold">{{ transaction.invoice }}</p>
            </div>
            <!---->
            <div>
              <button
                class="h-11 w-11 rounded-full border flex items-center justify-center"
              >
                <i> <Copy /> </i>
              </button>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
    <!--Basic Details-->
    <div class="mt-5">
      <h2 class="font-bold text-sm">Basic Details</h2>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Date time</p>
        <!---->
        <P class="font-bold text-sm">24th Jan, 2025 10:00AM</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Status</p>
        <!---->
        <P class="font-bold text-sm">{{ transaction.paymentStatus }}</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Biller Name</p>
        <!---->
        <P class="font-bold text-sm">{{ transaction.billerName }}</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Category</p>
        <!---->
        <P class="font-bold text-sm">{{ transaction.category }}</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Amount Paid</p>
        <!---->
        <P class="font-bold text-sm">{{ transaction.totalAmount }}</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Service Fee</p>
        <!---->
        <P class="font-bold text-sm">GHS 2.00</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Payment Method</p>
        <!---->
        <P class="font-bold text-sm">{{ transaction.paymentMethod }}</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">bill type</p>
        <!---->
        <P class="font-bold text-sm">Pay4Self</P>
      </div>
    </div>
    <!--Payee Details-->
    <div class="mt-10">
      <h2 class="font-bold text-sm">Payee Details</h2>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Name</p>
        <!---->
        <P class="font-bold text-sm">John Doe</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Phone Number</p>
        <!---->
        <P class="font-bold text-sm">+233553410199</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Reference</p>
        <!---->
        <P class="font-bold text-sm">Pay bill for me</P>
      </div>
      <!---->
      <div class="mt-2 mb-2 flex items-center justify-between">
        <p class="text-sm">Email</p>
        <!---->
        <P class="font-bold text-sm">johndoe@gmail.com</P>
      </div>
    </div>
    <!--Button-->
    <div class="flex items-center justify-center mt-10">
      <button
        class="2xl:w-[262px] w-full h-[56px] font-bold text-base text-paybill-primary bg-paybill-secondary rounded-full"
        type="download"
      >
        Download pdf
      </button>
    </div>
  </div>
</template>
