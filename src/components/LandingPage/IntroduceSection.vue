<script lang="ts" setup>
import IntroduceItem from '../IntroduceItem.vue'

const introduceList = [
  {
    title: 'Hợp tác với hệ thống nhạc số',
    description:
      'Là đối tác hàng đầu của các trang nhạc số hot nhất hiện nay như: Spotify, Zing Mp3, Nhaccuatui,Itunes,...',
    imageURL: 'https://acventertainment.com/img/intro/cases-icon-zingmp3.png',
  },
  {
    title: 'Hợp tác với hệ thống nhạc số',
    description:
      'Là đối tác hàng đầu của các trang nhạc số hot nhất hiện nay như: Spotify, Zing Mp3, Nhaccuatui,Itunes,...',
    imageURL: 'https://acventertainment.com/img/intro/cases-icon-zingmp3.png',
  },
  {
    title: 'Hợp tác với hệ thống nhạc số',
    description:
      'Là đối tác hàng đầu của các trang nhạc số hot nhất hiện nay như: Spotify, Zing Mp3, Nhaccuatui,Itunes,...',
    imageURL: 'https://acventertainment.com/img/intro/cases-icon-zingmp3.png',
  },
  {
    title: 'Hợp tác với hệ thống nhạc số',
    description:
      'Là đối tác hàng đầu của các trang nhạc số hot nhất hiện nay như: Spotify, Zing Mp3, Nhaccuatui,Itunes,...',
    imageURL: 'https://acventertainment.com/img/intro/cases-icon-zingmp3.png',
  },
  {
    title: 'Hợp tác với hệ thống nhạc số',
    description:
      'Là đối tác hàng đầu của các trang nhạc số hot nhất hiện nay như: Spotify, Zing Mp3, Nhaccuatui,Itunes,...',
    imageURL: 'https://acventertainment.com/img/intro/cases-icon-zingmp3.png',
  },
  {
    title: 'Hợp tác với hệ thống nhạc số',
    description:
      'Là đối tác hàng đầu của các trang nhạc số hot nhất hiện nay như: Spotify, Zing Mp3, Nhaccuatui,Itunes,...',
    imageURL: 'https://acventertainment.com/img/intro/cases-icon-zingmp3.png',
  },
]
</script>

<template>
  <div id="introduce" class="text-white">
    <div class="container introduce-section">
      <h2 class="introduce-section__item introduce-section__item--title">BIG ENTERTAINMENT</h2>
      <h4 class="introduce-section__item introduce-section__item--description">
        ĐƠN VỊ CHUYÊN SẢN XUẤT, TRUYỀN THÔNG CÁC SẢN PHẨM ÂM NHẠC TRONG NƯỚC, LÀ NƠI ĐỂ CÁC CA SĨ,
        NHẠC SĨ TRẺ CÓ TÀI NĂNG VÀ ƯỚC MƠ CÓ THỂ ĐẾN GẦN VỚI KHÁN GIẢ VÀ THÀNH CÔNG TRÊN CON ĐƯỜNG
        ÂM NHẠC.
      </h4>
      <div class="introduce-list">
        <IntroduceItem
          v-for="(item, index) in introduceList"
          :key="index"
          :description="item.description"
          :title="item.title"
          :image-u-r-l="item.imageURL"
        />
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  #introduce {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1f2641;
  }
  .introduce-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  .introduce-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    width: 100%;
  }
}
</style>
