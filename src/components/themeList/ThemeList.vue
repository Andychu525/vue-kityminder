<template>
  <div class="temp-panel">
    <a-popover placement="topLeft" trigger="click">
      <template slot="content">
        <div class="theme-container">
          <a
            v-for="(title, theme) in themeObjectList"
            :key="theme"
            :style="getThemeThumbStyle(theme)"
            :title="title"
            @click="minder.execCommand('theme', theme)"
            class="theme-item"
          >{{ title }}</a>
        </div>
      </template>
      <div class="current-temp-item" :disabled="minder.queryCommandState('template') === -1">
        <a
          href
          class="theme-item"
          :style="getThemeThumbStyle(getCurrentTheme())"
          :title="themeObjectList[getCurrentTheme()]"
        >{{ themeObjectList[getCurrentTheme()] }}</a>
      </div>
    </a-popover>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AppendNode extends Vue {
  @Prop({ required: true, type: Object }) minder: any

  get themeObjectList() {
    return {
      classic: '脑图经典',
      'classic-compact': '紧凑经典',
      snow: '温柔冷光',
      'snow-compact': '紧凑冷光',
      fish: '鱼骨图',
      wire: '线框',
      'fresh-red': '清新红',
      'fresh-soil': '泥土黄',
      'fresh-green': '文艺绿',
      'fresh-blue': '天空蓝',
      'fresh-purple': '浪漫紫',
      'fresh-pink': '脑残粉',
      'fresh-red-compat': '紧凑红',
      'fresh-soil-compat': '紧凑黄',
      'fresh-green-compat': '紧凑绿',
      'fresh-blue-compat': '紧凑蓝',
      'fresh-purple-compat': '紧凑紫',
      'fresh-pink-compat': '紧凑粉',
      tianpan: '经典天盘',
      'tianpan-compact': '紧凑天盘'
    }
  }

  getCurrentTheme() {
    return this.minder.queryCommandValue('theme')
  }

  getThemeThumbStyle(theme: string) {
    const themeList = window.kityminder.Minder.getThemeList()

    const themeObj = themeList[theme]
    if (!themeObj) {
      return
    }
    const style: any = {
      color: themeObj['root-color'],
      'border-radius': (themeObj['root-radius'] / 2).toString() + 'px'
    }

    if (themeObj['root-background']) {
      style['background'] = themeObj['root-background'].toString()
    }
    console.error(style)

    return style
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
