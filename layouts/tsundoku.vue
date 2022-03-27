<template>
  <v-app>
    <Sidebar />

    <v-main class="back_color">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '~/components/sidebar.vue'

@Component({
  components: {
    Sidebar
  }
})
export default class Tsundoku extends Vue {}
</script>
