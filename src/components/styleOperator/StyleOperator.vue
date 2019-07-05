<template>
  <div class="style-operator">
    <a
      @click="
        minder.queryCommandState('clearstyle') === -1 ||
          minder.execCommand('clearstyle')
      "
      class="btn-wrap clear-style"
      :disabled="minder.queryCommandState('clearstyle') === -1"
    >
      <span class="btn-icon clear-style-icon"></span>
      <span class="btn-label">清除样式</span>
    </a>
    <div class="s-btn-group-vertical">
      <a
        class="s-btn-wrap"
        href
        @click="
          minder.queryCommandState('copystyle') === -1 ||
            minder.execCommand('copystyle')
        "
        :disabled="minder.queryCommandState('copystyle') === -1"
      >
        <span class="s-btn-icon copy-style-icon"></span>
        <span class="s-btn-label">复制样式</span>
      </a>

      <a
        class="s-btn-wrap paste-style-wrap"
        href
        @click="
          minder.queryCommandState('pastestyle') === -1 ||
            minder.execCommand('pastestyle')
        "
        :disabled="minder.queryCommandState('pastestyle') === -1"
      >
        <span class="s-btn-icon paste-style-icon"></span>
        <span class="s-btn-label">粘贴样式</span>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class StyleOperator extends Vue {
  @Prop({ required: true, type: Object }) minder: any
}
</script>
