<script setup lang="ts">
import { reactive } from 'vue';
import DaisyButton from './DaisyButton.vue';

const state = reactive({});
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyButton color="neutral">Click Me ✨</DaisyButton>
    </Variant>

    <template #controls></template>
  </Story>
</template>
