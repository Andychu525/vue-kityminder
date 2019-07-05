<template>
  <ul class="km-progress tool-group" :disabled="minder.queryCommandState('progress')===-1">
    <li
      class="km-progress-item tool-group-item"
      v-for="p in numList"
      :key="p"
      @click="minder.queryCommandState('progress')===-1 || minder.execCommand('progress', p)"
      :title="getProgressTitle(p)"
    >
      <div class="km-progress-icon tool-group-icon" :class="`progress-${p}`"></div>
    </li>
  </ul>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProgressEditor extends Vue {
  @Prop({ required: true, type: Object }) minder: any

  get numList() {
    const l = []
    for (let i = 0; i < 10; i++) {
      l.push(i)
    }
    return l
  }

  getProgressTitle(index: number) {
    switch (index) {
      case 0:
        return '移除进度'
      case 1:
        return '未开始'
      case 9:
        return '全部完成'
      default:
        return '完成' + (index - 1) + '/8'
    }
  }
}
</script>
