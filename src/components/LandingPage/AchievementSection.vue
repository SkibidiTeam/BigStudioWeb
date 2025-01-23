<script lang="ts" setup>
import AchievementItem from '../AchievementItem.vue'
</script>

<template>
  <div id="achievement" class="text-white">
    <div class="container achievement-section">
      <h2 class="achievement-section__item achievement-section__item--title">Thành tựu</h2>
      <div class="achievement-list">
        <AchievementItem quantityText="10" title="SUBSRIBERS" />
        <AchievementItem quantityText="10" title="SUBSRIBERS" />
        <AchievementItem quantityText="10" title="SUBSRIBERS" />
        <AchievementItem quantityText="10" title="SUBSRIBERS" />
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  #achievement {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1f2641;
    text-align: center;
  }
  .achievement-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  .achievement-section__item {
    padding: 15px 0;
    width: 610px;
    text-transform: uppercase;
  }
  .achievement-section__item--title {
    font-size: 36px;
  }
  .achievement-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    width: 100%;
  }
}
</style>
