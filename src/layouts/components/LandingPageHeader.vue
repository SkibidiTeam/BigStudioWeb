<script lang="ts" setup>
const navItems = [
  { message: 'GIỚI THIỆU' },
  { message: 'TẦM NHÌN' },
  { message: 'NGHỆ SỸ' },
  { message: 'SẢN PHẨM' },
  { message: 'TIN TỨC' },
  { message: 'LIÊN HỆ' },
]
</script>

<template>
  <div class="header-component-wrapper">
    <div class="header-component container">
      <img class="header-logo" src="https://acventertainment.com/img/nav-logo.png" alt="logo" />
      <ul class="link-component">
        <li class="link-component-item text-sm text-white" v-for="navItem in navItems">
          {{ navItem.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header-component-wrapper {
  background-color: #000;
  height: 70px;
  padding: 15px 0 10px 0;
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  margin-bottom: 20px;
}
.header-component {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
.header-component .header-logo {
  object-fit: cover;
  height: 100%;
}

.link-component {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}
.link-component-item {
  padding: 15px;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
