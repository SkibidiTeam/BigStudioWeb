<script lang="ts" setup>
import AboutSection from '@/components/AboutSection.vue'
import ArtistsSection from '@/components/ArtistsSection.vue'
import IntroduceSection from '@/components/IntroduceSection.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import VisionSection from '@/components/VisionSection.vue'
</script>

<template>
  <div class="main">
    <AboutSection />
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
