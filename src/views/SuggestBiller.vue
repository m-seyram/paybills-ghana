<script setup>
import TheSuggestBillerSuccess from "@/components/Categories/Suggest Biller/TheSuggestBillerSuccess.vue";
import { ref, reactive } from "vue";

const isSubmitted = ref(false);
const form = reactive({
  merchantName: "",
  category: "",
  location: "",
  website: "",
  reason: "",
  yourName: "",
  yourEmail: "",
});

const submitForm = () => {
  console.log("Form submitted", form);
  isSubmitted.value = true;
};
</script>

<template>
  <div
    class="bg-white mx-auto container border max-w-5xl h-auto mt-[150px] font-nunito"
  >
    <div v-if="!isSubmitted">
      <div>
        <h2 class="font-bold text-xl text-center mt-5 mb-10">
          Suggest A Biller
        </h2>
      </div>
      <!---->
      <form
        @submit.prevent="submitForm"
        class="space-y-4 p-4 border rounded-lg shadow mt-5 mb-10"
      >
        <div>
          <label class="block font-medium">Merchant Name </label>
          <input
            v-model="form.merchantName"
            type="text"
            required
            class="w-full p-2 border rounded outline-none"
          />
        </div>

        <div>
          <label class="block font-medium">Category</label>
          <select
            v-model="form.category"
            class="w-full p-2 border rounded font-nunito"
          >
            <option value="">Select Category</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label class="block font-medium">Merchant Location</label>
          <input
            v-model="form.location"
            type="text"
            class="w-full p-2 border rounded outline-none"
          />
        </div>

        <div>
          <label class="block font-medium">Merchant Website</label>
          <input
            v-model="form.website"
            type="url"
            class="w-full p-2 border rounded outline-none"
          />
        </div>

        <div>
          <label class="block font-medium"
            >Why do you recommend this merchant?</label
          >
          <textarea
            v-model="form.reason"
            class="w-full p-2 border rounded outline-none"
          ></textarea>
        </div>

        <div>
          <label class="block font-medium">Your Name (Optional)</label>
          <input
            v-model="form.yourName"
            type="text"
            class="w-full p-2 border rounded outline-none"
          />
        </div>

        <div>
          <label class="block font-medium">Your Email (Optional)</label>
          <input
            v-model="form.yourEmail"
            type="email"
            class="w-full p-2 border rounded outline-none"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-paybill-secondary text-paybill-primary font-bold p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
    <!---->
    <div v-else><TheSuggestBillerSuccess /></div>
  </div>
</template>
