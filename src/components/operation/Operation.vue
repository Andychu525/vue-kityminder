<template>
  <div class="km-btn-group operation-group">
    <div
      class="km-btn-item edit-node"
      :disabled="minder.queryCommandState('text') === -1"
      @click="minder.queryCommandState('text') === -1 || editNode()"
      title="编辑"
    >
      <i class="km-btn-icon"></i>
      <span class="km-btn-caption">编辑</span>
    </div>
    <div
      class="km-btn-item remove-node"
      :disabled="minder.queryCommandState('RemoveNode') === -1"
      @click="
        minder.queryCommandState('RemoveNode') === -1 ||
          minder.execCommand('RemoveNode')
      "
      title="删除"
    >
      <i class="km-btn-icon"></i>
      <span class="km-btn-caption">删除</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Operation extends Vue {
  @Prop({ required: true, type: Object }) minder: any
}
</script>
