<template>
  <div id="app">
    <a-tabs type="card" v-if="!!minder">
      <a-tab-pane tab="思路" key="1" class="tab-content">
        <undo-redo />
        <append-node :minder="minder" />
        <arrange :minder="minder" />
        <operation :minder="minder" />
        <priority-editor :minder="minder" />
        <progress-editor :minder="minder" />
      </a-tab-pane>
      <a-tab-pane tab="外观" key="2" class="tab-content">
        <template-list :minder="minder" />
        <theme-list :minder="minder" />
        <layout :minder="minder" />
        <style-operator :minder="minder" />
        <font-operator :minder="minder" />
      </a-tab-pane>
      <a-tab-pane tab="视图" key="3" class="tab-content">
        <expand-level :minder="minder" />
        <select-all :minder="minder" />
      </a-tab-pane>
    </a-tabs>
    <div id="minder" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import KMEditor from '@/core/editor'
import 'kity'
import 'kityminder-core'

import {
  AppendNode,
  UndoRedo,
  Arrange,
  Operation,
  HyperLink,
  // ImageBtn,
  // NoteBtn,
  // NoteEditor,
  PriorityEditor,
  ProgressEditor,
  ResourceEditor,
  TemplateList,
  ThemeList,
  Layout,
  StyleOperator,
  FontOperator,
  ExpandLevel,
  SelectAll
} from './components'

@Component({
  components: {
    AppendNode,
    UndoRedo,
    Arrange,
    Operation,
    HyperLink,
    // ImageBtn,
    // NoteBtn,
    // NoteEditor,
    PriorityEditor,
    ProgressEditor,
    ResourceEditor,
    TemplateList,
    ThemeList,
    Layout,
    StyleOperator,
    FontOperator,
    ExpandLevel,
    SelectAll
  }
})
export default class App extends Vue {
  private editor: any = null
  private minder: any = null

  mounted() {
    this.editor = new KMEditor('#minder')
    this.minder = this.editor.minder
    this.minder.importJson({
      root: {
        data: { text: 'seller-center' },
        children: [
          { data: { text: '新闻' } },
          { data: { text: '网页', priority: 1 } },
          { data: { text: '贴吧', priority: 2 } },
          { data: { text: '知道', priority: 2 } },
          { data: { text: '音乐', priority: 3 } },
          { data: { text: '图片', priority: 3 } },
          { data: { text: '视频', priority: 3 } },
          { data: { text: '地图', priority: 3 } },
          { data: { text: '百科', priority: 3 } },
          { data: { text: '更多', hyperlink: 'http://www.baidu.com/more' } }
        ]
      }
    })
  }
}
</script>

<style lang="less">
@import './less/editor.less';
@import '~hotbox/hotbox.css';

#app {
  height: 100vh;
}

#minder {
  width: 100%;
  height: 600px;
}
</style>
