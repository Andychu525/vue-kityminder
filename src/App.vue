<template>
  <div id="app"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import KMEditor from '@/core/editor'

@Component
export default class App extends Vue {
  public minder: any = null
  mounted() {
    this.minder = new KMEditor('#app')
  }
}
</script>
<style lang="less" scoped>
@import '~hotbox/hotbox.css';

#app {
  height: 100vh;
}
</style>
