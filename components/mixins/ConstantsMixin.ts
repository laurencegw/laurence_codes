import Vue from "vue"
import {Mixin} from "vue-mixin-decorator"

@Mixin
export default class ConstantsMixin extends Vue {

  public readonly colors = {
    home_bright : "#2CCDFB",
    blog_bright : "#88D498",
    oss_bright : "#BF94DE",
  }

}
