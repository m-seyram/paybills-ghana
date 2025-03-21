import { defineStore } from "pinia";
import ghanaImage from "@/assets/ghana.png";
import xboxImage from "@/assets/homeview/xbox.png";

export const gamingStore = defineStore("gaming", {
  state: () => ({
    selectedCountry: { image: ghanaImage, text: "Ghana" },
    selectedGame: {
      image: xboxImage,
      text: "Xbox",
    },
    mobileNumber: "",
    rechargeAmount: "",
  }),
  actions: {
    setSelectedCountry(country) {
      this.selectedCountry = country;
    },
    setSelectedOperator(game) {
      this.selectedGame = game;
    },
    setMobileNumber(number) {
      this.mobileNumber = number;
    },
    setAmount(amount) {
      this.rechargeAmount = amount;
    },
  },
});
