<template>
  <div class="flex-row page">
    <div class="flex-col flex-auto self-start space-y-32">
      <div class="flex-col">
        <div class="flex-col items-end image-wrapper">
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539561264968030.png"
          />
        </div>
        <div class="flex-row group_2 space-x-8">
          <span class="font_1 text_2">课表生成</span>
          <span class="font_1 text_5">/</span>
          <span class="font_1 text_3">生成失败</span>
        </div>
      </div>
      <div class="flex-col group_3 space-y-26">
        <span class="self-start text_6">课表生成</span>
        <div class="flex-col section_4 space-y-172">
          <div class="flex-col group_4 space-y-16">
            <div class="flex-row items-center space-x-48">
              <img
                class="image_3"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16710144498408950368.png"
              />
              <span class="text_9">生成失败！</span>
            </div>
            <span class="self-end text_10">无法生成可行方案，请添加或减少一些课程！</span>
            <div class="a1 text_7">共有{{classSize}}种排课方法,其中可行的有{{this.$store.state.count}}种</div>
          </div>
          <div class="flex-row justify-between group_5">
            <el-button type="primary" class="a1" @click="tiaozhuanshaixuan">课程筛选</el-button>
            <el-button type="primary" class="a1" @click="tiaozhuantianjia">手动添加</el-button>
            <el-button type="primary" class="a1" @click="tiaozhuanyixuan">已选课程</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    components: {},
    data() {
      return {};
    },
  computed:{
      ...mapState(['classSize'])
  },
    methods: {
      tiaozhuanshaixuan(){
        this.$router.push('/kechengshaixuan')
      },
      tiaozhuantianjia(){
        this.$router.push('/shoudongtianjiafangan2')
      },
      tiaozhuanyixuan(){
        this.$router.push('/yixuankecheng')
      }
    },
  };
</script>

<style scoped lang="css">
.a1{

  margin-right: 30px;
}
  .page {
    background-color: #f0f2f5;
    overflow: hidden;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .section {
    padding: 20px 0 444px;
    background-color: #334154;
    width: 210px;
    height: 900px;
  }
  .text {
    color: #1989fa;
    font-size: 24px;
    font-family: KingsoftCloud;
    line-height: 21.5px;
  }
  .group {
    margin-top: 14px;
  }
  .section_2 {
    padding: 22px 30px;
    background-color: #334154;
  }
  .space-x-80 > *:not(:first-child) {
    margin-left: 80px;
  }
  .font_2 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #c0c4cc;
  }
  .text_4 {
    color: #ffffff;
  }
  .image_2 {
    width: 12px;
    height: 12px;
  }
  .section_3 {
    padding: 22px 30px 28px;
    background-color: #222d3c;
  }
  .space-y-44 > *:not(:first-child) {
    margin-top: 44px;
  }
  .text_7 {
    color: #bbbec5;
  }
  .text-wrapper {
    padding: 22px 0;
    background-color: #334154;
    width: 210px;
  }
  .text_8 {
    margin-left: 30px;
  }
  .section_5 {
    background-color: #334154;
    height: 56px;
  }
  .space-y-32 > *:not(:first-child) {
    margin-top: 32px;
  }
  .image-wrapper {
    padding: 20px 0;
    background-color: #ffffff;
    box-shadow: 0px 1px 4px #0015291f;
  }
  .image {
    margin-right: 26px;
    width: 14px;
    height: 14px;
  }
  .group_2 {
    padding: 20px 24px 0;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 8px;
  }
  .font_1 {
    font-size: 12px;
    font-family: HarmonyOSSansSC;
    line-height: 11px;
  }
  .text_2 {
    color: #545556;
  }
  .text_5 {
    color: #00000073;
    line-height: 9px;
  }
  .text_3 {
    color: #848587;
    line-height: 11.5px;
  }
  .group_3 {
    padding: 0 17px;
  }
  .space-y-26 > *:not(:first-child) {
    margin-top: 26px;
  }
  .text_6 {
    margin-left: 8px;
    color: #545556;
    font-size: 16px;
    font-family: SourceHanSansCN;
    line-height: 15px;
  }
  .section_4 {
    margin-right: 14px;
    padding: 240px 222px 154px;
    background-color: #ffffff;
    border-radius: 4px;
  }
  .space-y-172 > *:not(:first-child) {
    margin-top: 172px;
  }
  .group_4 {
    padding-left: 78px;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 16px;
  }
  .space-x-48 > *:not(:first-child) {
    margin-left: 48px;
  }
  .image_3 {
    width: 84px;
    height: 84px;
  }
  .text_9 {
    color: #e6a23c;
    font-size: 60px;
    font-family: SourceHanSansCN;
    font-weight: 700;
    line-height: 57.5px;
  }
  .text_10 {
    color: #e6a23c;
    font-size: 24px;
    font-family: SourceHanSansCN;
    line-height: 23.5px;
  }
  .group_5 {
    padding: 0 120px;
  }
  .text-wrapper_2 {
    padding: 8px 0;
    background-color: #409eff;
    border-radius: 4px;
    width: 88px;
    height: 30px;
  }
  .font_3 {
    font-size: 14px;
    font-family: HarmonyOSSansSC;
    line-height: 13px;
    color: #ffffff;
  }
  .view {
    margin-right: 21px;
  }
</style>
