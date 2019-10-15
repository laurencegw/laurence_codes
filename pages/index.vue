<template>
  <div>
    <b-row>
      <b-col cols="auto" md="6">
        <h2>Hi</h2>
        <p>
          I am a Software Engineer, and I love what I do :)
        </p>
        <p>
          This is where I share my thoughts on Software Engineering philosophies/principals, my Open Source projects and
          any other code related snippets that I find interesting or useful.
        </p>
      </b-col>
      <b-col>
        <h2>Find me</h2>
        <b-row>
          <b-col cols="2" md="1">
            <a class="social-link" href="https://github.com/lgwillmore" target="_blank">
              <font-awesome-icon :icon="['fab', 'github-square']" size="3x"/>
            </a>
          </b-col>
          <b-col cols="2" md="1">
            <a class="social-link" href="https://www.linkedin.com/in/laurence-willmore-477a8472/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="3x"/>
            </a>
          </b-col>
          <b-col cols="2" md="1">
            <a class="social-link" href="https://twitter.com/LGWillmore" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter-square']" size="3x"/>
            </a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="auto" md="6">
        <h2>Highlights</h2>
        <p>
          There will be some stuff here once I get a few of my OSS projects into order
        </p>
      </b-col>
      <b-col>
        <h2>Recent</h2>
        <p>
          There will be some stuff here once I get a few of my OSS projects into order
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"

    @Component({})
    export default class Index extends Vue {

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

  .social-link {
    color: #47494e;
  }

  .social-link:hover {
    color: #7F828B;
  }
</style>
