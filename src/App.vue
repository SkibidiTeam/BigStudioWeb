<script lang="ts" setup></script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
    <p>Test</p>
  </component>
</template>

<style scoped></style>
