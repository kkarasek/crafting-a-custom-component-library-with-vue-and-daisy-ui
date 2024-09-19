<script setup lang="ts">
import { DaisyButton, DaisyTabs, DaisyTab } from 'daisy-vue';
import { colorsBrand, colorsState } from 'daisy-vue/globals';
</script>

# Button Component

## Default

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton>Click Me ✨</DaisyButton>
  </DaisyTab>
  <DaisyTab name="Code">
  
  <!-- make sure the space is secured so that vitepress can correctly interpret the codeblock within the markdown -->
  ```vue
    <DaisyButton>Click Me ✨</DaisyButton>
  ```

  </DaisyTab>
</DaisyTabs>

## With Brand Colors

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton v-for="color in [...colorsBrand, 'ghost', 'link']" :key="color" :color="color">{{ color }}</DaisyButton>
  </DaisyTab>
  <DaisyTab name="Code">
  
  <template v-for="color in [...colorsBrand, 'ghost', 'link']" :key="color">

  <!-- make sure the space is secured so that vitepress can correctly interpret the codeblock within the markdown -->
  ```vue-vue
    <DaisyButton color="{{ color }}">{{ color }}</DaisyButton>
  ```

  </template>

  </DaisyTab>
</DaisyTabs>


## With State Colors

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton v-for="color in [...colorsState]" :key="color" :color="color">{{ color }}</DaisyButton>
  </DaisyTab>
  <DaisyTab name="Code">
  
  <template v-for="color in [...colorsState]" :key="color">

  <!-- make sure the space is secured so that vitepress can correctly interpret the codeblock within the markdown -->
  ```vue-vue
    <DaisyButton color="{{ color }}">{{ color }}</DaisyButton>
  ```

  </template>

  </DaisyTab>
</DaisyTabs>