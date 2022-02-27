<template>
  <v-app>
    <v-navigation-drawer
      absolute
      permanent
      right
      class="sidebar_color"
    >
      <template #prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="~/static/profile_photo.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> hello 羽生さん!</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <!-- <v-divider></v-divider> -->

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
            <nuxt-link :to="item.link">
              {{ item.title }}
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="back_color">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard', link: '/' },
        { title: 'Tsumu', icon: 'mdi-forum', link: '/hello' }
      ]
    }
  }
}
</script>
