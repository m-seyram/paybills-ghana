<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  selectedOption: {
    type: Object,
    required: true,
  },
});

// Emits the selected option to the parent component
const emit = defineEmits(["update:selectedOption"]);
// Local state for dropdown visibility
const isDropdownOpen = ref(false);
const dropdownContainer = ref(null);
// Toggle the dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Function to select an option
const selectOption = (option) => {
  emit("update:selectedOption", option);
  isDropdownOpen.value = false; // Close dropdown after selection
};

// Function to close the dropdown if the click is outside
const closeDropdown = (event) => {
  if (!dropdownContainer.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

// Add and remove event listeners on mount/unmount
onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<template>
  <div ref="dropdownContainer" class="relative w-full font-satoshi">
    <!-- Display selected option with image -->
    <div
      class="w-full cursor-pointer flex items-center gap-5 p-2"
      @click="toggleDropdown"
    >
      <img
        :src="selectedOption.image"
        alt="Flag"
        class="w-7 h-7 rounded-full"
      />
      <span>{{ selectedOption.text }}</span>
    </div>

    <!-- Dropdown options with images -->
    <div
      v-if="isDropdownOpen"
      class="absolute inset-x-0 top-full bg-white border rounded shadow-md z-20"
    >
      <div
        v-for="(option, index) in options"
        :key="index"
        class="flex items-center p-2 cursor-pointer hover:bg-paybill-secondary gap-5"
        @click="selectOption(option)"
      >
        <img
          :src="option.image"
          alt="Flag"
          class="w-8 h-8 rounded-full object-contain"
        />
        <span class="text-base">{{ option.text }}</span>
      </div>
    </div>
  </div>
</template>
