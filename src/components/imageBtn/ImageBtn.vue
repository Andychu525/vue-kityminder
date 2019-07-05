<template>
  <div class="btn-group-vertical" dropdown is-open="isopen">
    <button
      type="button"
      class="btn btn-default image-btn"
      title="    "
      ng-class="{'active': isopen}"
      @click="addImage()"
      :disabled="minder.queryCommandState('Image') === -1"
    ></button>
    <button
      type="button"
      class="btn btn-default image-btn-caption dropdown-toggle"
      :disabled="minder.queryCommandState('Image') === -1"
      title="    "
      dropdown-toggle
    >
      <span class="caption"></span>
      <span class="caret"></span>
      <span class="sr-only"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li>
        <a href @click="addImage()"></a>
      </li>
      <li>
        <a href @click="minder.execCommand('Image', '')"></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ImageBtn extends Vue {
  @Prop({ required: true, type: Object }) minder: any
}
</script>
