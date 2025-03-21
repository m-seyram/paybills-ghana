<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <p class="pb-10 flex justify-center item-center font-nunito"><slot></slot></p>
    <p class="font-bold text-xl">{{ title }}</p>
    <p class="font-meduim text-base">
      {{ content }}
    </p>
  </div>
</template>
