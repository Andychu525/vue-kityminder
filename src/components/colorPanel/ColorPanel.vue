<template>
  <div class="bg-color-wrap">
    <span
      class="quick-bg-color"
      @click="minder.queryCommandState('background') === -1 || minder.execCommand('background', bgColor)"
      :disabled="minder.queryCommandState('background') === -1"
    ></span>
    <span
      color-picker
      class="bg-color"
      set-color="setDefaultBg()"
      :disabled="minder.queryCommandState('background') === -1"
    >
      <span class="caret"></span>
    </span>
    <span
      class="bg-color-preview"
      ng-style="{ 'background-color': bgColor }"
      @click="minder.queryCommandState('background') === -1 || minder.execCommand('background', bgColor)"
      :disabled="minder.queryCommandState('background') === -1"
    ></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ColorPanel extends Vue {
  @Prop({ required: true, type: Object }) minder: any
  bgColor = '#000'
}
</script>
