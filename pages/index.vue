<template>
  <div>
    <b-row>
      <b-col cols="auto" md="6">
        <h2>Hi</h2>
        <p>
          I am a Software Engineer, and I love what I do.
        </p>
        <p>
          This is where I share my thoughts on Software Engineering principals, my open source projects and
          any other code related snippets that I find interesting or useful.
        </p>
        <p>
          In general, I am a fan of agile, clean code and test driven development. I realize this is probably a bit of a cliche, but I do try to stay as disciplined as I can when it comes to these governing principals. I also do my best to promote these ideas with the people I work with.
        </p>
        <p>
          In terms of specialization, I am happy to work across the stack in a polyglot environment. My sharpest tools at the moment are kotlin, java, python, typescript and vuejs. While I have said that I am happy in a polyglot environment, when it comes to languages, I will always opt for a typed language and preferably a null safe one... I am loving kotlin.
        </p>
        <p>
          This little personal page project is a new one. I am hoping it will be a driver for me to complete and cleanup a few of my side projects. Let us hope hey :D
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
