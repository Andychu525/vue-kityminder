<template>
  <div class="readjust-layout">
    <a
      @click="minder.queryCommandState('resetlayout') === -1 || minder.execCommand('resetlayout')"
      class="btn-wrap"
      :disabled="minder.queryCommandState('resetlayout') === -1"
    >
      <span class="btn-icon reset-layout-icon"></span>
      <span class="btn-label">整理布局</span>
    </a>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
  @Prop({ required: true, type: Object }) minder: any
}
</script>