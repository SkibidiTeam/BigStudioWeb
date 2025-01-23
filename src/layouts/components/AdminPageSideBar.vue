<script lang="ts" setup>
import type { IAdminMenu } from '@/types/adminMenu.type'

const ListItems: IAdminMenu[] = [
  {
    icon: 'mdi-trophy-variant-outline',
    title: 'Achievements',
    value: 'achievements',
  },
  {
    icon: 'mdi-account-music-outline',
    title: 'Artists',
    value: 'artists',
  },
  {
    icon: 'mdi-music-box-outline',
    title: 'Products',
    value: 'products',
  },
  {
    icon: 'mdi-handshake-outline',
    title: 'Partners',
    value: 'partners',
  },
  {
    icon: 'mdi-newspaper-variant-outline',
    title: 'News',
    value: 'news',
  },
]
</script>

<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/lego/2.jpg"
        subtitle="BigStudioAdmin"
        title="Admin"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="item in ListItems"
        :key="item.value"
        link
        :prepend-icon="item.icon"
        :title="item.title"
        :to="`/admin/${item.value}`"
      />
    </v-list>

    <template v-slot:append>
      <v-divider></v-divider>
      <v-list>
        <v-list-item class="cursor-pointer" prepend-icon="mdi-logout" title="Logout" />
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
