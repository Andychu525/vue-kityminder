<template>
  <div class="km-btn-group arrange-group">
    <div
      class="km-btn-item arrange-up"
      :disabled="minder.queryCommandState('ArrangeUp') === -1"
      @click="
        minder.queryCommandState('ArrangeUp') === -1 ||
          minder.execCommand('ArrangeUp')
      "
      title="上移"
    >
      <i class="km-btn-icon"></i>
      <span class="km-btn-caption">上移</span>
    </div>
    <div
      class="km-btn-item arrange-down"
      :disabled="minder.queryCommandState('ArrangeDown') === -1"
      @click="
        minder.queryCommandState('ArrangeDown') === -1 ||
          minder.execCommand('ArrangeDown')
      "
      title="下移"
    >
      <i class="km-btn-icon"></i>
      <span class="km-btn-caption">下移</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Arrange extends Vue {
  @Prop({ required: true, type: Object }) minder: any
}
</script>
