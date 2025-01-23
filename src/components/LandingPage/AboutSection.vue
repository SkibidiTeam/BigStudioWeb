<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div id="about" class="text-white">
    <div class="container about-section">
      <h2 class="about-section__item about-section__item--title">BIG ENTERTAINMENT</h2>
      <h4 class="about-section__item about-section__item--description">
        ĐƠN VỊ CHUYÊN SẢN XUẤT, TRUYỀN THÔNG CÁC SẢN PHẨM ÂM NHẠC TRONG NƯỚC, LÀ NƠI ĐỂ CÁC CA SĨ,
        NHẠC SĨ TRẺ CÓ TÀI NĂNG VÀ ƯỚC MƠ CÓ THỂ ĐẾN GẦN VỚI KHÁN GIẢ VÀ THÀNH CÔNG TRÊN CON ĐƯỜNG
        ÂM NHẠC.
      </h4>
      <h6 class="about-section__item about-section__item--contact">Liên hệ với chúng tôi ở:</h6>
      <div class="about-section__item about-section__item--list-icon">
        <a
          class="about-section__item--icon-youtube"
          href="https://www.youtube.com/"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
        <a
          class="about-section__item--icon-facebook"
          href="https://www.youtube.com/"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'square-facebook']" />
        </a>
        <a class="about-section__item--icon-google" href="#contact">
          <font-awesome-icon :icon="['fab', 'google']" />
        </a>
      </div>
    </div>
  </div>
</template>

<style>
#about {
  min-height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-section__item {
  padding: 15px 0;
  width: 610px;
  text-transform: uppercase;
}
.about-section__item--title {
  font-size: 36px;
}
.about-section__item--description {
  font-size: 18px;
  font-weight: 300;
}
.about-section__item--contact {
  padding-bottom: 0;
  font-size: 12px;
  font-weight: 300;
}
.about-section__item--list-icon {
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 32px;
}
.about-section__item--list-icon a {
  font-size: 32px;
}
.about-section__item--icon-youtube:hover {
  color: red;
}
.about-section__item--icon-facebook:hover {
  color: #3366ff;
}
.about-section__item--icon-google:hover {
  color: #db4a39;
}
</style>
