<template>
  <div class="resource-editor">
    <div class="input-group">
      <input class="form-control" type="text" v-model="newResourceName" :disabled="!enabled" />
      <span class="input-group-btn">
        <button class="btn btn-default" :disabled="!enabled">添加</button>
      </span>
    </div>
    <!-- <div class="resource-dropdown clearfix" id="resource-dropdown">
      <ul class="km-resource">
        <li ng-repeat="resource in used" :disabled="!enabled">
          <label style="background: {{resourceColor(resource.name)}}">
            <input type="checkbox" ng-model="resource.selected" :disabled="!enabled">
            <span>{{resource.name}}</span>
          </label>
        </li>
      </ul>
      <div
        class="resource-caret"
        click-anywhere-but-here="resourceListOpen = false"
        is-active="resourceListOpen"
        @click="resourceListOpen = !resourceListOpen"
      >
        <span class="caret"></span>
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ResourceEditor extends Vue {
  @Prop({ required: true, type: Object }) minder: any
  enabled = true
  newResourceName = ''

  // function(resourceName) {
  //   var origin = minder.queryCommandValue('resource')
  //   if (!resourceName || !/\S/.test(resourceName)) return

  //   if (origin.indexOf(resourceName) == -1) {
  //     $scope.used.push({
  //       name: resourceName,
  //       selected: true
  //     })
  //   }

  //   $scope.newResourceName = null
  // }
}
</script>
