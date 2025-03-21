import { defineStore } from "pinia";
import ghanaImage from "@/assets/ghana.png";
import electricityImage from "@/assets/electricity/ecg.jpg";

export const electricityStore = defineStore("electricity", {
  state: () => ({
    selectedCountry: { image: ghanaImage, text: "Ghana" },
    selectedOperator: {
      image: electricityImage,
      text: "Electricity Company of Ghana",
    },
    meterNumber: "",
    mobileNumber: "",
    rechargeAmount: "",
  }),
  actions: {
    setSelectedCountry(country) {
      this.selectedCountry = country;
    },
    setSelectedOperator(operator) {
      this.selectedOperator = operator;
    },
    setMeterNumber(number) {
      this.meterNumber = number;
    },
    setMobileNumber(mnumber) {
      this.mobileNumber = mnumber;
    },
    setAmount(amount) {
      this.rechargeAmount = amount;
    },
  },
});
