<template>
  <v-navigation-drawer
    absolute
    permanent
    right
    class="sidebar_color"
  >
    <template #prepend>
      <v-list-item two-line>
        <!-- <v-list-item-avatar>
          <img src="~/static/profile_photo.jpg">
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title> 羽生さん!</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <!-- <v-divider></v-divider> -->

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        router
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
// import { Mixins } from 'vue-mixin-decorator'
import SidebarMixin from '~/components/common/sidebar_data'

@Component
export default class Sidebar extends Mixins(SidebarMixin) {
  items:any = this.items
}
</script>
