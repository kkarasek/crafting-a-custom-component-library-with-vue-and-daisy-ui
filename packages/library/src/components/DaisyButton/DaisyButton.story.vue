<script setup lang="ts">
import { reactive } from 'vue';
import DaisyButton from './DaisyButton.vue';
import { colorsBrand, colorsState } from '../../globals/colors';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

const state = reactive({
  disabled: false,
  outline: false
});
</script>
<template>
  <Story :layout="{ type: 'grid', width: '50%' }">
    <Variant
      v-for="color in [...colorsBrand, ...colorsState, 'ghost' as const, 'link' as const]"
      :key="color"
      :title="capitalizeFirstLetter(color)"
    >
      <DaisyButton :color="color" :disabled="state.disabled" :outline="state.outline">Click Me ✨</DaisyButton>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstCheckbox v-model="state.outline" title="Outline" />
    </template>
  </Story>
</template>
