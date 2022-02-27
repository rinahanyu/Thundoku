import Vue from 'vue'
import { Mixin } from 'vue-mixin-decorator'

@Mixin
export default class SidebarMixin extends Vue {
  items = [
    { title: 'Home', icon: 'mdi-view-dashboard', to: '/' },
    { title: 'Tsumu', icon: 'mdi-forum', to: '/tsumu' }
  ]
}
