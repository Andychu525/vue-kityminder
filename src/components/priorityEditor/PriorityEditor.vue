<template>
  <ul class="km-priority tool-group" :disabled="minder.queryCommandState('priority') === -1">
    <li
      v-for="p in numList"
      :key="p"
      class="km-priority-item tool-group-item"
      @click="minder.queryCommandState('priority') === -1 || minder.execCommand('priority', p)"
      ng-class="{ active: commandValue == p }"
      :title="getPriorityTitle(p)"
    >
      <div class="km-priority-icon tool-group-icon" :class="`priority-${p}`"></div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PriorityEditor extends Vue {
  @Prop({ required: true, type: Object }) minder: any

  get numList() {
    const l = []
    for (let i = 0; i < 10; i++) {
      l.push(i)
    }
    return l
  }

  getPriorityTitle(index: number) {
    switch (index) {
      case 0:
        return '移除优先级'
      default:
        return '优先级' + index
    }
  }
}
</script>
