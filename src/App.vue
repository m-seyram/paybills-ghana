<script setup>
import { useRoute, RouterView } from "vue-router";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import { Toaster } from "@/components/ui/sonner";

const route = useRoute();
</script>

<template>
  <Toaster position="top-right" richColors />
  <div v-if="!route.path.startsWith('/pay4me')">
    <TheNavbar />
  </div>
  <RouterView />
  <div v-if="!route.path.startsWith('/pay4me')">
    <TheFooter />
  </div>
</template>

<style>
body {
  background-color: #f5f5f5;
}
</style>
