<script setup lang="ts">
import { computed, defineProps } from 'vue';

import { ColorsBrand, ColorsState } from '../../globals/colors';


const props = defineProps<{
  color: ColorsBrand | ColorsState | 'ghost' | 'link';
}>();

const colorClass = computed(() => {
  return {
    default: '',
    neutral: 'btn-neutral',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    link: 'btn-link',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
  }[props.color];
});
</script>

<template>
  <button class="btn" :class="colorClass"><slot></slot></button>
</template>