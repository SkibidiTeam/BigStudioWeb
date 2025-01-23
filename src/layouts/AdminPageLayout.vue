<script lang="ts" setup>
import AdminPageSideBar from './components/AdminPageSideBar.vue'
</script>

<template>
  <v-layout>
    <AdminPageSideBar />
    <v-main style="margin-left: 20px">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
