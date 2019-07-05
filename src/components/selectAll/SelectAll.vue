<template>
  <div class="btn-group-vertical" dropdown is-open="isopen">
    <button
      type="button"
      class="btn btn-default select"
      title="    "
      ng-class="{'active': isopen}"
      @click="select['all']()"
    ></button>

    <a-dropdown :trigger="['click']">
      <button
        type="button"
        class="btn btn-default select-caption dropdown-toggle"
        title="    "
        dropdown-toggle
      >
        <span class="caption"></span>
        <span class="caret"></span>
        <span class="sr-only"></span>
      </button>
      <a-menu slot="overlay">
        <a-menu-item v-for="(item, index) in items" :key="index">
          {{
          item
          }}
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SelectAll extends Vue {
  @Prop({ required: true, type: Object }) minder: any
  items = ['revert', 'siblings', 'level', 'path', 'tree']
}
</script>
