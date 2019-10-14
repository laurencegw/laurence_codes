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

<style>
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
