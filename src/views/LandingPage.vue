<script lang="ts" setup>
import ArtistsSection from '@/components/ArtistsSection.vue'
import IntroduceSection from '@/components/IntroduceSection.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import VisionSection from '@/components/VisionSection.vue'
</script>

<template>
  <div class="main">
    <IntroduceSection />
    <VisionSection />
    <ArtistsSection />
    <ProductsSection />
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
