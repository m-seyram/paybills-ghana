import { defineStore } from "pinia";
import { getUserCountry } from "@/utils/getUserCountry";
import ghanaImage from "@/assets/ghana.png";
import nigeriaImage from "@/assets/nigeria.png";
import kenyaImage from "@/assets/kenya.png";

export const useCountryStore = defineStore("countryStore", {
  state: () => ({
    selectedCountry: null, // Stores the country for the navbar
  }),
  actions: {
    async detectCountry() {
      const countryOptions = [
        { image: ghanaImage, text: "Ghana", code: "GH" },
        { image: nigeriaImage, text: "Nigeria", code: "NG" },
        { image: kenyaImage, text: "Kenya", code: "KE" },
      ];
      const defaultCountry = countryOptions.find((c) => c.code === "GH"); // Ghana is default

      this.selectedCountry = await getUserCountry(
        countryOptions,
        defaultCountry
      );
    },
  },
});
