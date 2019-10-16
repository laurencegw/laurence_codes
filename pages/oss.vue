<template>
  <div>
    <h2>
      Open Source: WIP
    </h2>
    <p v-for="index in 100">blah {{index}}</p>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"

    @Component({})
    export default class OpenSource extends Vue {

    }
</script>

<style lang="scss" scoped>
  @import '~/css/main.scss';

  $page-highlight-color: $color-oss-bright;

  h2 {
    text-decoration: underline;
    text-decoration-color: $page-highlight-color;
  }
</style>
