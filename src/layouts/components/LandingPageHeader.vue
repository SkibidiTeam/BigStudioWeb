<script lang="ts" setup>
interface INavItem {
  message: string
  id: string
}

const navItems: INavItem[] = [
  { message: 'GIỚI THIỆU', id: '#introduce' },
  { message: 'TẦM NHÌN', id: '#vision' },
  { message: 'NGHỆ SĨ', id: '#artists' },
  { message: 'SẢN PHẨM', id: '#products' },
  { message: 'ĐỐI TÁC', id: '#partners' },
  { message: 'TIN TỨC', id: '#news' },
  { message: 'LIÊN HỆ', id: '#contact' },
]
</script>

<template>
  <div class="header-component-wrapper">
    <div class="header-component container">
      <a href="/">
        <img
          class="header-logo"
          src="https://res.cloudinary.com/dbinjkjko/image/upload/v1737685602/Logo/Logo_hnhfju.jpg"
          alt="logo"
        />
      </a>
      <ul class="link-component">
        <li
          v-for="navItem in navItems"
          :key="navItem.id"
          class="link-component-item text-sm text-white"
        >
          <router-link :to="navItem.id"> {{ navItem.message }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header-component-wrapper {
  background-color: #000;
  height: 80px;
  padding: 20px 0 10px 0;
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
  cursor: pointer;
  text-transform: uppercase;
}
.link-component-item a {
  padding: 15px;
}
</style>
