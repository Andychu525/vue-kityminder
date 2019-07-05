<template>
  <div class="km-btn-group do-group">
    <div class="km-btn-item undo" title="后退">
      <i class="km-btn-icon"></i>
    </div>
    <div class="km-btn-item redo" title="前进">
      <i class="km-btn-icon"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UndoRedo extends Vue {}
</script>