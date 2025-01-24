<script lang="ts" setup>
import AchievementItem from '../AchievementItem.vue'
const achievementList = [
  {
    quantityText: '123',
    title: 'SUBSRIBERS',
    fontAwsText: ['fas', 'bookmark'],
    backgroundColor: '#e85f70',
    boxShadow: '0 0 51px rgba(232, 95, 112, 0.74)',
  },
  {
    quantityText: '123',
    title: 'VIEWS',
    fontAwsText: ['fas', 'eye'],
    backgroundColor: '#fa8936',
    boxShadow: '0 0 51px rgba(250, 137, 54, 0.74)',
  },
  {
    quantityText: '123',
    title: 'FANS',
    fontAwsText: ['fab', 'facebook'],
    backgroundColor: '#b03fc3',
    boxShadow: '#ab47bc',
  },
  {
    quantityText: '123',
    title: 'YOUTUBE',
    fontAwsText: ['fab', 'youtube'],
    backgroundColor: '#4bc253',
    boxShadow: '0 0 51px rgba(75, 194, 83, 0.74)',
  },
  {
    quantityText: '123',
    title: 'TIKTOK',
    fontAwsText: ['fab', 'tiktok'],
    backgroundColor: '#0090d5',
    boxShadow: '0 0 51px rgba(0, 144, 213, 0.74)',
  },
]
</script>

<template>
  <div id="achievement" class="text-white">
    <div class="container achievement-section">
      <h2 class="achievement-section__item achievement-section__item--title">Thành tựu</h2>
      <div class="achievement-list">
        <AchievementItem
          v-for="(item, index) in achievementList"
          :key="index"
          :quantityText="item.quantityText"
          :title="item.title"
          :fontAwsText="item.fontAwsText"
          :backgroundColor="item.backgroundColor"
          :boxShadow="item.boxShadow"
        />
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
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    width: 100%;
  }
}
</style>
