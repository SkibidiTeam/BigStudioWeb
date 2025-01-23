<script lang="ts" setup>
import AboutSection from '@/components/LandingPage/AboutSection.vue'
import AchievementSection from '@/components/LandingPage/AchievementSection.vue'
import ArtistsSection from '@/components/LandingPage/ArtistsSection.vue'
import ContactSection from '@/components/LandingPage/ContactSection.vue'
import IntroduceSection from '@/components/LandingPage/IntroduceSection.vue'
import ProductsSection from '@/components/LandingPage/ProductsSection.vue'
import VisionSection from '@/components/LandingPage/VisionSection.vue'
</script>

<template>
  <div class="main">
    <AboutSection />
    <IntroduceSection />
    <VisionSection />
    <AchievementSection />
    <ArtistsSection />
    <ProductsSection />
    <ContactSection />
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
