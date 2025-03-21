import { defineStore } from "pinia";
import ghanaImage from "@/assets/ghana.png";
import mtnImage from "@/assets/homeview/mtn.png";

export const broadbandStore = defineStore("broadband", {
  state: () => ({
    selectedCountry: { image: ghanaImage, text: "Ghana" },
    selectedOperator: {
      image: mtnImage,
      text: "MTN Ghana",
    },
    broadbandAccount: "",
    broadbandAmount: "",
  }),
  actions: {
    setSelectedCountry(country) {
      this.selectedCountry = country;
    },
    setSelectedOperator(operator) {
      this.selectedOperator = operator;
    },
    setMobileNumber(accountName) {
      this.broadbandAccount = accountName;
    },
    setRechargeAmount(amount) {
      this.broadbandAmount = amount;
    },
  },
});
