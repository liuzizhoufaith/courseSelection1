<template>
  <div class="flex-col items-end page">
    <div class="section_2"></div>
    <div class="flex-col section_3">
      <div class="flex-col section_4 space-y-36">
        <div class="flex-col items-start space-y-4">
          <span class="text">添加教学班</span>
        </div>

            <div class="flex-row group_4" v-for="(mytime,index) of this.classNum*1" >
              <div class="font_1 text_3 a1">教学班{{index+1}}</div>
              <div class="font_4 text_3 a2">请选择教学班时段</div>
              <el-select v-model="MyTime[index]" multiple placeholder="请选择">
                <el-option v-for="(item,index) in classTime" :key="index" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>

        <div class="flex-row space-x-30">
          <el-button @click="quxiao">取消添加</el-button>
          <el-button type="success" @click="queren">确认添加</el-button>
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
      return {
        classTime:[
          {label:'周一12节',value:11},{label:'周一34节',value:12},{label:'周一第5节',value:13},
          {label:'周一67节',value:14},{label:'周一89节',value:15},{label:'周一10,11节',value:16},
          {label:'周一第12节',value:17},{label:'周二12节',value:21},{label:'周二34节',value:22},
          {label:'周二第5节',value:23},{label:'周二67节',value:24},{label:'周二89节',value:25},
          {label:'周二10,11节',value:26},{label:'周二第12节',value:27},{label:'周三12节',value:31},
          {label:'周三34节',value:32},{label:'周三第5节',value:33},{label:'周三67节',value:34},
          {label:'周三89节',value:35},{label:'周三10,11节',value:36},{label:'周三第12节',value:37},
          {label:'周四12节',value:41},{label:'周四34节',value:42},{label:'周四第5节',value:43},
          {label:'周四67节',value:44},{label:'周四89节',value:45},{label:'周四10,11节',value:46},
          {label:'周四第12节',value:47},{label:'周五12节',value:51},{label:'周五34节',value:52},
          {label:'周五第5节',value:53},{label:'周五67节',value:54},{label:'周五89节',value:55},
          {label:'周五10,11节',value:56},{label:'周五第12节',value:57},{label:'周六12节',value:61},
          {label:'周六34节',value:62},{label:'周六第5节',value:63},{label:'周六67节',value:64},
          {label:'周六89节',value:65},{label:'周六10,11节',value:66},{label:'周六第12节',value:67},
          {label:'周日12节',value:71},{label:'周日34节',value:72},{label:'周日第5节',value:73},
          {label:'周日67节',value:74},{label:'周日89节',value:75},{label:'周日10,11节',value:76},
          {label:'周日第12节',value:77},
        ],
      };
    },
    computed:{
      ...mapState(['MyTime','classNum']),
    },
  watch:{

  },
    methods: {
      quxiao(){
        this.$router.push('/shoudongtianjiafangan2')
      },
      queren(){
        this.$store.dispatch('tianjiajiaoxueban',this.MyTime)
        this.$router.push('/shoudongtianjiafangan2')
      }
    },
  };
</script>

<style scoped lang="css">
.a1{
  margin-right: 50px;
}
.a2{
  width: 150px;
  margin-right: 20px;
}
  .font_1 {
    font-size: 16px;
    font-family: SourceHanSansCN;
    line-height: 15px;
    color: #545556;
  }
  .font_4 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 17px;
    color: #545556;
  }
  .font_2 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #545556;
  }
  .font_3 {
    font-size: 14px;
    font-family: HarmonyOSSansSC;
    line-height: 13px;
    color: #909399;
  }
  .font_5 {
    font-size: 14px;
    font-family: Roboto;
    line-height: 13px;
  }
  .group_4 {
    padding-left: 3px;
  }
  .text_14 {
    margin-top: 14px;
    width: 57px;
  }
  .section_5 {
    flex-shrink: 0;
    padding: 12px 7px 14px 10px;
    background-color: #ffffff;
    border-radius: 4px;
    height: 40px;
    border: solid 1px #d8dce6;
  }
  .text-wrapper {
    flex-shrink: 0;
    padding: 12px 0 14px;
    background-color: #ffffff;
    border-radius: 4px;
    width: 128px;
    height: 40px;
    border: solid 1px #d8dce6;
  }
  .image {
    margin: 5px 0 3px 102px;
    flex-shrink: 0;
    width: 6px;
    height: 5px;
  }
  .text_34 {
    text-transform: uppercase;
  }
  .view_2 {
    margin-left: 8px;
  }
  .text_6 {
    margin-left: 22px;
    align-self: center;
  }
  .view_4 {
    margin-left: 20px;
  }
  .text_10 {
    margin-left: 22px;
    align-self: center;
  }
  .view_6 {
    margin-left: 16px;
  }
  .text_4 {
    margin-left: 8px;
  }
  .text_8 {
    margin-left: 8px;
  }
  .page {
    padding-bottom: 844px;
    background-color: #f0f2f5;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    position: relative;
  }
  .section_2 {
    background-color: #ffffff;
    box-shadow: 0px 1px 4px #0015291f;
    width: 1230px;
    height: 56px;
    position: relative;
  }
  .section_3 {
    padding: 52px 0 69px;
    background-color: #ffffff;
    border-radius: 4px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }
  .section_4 {
    margin-left: 53px;
    margin-right: 45px;
    padding: 42px 38px 389px 40px;
    border-radius: 8px;
    border: solid 1px #dcdfe6;
  }
  .text {
    color: #545556;
    font-size: 18px;
    font-family: SourceHanSansCN;
    line-height: 17px;
  }
  .group_3 {
    flex: 1 1 auto;
  }
  .group_5 {
    margin-right: 294px;
    flex-shrink: 0;
  }
  .group_7 {
    flex: 1 1 auto;
  }
  .group_8 {
    margin-right: 294px;
    flex-shrink: 0;
  }
  .group_10 {
    flex: 1 1 auto;
  }
  .group_13 {
    margin-right: 294px;
    flex-shrink: 0;
  }
  .text_13 {
    align-self: flex-start;
  }
  .view_8 {
    margin-bottom: 4px;
  }
  .text_17 {
    flex-shrink: 0;
    align-self: center;
  }
  .text_24 {
    align-self: flex-start;
  }
  .view_13 {
    margin-bottom: 4px;
  }
  .text_27 {
    flex-shrink: 0;
    align-self: center;
  }
  .group_11 {
    padding-left: 4px;
  }
  .view_17 {
    margin-bottom: 4px;
  }
  .text_39 {
    flex-shrink: 0;
    align-self: center;
  }
  .text_3 {
    align-self: center;
  }
  .text_18 {
    align-self: center;
  }
  .text_28 {
    align-self: center;
  }
  .view_14 {
    margin-left: 8px;
  }
  .text_30 {
    margin-left: 22px;
    align-self: center;
  }
  .view_15 {
    margin-left: 20px;
  }
  .text_32 {
    margin-left: 22px;
    align-self: center;
  }
  .view_16 {
    margin-left: 16px;
  }
  .text-wrapper_2 {
    padding: 9px 0 16px;
    border-radius: 4px;
    width: 95px;
    height: 40px;
    border: solid 1px #dcdfe6;
  }
  .text-wrapper_3 {
    padding: 10px 0 16px;
    background-color: #67c23a;
    border-radius: 4px;
    width: 95px;
    height: 40px;
  }
  .text_29 {
    margin-left: 8px;
  }
  .text_31 {
    margin-left: 8px;
  }
  .text_35 {
    color: #606266;
  }
  .text_36 {
    color: #ffffff;
  }
  .space-y-36 > *:not(:first-child) {
    margin-top: 36px;
  }
  .space-y-4 > *:not(:first-child) {
    margin-top: 4px;
  }
  .space-x-30 > *:not(:first-child) {
    margin-left: 30px;
  }
  .space-x-9 > *:not(:first-child) {
    margin-left: 9px;
  }
  .space-x-100 > *:not(:first-child) {
    margin-left: 100px;
  }
</style>
