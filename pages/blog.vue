<template>
  <div>
    <h2>
      Blog: WIP
    </h2>
    <p v-for="index in 100">blah {{index}}</p>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"

    @Component({})
    export default class Blog extends Vue {

    }
</script>

<style lang="scss" scoped>
  @import '~/css/main.scss';

  $page-highlight-color: $color-blog-bright;

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  h2 {
    text-decoration: underline;
    text-decoration-color: $color-blog-bright;
  }
</style>
