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
          <nuxt-link to="/" tag="button">home</nuxt-link>
        </b-col>
        <b-col class="nav-link border-left" cols="4" md="1">
          <nuxt-link to="/blog" tag="button">blog</nuxt-link>
        </b-col>
        <b-col class="nav-link border-left border-right" cols="4" md="1">
          <nuxt-link to="/oss" tag="button">oss</nuxt-link>
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
    color: #47494e;
    background: lightgray;
    letter-spacing: 1px;
    text-align: center;
  }

  .nav-link {
    text-align: center;
    color: #47494e;
    padding: 0;
  }

  .nav-link:hover {
    background: darkgray;
    text-align: center;
    color: #47494e;
  }

  nuxt-link {
    color: #47494e;
  }

  .navigation {
    background: white;
  }

  .nav-link button {
    background: white;
    border: 0;
    padding: 0;
    margin: 0;
    outline: none;
    width: 100%;
  }

  .nuxt-link-exact-active {
    background: lightgray !important;
    text-decoration: underline;
  }


  .nav-link button:hover {
  @extend nav-link button;
    background: darkgray;
  }


</style>
