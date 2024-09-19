<script setup lang="ts">
import { computed, defineProps } from 'vue';

import { ColorsBrand, ColorsState } from '../../globals/colors';

// withDefauts()
const props = defineProps<{
  color: ColorsBrand | ColorsState | 'ghost' | 'link';
  outline?: boolean;
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

const outlineClass = computed(() => {
  return props.outline ? 'btn-outline' : '';
});

const buttonClasses = computed(() => {
  return `${colorClass.value} ${outlineClass.value}`;
});
</script>

<template>
  <button class="btn" :class="buttonClasses"><slot></slot></button>
</template>