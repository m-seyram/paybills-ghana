import { defineStore } from "pinia";
import ghanaImage from "@/assets/ghana.png";
import mtnImage from "@/assets/homeview/mtn.png";

export const mobileRechargeStore = defineStore("mobileRecharge", {
  state: () => ({
    selectedCountry: { image: ghanaImage, text: "Ghana" },
    selectedOperator: {
      image: mtnImage,
      text: "MTN Ghana",
    },
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
    setMobileNumber(number) {
      this.mobileNumber = number;
    },
    setRechargeAmount(amount) {
      this.rechargeAmount = amount;
    },
  },
});
