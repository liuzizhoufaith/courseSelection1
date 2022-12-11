<template>
  <div class="flex-row page">
    <div class="flex-col group_3">
      <div class="flex-col">
        <div class="flex-col items-end image-wrapper">
          <img
            class="image image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539561264968030.png"
          />
        </div>
        <span class="text_6">偏好设置</span>
        <div class="flex-row group_5 space-x-42">
          <div class="font_3 text_8 aaa" @click="kexuanpianhao">可选偏好</div>
          <div class="font_3 text_8 aaa" @click="dingzhipianhao">定制偏好</div>
        </div>
        <div class="divider"></div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import pianhaoshezhi1 from "@/pages/pianhaoshezhi/pianhaoshezhi1/pianhaoshezhi1";
import pianhaoshezhi2 from "@/pages/pianhaoshezhi/pianhaoshezhi2/pianhaoshezhi2";
export default {
  name: "pianhaoshezhi",
  components:{pianhaoshezhi2,pianhaoshezhi1},
  methods:{
    kexuanpianhao(){
      this.$router.push('/pianhaoshezhi1')
    },
    dingzhipianhao(){
      this.$router.push('/pianhaoshezhi2')
    }
  }
}
</script>

<style scoped lang="css">
.aaa:hover{
  color: #0486fe;
}

.font_3 {
  font-size: 14px;
  font-family: Roboto;
  line-height: 13px;
  color: #606266;
}
.font_1 {
  font-size: 14px;
  font-family: SourceHanSansCN;
  line-height: 13px;
  color: #c0c4cc;
}
.font_2 {
  font-size: 14px;
  font-family: SourceHanSansCN;
  line-height: 13px;
  color: #ffffff;
}
.text-wrapper {
  padding: 22px 0 20px;
  background-color: #334154;
  width: 210px;
}
.image {
  width: 14px;
  height: 14px;
}
.equal-division-item_2 {
  flex: 1 1 160px;
  padding: 18px 0 22px;
  border-radius: 4px;
  width: 160px;
  height: 153px;
  border: solid 1px #1989fa;
}
.equal-division-item_3 {
  flex: 1 1 160px;
  padding: 18px 0 22px;
  border-radius: 4px;
  width: 160px;
  height: 153px;
  border: solid 1px #dcdfe6;
}
.text-wrapper_2 {
  padding: 12px 0 10px;
  background-color: #1989fa;
  border-radius: 4px;
  width: 137px;
  height: 36px;
}
.section_10 {
  border-radius: 50%;
  width: 14px;
  height: 14px;
  border: solid 1px #d5d8de;
}
.image_9 {
  width: 70px;
  height: 71px;
}
.text_3 {
  margin-left: 30px;
}
.page {
  background-color: #f0f2f5;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.section_2 {
  padding: 20px 0 444px;
  flex-shrink: 0;
  background-color: #334154;
  width: 210px;
  height: 900px;
}
.group_3 {
  flex: 1 1 auto;
}
.section_5 {
  background-color: #334154;
  height: 56px;
}
.section_6 {
  margin: 41px 24px 0;
  padding: 30px 24px 24px;
  background-color: #ffffff;
  border-radius: 4px;
}
.text {
  align-self: center;
  color: #1989fa;
  font-size: 24px;
  font-family: KingsoftCloud;
  line-height: 21.5px;
}
.image-wrapper {
  padding: 21px 0;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px #0015291f;
}
.text_6 {
  margin-left: 24px;
  margin-top: 20px;
  align-self: flex-start;
  color: #545556;
  font-size: 12px;
  font-family: HarmonyOSSansSC;
  line-height: 11px;
}
.group_5 {
  margin-top: 29px;
  padding: 0 24px;
}
.divider {
  margin: 14px 26px 0 24px;
  background-color: #e4e7ed;
  height: 2px;

}
.text_9 {
  align-self: flex-start;
  color: #545556;
  font-size: 18px;
  font-family: SourceHanSansCN;
  line-height: 17px;
}
.equal-division {
  margin-top: 28px;
  align-self: flex-start;
}
.group_6 {
  margin-top: 23px;
}
.section_3 {
  padding: 22px 30px 21px;
  background-color: #334154;
}
.image_2 {
  margin-right: 26px;
}
.text_7 {
  color: #1989fa;
}
.text_8 {
  color: #303133;
}
.equal-division-item {
  padding: 18px 12px 11px 18px;
  flex: 1 1 160px;
  border-radius: 4px;
  width: 160px;
  height: 153px;
  border: solid 1px #1989fa;
}
.section_4 {
  flex-shrink: 0;
  background-color: #00000000;
  width: 12px;
  height: 12px;
}
.image_3 {
  align-self: center;
}
.image_4 {
  margin-top: 4px;
  align-self: center;
  width: 64px;
  height: 74px;
}
.text_10 {
  line-height: 14px;
  text-indent: 19px;
}
.image_6 {
  width: 72px;
  height: 72px;
}
.image_8 {
  margin-top: 5px;
  width: 92px;
  height: 79px;
}
.text_12 {
  line-height: 13.5px;
}
.space-y-166 > *:not(:first-child) {
  margin-top: 166px;
}
.space-y-15 > *:not(:first-child) {
  margin-top: 15px;
}
.space-y-5 > *:not(:first-child) {
  margin-top: 5px;
}
.space-x-42 > *:not(:first-child) {
  margin-left: 42px;
}
.space-x-10 > *:not(:first-child) {
  margin-left: 10px;
}
.space-x-21 > *:not(:first-child) {
  margin-left: 21px;
}
.space-x-80 > *:not(:first-child) {
  margin-left: 80px;
}
.space-y-6 > *:not(:first-child) {
  margin-top: 6px;
}
.space-y-7 > *:not(:first-child) {
  margin-top: 7px;
}
</style>
