import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const passportStore = defineStore("passport", () => {
  // Passport selection state
  const selectedOption = ref("");

  // User information state
  const selectedCountry = ref({
    text: "Ghana",
  });

  const selectedOperator = ref({
    text: "Passport Service",
  });
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const operator = ref("Passport Service");
  const mobileNumber = ref("");
  const countryCode = ref("+233"); // Default country code (Ghana)

  // Compute passport price based on selected option
  const passportPrice = computed(() => {
    return selectedOption.value === "Standard Application 32 pages" ? 500 : 700;
  });

  return {
    selectedOption,
    selectedCountry,
    selectedOperator,
    passportPrice,
    firstName,
    lastName,
    email,
    operator,
    mobileNumber,
    countryCode,
  };
});
