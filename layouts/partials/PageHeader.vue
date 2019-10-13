<template>
  <div>
    <b-row class="title p-l-0 p-r-0">
      <b-col class="p-l-auto"/>
      <b-col md="4">
        laurence_codes
      </b-col>
      <b-col class="p-r-auto"/>
    </b-row>
    <div v-sticky sticky-z-index="0">
      <b-row class="border-bottom navigation">
        <b-col v-if="!isMobile()" class="p-l-auto"/>
        <b-col class="nav-link border-left" cols="4" md="1">
          <nuxt-link to="/">home</nuxt-link>
        </b-col>
        <b-col class="nav-link border-left" cols="4" md="1">
          <nuxt-link to="/blog">blog</nuxt-link>
        </b-col>
        <b-col class="nav-link border-left border-right" cols="4" md="1">
          <nuxt-link to="/oss">oss</nuxt-link>
        </b-col>
        <b-col v-if="!isMobile()" class="p-r-auto"/>

      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
    import IsMobileMixin from "~/components/mixins/IsMobileMixin"
    import {Mixins, Component} from "vue-mixin-decorator"

    @Component({})
    export default class PageHeader extends Mixins<IsMobileMixin>(IsMobileMixin) {

    }
</script>

<style>
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
    font-size: 40px;
    color: #35495e;
    background: lightgray;
    letter-spacing: 1px;
    text-align: center;
  }

  .nav-link {
    text-align: center;
  }

  .navigation {
    background: white;
  }
</style>
