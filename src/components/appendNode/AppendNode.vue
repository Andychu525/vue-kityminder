<template>
  <div class="km-btn-group append-group">
    <div
      class="km-btn-item append-child-node"
      :disabled="minder.queryCommandState('AppendChildNode') === -1"
      @click="minder.queryCommandState('AppendChildNode') === -1 || minder.execCommand('AppendChildNode')"
      title="插入下级主题"
    >
      <i class="km-btn-icon"></i>
      <span class="km-btn-caption">插入下级主题</span>
    </div>
    <div
      class="km-btn-item append-parent-node"
      :disabled="minder.queryCommandState('AppendParentNode') === -1"
      @click="minder.queryCommandState('AppendParentNode') === -1 || minder.execCommand('AppendParentNode')"
      title="插入上级主题"
    >
      <i class="km-btn-icon"></i>
      <span class="km-btn-caption">插入上级主题</span>
    </div>
    <div
      class="km-btn-item append-sibling-node"
      :disabled="minder.queryCommandState('AppendSiblingNode') === -1"
      @click="minder.queryCommandState('AppendSiblingNode') === -1 ||minder.execCommand('AppendSiblingNode')"
      title="插入同级主题"
    >
      <i class="km-btn-icon"></i>
      <span class="km-btn-caption">插入同级主题</span>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AppendNode extends Vue {
  @Prop({ required: true, type: Object }) minder: any
}
</script>
