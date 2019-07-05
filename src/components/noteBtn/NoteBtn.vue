<template>
  <div class="btn-group-vertical note-btn-group" dropdown is-open="isopen">
    <button
      type="button"
      class="btn btn-default note-btn"
      title="    "
      ng-class="{'active': isopen}"
      @click="addNote()"
      :disabled="minder.queryCommandState('note') === -1"
    ></button>
    <button
      type="button"
      class="btn btn-default note-btn-caption dropdown-toggle"
      :disabled="minder.queryCommandState('note') === -1"
      title="    "
      dropdown-toggle
    >
      <span class="caption"></span>
      <span class="caret"></span>
      <span class="sr-only"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li>
        <a href @click="addNote()"></a>
      </li>
      <li>
        <a href @click="minder.execCommand('note', null)"></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class NoteBtn extends Vue {
  @Prop({ required: true, type: Object }) minder: any
}
</script>
