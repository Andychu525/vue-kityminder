<template>
  <div class="temp-panel">
    <a-popover placement="topLeft" trigger="click">
      <template slot="content">
        <div class="theme-container">
          <a
            v-for="(_,key) in templateList"
            :class="getTemplateItemClass(key)"
            :key="key"
            :title="templateTitle[key]"
            @click="minder.execCommand('template', key)"
          />
        </div>
      </template>
      <div class="current-temp-item" :disabled="minder.queryCommandState('template') === -1">
        <a href class="temp-item" :title="templateTitle['']"></a>
      </div>
    </a-popover>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TemplateList extends Vue {
  @Prop({ required: true, type: Object }) minder: any

  templateTitle = {
    'default': '思维导图',
    'tianpan': '天盘图(适合少量)',
    'structure': '组织结构图',
    'filetree': '目录组织图',
    'right': '逻辑结构图',
    'fish-bone': '鱼骨头图'
  }

  get templateList() {
    return window.kityminder.Minder.getTemplateList()
  }

  getTemplateItemClass(key: number) {
    return [
      {
        'temp-item-wrap': true
      },
      'temp-item ' + key
    ]
  }
}
</script>

<style lang="less" scoped>
.theme-container {
  display: inline-grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}
</style>