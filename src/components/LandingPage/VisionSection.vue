<script lang="ts" setup></script>

<template>
  <div id="vision" class="text-white">
    <h2 class="vision-section__item vision-section__item--title">Tầm nhìn</h2>
    <h4 class="vision-section__item vision-section__item--description">
      Trở thành công ty giải trí hàng đầu Việt Nam, tiên phong ở các lĩnh vực sản xuất và truyền
      thông sản phẩm âm nhạc, giải trí; đào tạo, quản lý tài năng âm nhạc và KOLs giải trí.
    </h4>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  #vision {
    min-height: 60vh;
    display: flex;
    align-items: center;
    background-color: #1f2641;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
  .vision-section__item {
    padding: 15px 0;
    width: 610px;
    text-transform: uppercase;
  }
  .vision-section__item--title {
    font-size: 36px;
  }
  .vision-section__item--description {
    font-size: 18px;
    font-weight: 300;
  }
}
</style>
