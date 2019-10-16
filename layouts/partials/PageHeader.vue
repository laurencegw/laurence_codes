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
      <b-row class="navigation">
        <b-col v-if="!isMobile()" class="p-l-auto navbar-buffer" :style="navBarBufferStyle"/>
        <b-col class="nav-link" cols="4" md="1" :style="navButtonStyle('index', 'LEFT')">
          <nuxt-link to="/" tag="button">home</nuxt-link>
        </b-col>
        <b-col class="nav-link" cols="4" md="1" :style="navButtonStyle('blog', 'MIDDLE')">
          <nuxt-link to="/blog" tag="button">blog</nuxt-link>
        </b-col>
        <b-col class="nav-link" cols="4" md="1" :style="navButtonStyle('oss', 'RIGHT')">
          <nuxt-link to="/oss" tag="button">oss</nuxt-link>
        </b-col>
        <b-col v-if="!isMobile()" class="p-r-auto navbar-buffer" :style="navBarBufferStyle"/>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
    import IsMobileMixin from "~/components/mixins/IsMobileMixin"
    import ConstantsMixin from "~/components/mixins/ConstantsMixin"
    import {Mixins, Component} from "vue-mixin-decorator"

    interface IMixinInterface extends IsMobileMixin, ConstantsMixin {
    }

    enum Position {
        LEFT,
        MIDDLE,
        RIGHT
    }

    const highlightBorderWidth = "3px"

    @Component({})
    export default class PageHeader extends Mixins<IMixinInterface>(IsMobileMixin, ConstantsMixin) {

        public get rname(): string {
            let it = this.$route.name || "unknown"
            return it
        }

        public get activeColor(): string {
            return this.routeColor(this.rname)
        }

        public get navBarBufferStyle(): any {
            return {
                borderTopColor: this.activeColor,
                borderTopStyle: "solid",
                borderTopWidth: highlightBorderWidth,
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderBottomColor: "lightgray"
            }
        }

        public isRoutNameActive(routeName: string): boolean {
            return this.rname === routeName
        }

        public routeColor(name: string): string {
            let routeNameColors = new Map([
                ["index", this.colors.home_bright],
                ["blog", this.colors.blog_bright],
                ["oss", this.colors.oss_bright],
            ])
            return routeNameColors.get(name) || "#47494e"
        }

        public navButtonStyle(navButtonName: string, positionString: String): any {
            const position = Position[positionString as keyof typeof Position]
            const baseStyle = {
                borderStyle: 'solid',
            }
            if (this.isRoutNameActive(navButtonName)) {
                const activeStyle = {
                    ...baseStyle
                }
                return {
                    ...activeStyle,
                    borderTopColor: "lightgray",
                    borderLeftColor: this.activeColor,
                    borderLeftWidth: highlightBorderWidth,
                    borderRightColor: this.activeColor,
                    borderRightWidth: highlightBorderWidth,
                    borderBottomColor: this.activeColor,
                    borderBottomWidth: highlightBorderWidth,
                }
            } else {
                const unactiveStyle = {
                    ...baseStyle,
                    borderColor: "#47494e",
                }
                return {
                    ...unactiveStyle,
                    borderTopColor: this.activeColor,
                    borderLeftColor: "transparent",
                    borderRightColor: "transparent",
                    borderBottomColor: "lightgray",
                    borderBottomWidth: "1px",
                    borderRightWidth: "0px",
                    borderLeftWidth: "0px"
                }
            }
        }

    }
</script>

<style lang="scss">
  @import '~/css/main.scss';

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
    background: transparent;
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
    background: darkgray;
  }


</style>
