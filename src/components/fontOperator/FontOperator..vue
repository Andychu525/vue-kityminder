<template>
  <div class="font-operator">
    <a-select
      size="small"
      defaultValue="字体"
      class="font-family-list"
      :disabled="minder.queryCommandState('fontfamily') === -1"
    >
      <a-select-option
        class="font-item-wrap font-list"
        v-for="(f, index) in fontFamilyList"
        :value="f.val"
        :key="index"
      >
        <a
          @click="minder.execCommand('fontfamily', f.val)"
          class="font-item"
          :class="{
            'font-item-selected': f == minder.queryCommandValue('fontfamily')
          }"
          :style="{ 'font-family': f.val }"
        >{{ f.name }}</a>
      </a-select-option>
    </a-select>
    <a-select
      size="small"
      defaultValue="字号"
      class="font-size-list"
      :disabled="minder.queryCommandState('fontfamily') === -1"
    >
      <a-select-option
        class="font-item-wrap font-list"
        v-for="(f, index) in fontSizeList"
        :value="f"
        :key="index"
      >
        <a
          @click="minder.execCommand('fontsize', f)"
          class="font-item"
          :class="{
            'font-item-selected': f == minder.queryCommandValue('fontsize')
          }"
          :style="{ 'font-size': f + 'px' }"
        >{{ f }}</a>
      </a-select-option>
    </a-select>
    <span
      class="s-btn-icon font-bold"
      @click="
        minder.queryCommandState('bold') === -1 || minder.execCommand('bold')
      "
      :class="{ 'font-bold-selected': minder.queryCommandState('bold') == 1 }"
      :disabled="minder.queryCommandState('bold') === -1"
    ></span>
    <span
      class="s-btn-icon font-italics"
      @click="
        minder.queryCommandState('italic') === -1 ||
          minder.execCommand('italic')
      "
      :class="{
        'font-italics-selected': minder.queryCommandState('italic') == 1
      }"
      :disabled="minder.queryCommandState('italic') === -1"
    ></span>
    <div class="font-color-wrap">
      <span
        class="quick-font-color"
        @click="
          minder.queryCommandState('forecolor') === -1 ||
            minder.execCommand('forecolor', foreColor)
        "
        :disabled="minder.queryCommandState('forecolor') === -1"
      >A</span>
      <span
        color-picker
        class="font-color"
        set-color="setDefaultColor()"
        :disabled="minder.queryCommandState('forecolor') === -1"
      >
        <span class="caret"></span>
      </span>
      <span
        class="font-color-preview"
        :style="{ 'background-color': foreColor }"
        @click="
          minder.queryCommandState('forecolor') === -1 ||
            minder.execCommand('forecolor', foreColor)
        "
        :disabled="minder.queryCommandState('forecolor') === -1"
      ></span>
    </div>
    <color-panel :minder="minder" class="inline-directive"></color-panel>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ColorPanel from '../colorPanel/ColorPanel.vue'

@Component({ components: { ColorPanel } })
export default class FontOperator extends Vue {
  @Prop({ required: true, type: Object }) minder: any

  fontFamilyList = [
    {
      name: '宋体',
      val: '宋体,SimSun'
    },
    {
      name: '微软雅黑',
      val: '微软雅黑,Microsoft YaHei'
    },
    {
      name: '楷体',
      val: '楷体,楷体_GB2312,SimKai'
    },
    {
      name: '黑体',
      val: '黑体, SimHei'
    },
    {
      name: '隶书',
      val: '隶书, SimLi'
    },
    {
      name: 'Andale Mono',
      val: 'andale mono'
    },
    {
      name: 'Arial',
      val: 'arial,helvetica,sans-serif'
    },
    {
      name: 'arialBlack',
      val: 'arial black,avant garde'
    },
    {
      name: 'Comic Sans Ms',
      val: 'comic sans ms'
    },
    {
      name: 'Impact',
      val: 'impact,chicago'
    },
    {
      name: 'Times New Roman',
      val: 'times new roman'
    },
    {
      name: 'Sans-Serif',
      val: 'sans-serif'
    }
  ]
  fontSizeList = [10, 12, 16, 18, 24, 32, 48]

  foreColor = '#000'
}
</script>
