import { defineStore } from "pinia";
import ghanaImage from "@/assets/ghana.png";
import waterImage from "@/assets/water/gwcl-logo.png";

export const waterBillStore = defineStore("waterBill", {
  state: () => ({
    selectedCountry: { image: ghanaImage, text: "Ghana" },
    selectedOperator: {
      image: waterImage,
      text: "Ghana Water Company Limited",
    },
    meterNumberWater: "",
    mobileNumberWater: "",
    rechargeAmountWater: "",
  }),
  actions: {
    setSelectedCountry(country) {
      this.selectedCountry = country;
    },
    setSelectedOperator(operator) {
      this.selectedOperator = operator;
    },
    setMobileNumber(number) {
      this.meterNumberWater = number;
    },
    setMobileNumber(mnumber) {
      this.mobileNumberWater = mnumber;
    },
    setAmount(amount) {
      this.rechargeAmountWater = amount;
    },
  },
});
