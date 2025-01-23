<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = withDefaults(
  defineProps<{
    quantityText?: string
    title?: string
  }>(),
  {
    quantityText: '',
    title: '',
  },
)
</script>

<template>
  <div class="achievement-item text-white">
    <div class="achievement-icon">
      <font-awesome-icon :icon="['fab', 'youtube']" size="3x" />
    </div>
    <span class="achievement-quantity">{{ props.quantityText }}</span>
    <span class="achievement-title">{{ props.title }}</span>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .achievement-item {
    background-color: #e85f70;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    transition: all 0.5s ease;
    box-shadow: 0 0 51px rgba(232, 95, 112, 0.74);
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
