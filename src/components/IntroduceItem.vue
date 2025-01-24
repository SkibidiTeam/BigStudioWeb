<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    imageURL?: string
    title?: string
    description?: string
  }>(),
  {
    imageURL: '',
    title: '',
    description: '',
  },
)
</script>

<template>
  <div class="introduce-item">
    <div class="introduce-item-image">
      <img :src="props.imageURL" alt="logo" />
    </div>
    <div class="introduce-item-info">
      <h4 class="introduce-item-title">{{ props.title }}</h4>
      <span class="introduce-item-description">{{ props.description }}</span>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .introduce-item {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
