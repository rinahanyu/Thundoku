<template>
  <div>
    <h1>Thundoku!</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  layout!: 'tsundoku'
})
export default class Hello extends Vue {
}
</script>
