<template>
  <div class="btn-group btn-group-vertical" dropdown is-open="isopen">
    <button
      type="button"
      class="btn btn-default hyperlink"
      title="    "
      @click="addHyperlink()"
      :disabled="minder.queryCommandState('HyperLink') === -1"
    ></button>
    <button
      type="button"
      class="btn btn-default hyperlink-caption dropdown-toggle"
      :disabled="minder.queryCommandState('HyperLink') === -1"
      title="    "
      dropdown-toggle
    >
      <span class="caption"></span>
      <span class="caret"></span>
      <span class="sr-only"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li>
        <a href @click="addHyperlink()"></a>
      </li>
      <li>
        <a href @click="minder.execCommand('HyperLink', null)"></a>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HyperLink extends Vue {
  @Prop({ required: true, type: Object }) minder: any
}
</script>
