<template>
  <div class="btn-group-vertical">
    <button
      type="button"
      class="btn btn-default expand"
      title="展开"
      @click="minder.execCommand('ExpandToLevel', 9999)"
    ></button>

    <a-dropdown :trigger="['click']">
      <button type="button" class="btn btn-default expand-caption dropdown-toggle" title="展开">
        <span class="caption"></span>
        <span class="caret"></span>
        <span class="sr-only"></span>
      </button>

      <a-menu slot="overlay">
        <a-menu-item
          v-for="(level,index) in levels"
          :key="index"
          @click="minder.execCommand('ExpandToLevel', level)"
        >{{level}}</a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ExpandLevel extends Vue {
  @Prop({ required: true, type: Object }) minder: any
  levels = [1, 2, 3, 4, 5, 6]
}
</script>
