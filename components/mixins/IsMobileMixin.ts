import Vue from "vue"
import {Mixin} from "vue-mixin-decorator"
import mobile from "is-mobile"

@Mixin
export default class IsMobileMixin extends Vue{

  public isMobile(): boolean {
    // @ts-ignore
    const isM: boolean  =  mobile()
    console.log(isM)
    return isM
  }

}
