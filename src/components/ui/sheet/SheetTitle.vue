<script setup>
import { cn } from "@/lib/utils";
import { DialogTitle } from "radix-vue";
import { computed } from "vue";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <DialogTitle
    :class="
      cn('text-lg font-semibold text-slate-950 dark:text-slate-50', props.class)
    "
    v-bind="delegatedProps"
  >
    <slot />
  </DialogTitle>
</template>
