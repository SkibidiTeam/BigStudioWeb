<script lang="ts" setup>
import LandingPageHeader from './components/LandingPageHeader.vue'
</script>

<template>
  <div class="h-screen">
    <LandingPageHeader />
    <div class="pt-[63px]">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
