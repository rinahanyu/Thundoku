<template>
  <div>
    <h1>Home!</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  layout!: 'tsundoku'
})
export default class Home extends Vue {
}
</script>
