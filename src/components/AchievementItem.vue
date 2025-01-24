<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = withDefaults(
  defineProps<{
    quantityText?: string
    title?: string
    fontAwsText: string[]
    backgroundColor: string
    boxShadow: string
  }>(),
  {
    quantityText: '',
    title: '',
  },
)
</script>

<template>
  <div
    class="achievement-item text-white"
    :style="{ backgroundColor: props.backgroundColor, boxShadow: props.boxShadow }"
  >
    <div class="achievement-icon">
      <font-awesome-icon :icon="props.fontAwsText" size="3x" />
    </div>
    <span class="achievement-quantity">{{ props.quantityText }}</span>
    <span class="achievement-title">{{ props.title }}</span>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .achievement-item {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    transition: all 0.6s ease;
  }
  .achievement-item:hover {
    transform: scale(1.06);
    box-shadow:
      0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
  }
  .achievement-icon {
    margin-bottom: 30px;
  }
}
</style>
