<template>
  <div class="flex-row page">
    <div class="flex-col group_2 space-y-32">
      <div class="flex-col">
        <div class="flex-col items-end image-wrapper">
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539561264968030.png"
          />
        </div>
        <div class="flex-row group_4 space-x-8">
          <span class="font_4 text_9">添加课程</span>
          <span class="font_4 text_10">/</span>
          <span class="font_4 text_11">手动添加</span>
        </div>
      </div>

      <div class="flex-col group_5 space-y-26">
        <span class="font_5 text_12">手动添加课程</span>
        <div class="flex-col section_6 space-y-344">
          <div class="flex-col">
            <span class="font_5 text_13">课程信息</span>
            <div class="flex-row group_7">
              <div class="flex-row space-x-26">
                <div class="group_9">
                  <span class="font_6">*</span>
                  <span class="font_7">课程号</span>
                </div>
                <el-input v-model="MyClass.classId" placeholder="请输入" class="a1"></el-input>
              </div>
              <div class="flex-row group_10 space-x-26">
                <div class="group_9">
                  <span class="font_6">*</span>
                  <span class="font_7">课程名</span>
                </div>
                <el-input v-model="MyClass.className" placeholder="请输入" class="a1"></el-input>
              </div>
              <div class="flex-row group_11">
                <div class="group_9 a2">
                  <span class="font_6">*</span>
                  <span class="font_7">是否必修</span>
                </div>
                <el-radio v-model="MyClass.isMust" label="1">是</el-radio>
                <el-radio v-model="MyClass.isMust" label="2">否</el-radio>
              </div>

            </div>
            <div class="flex-row group_7 a4">
              <div class="flex-row group_12 space-x-19">
                <div class="group_9">
                  <span class="font_6 text_23">*</span>
                  <span class="font_2">教学班数量</span>
                </div>
                <el-input v-model="classCount" placeholder="请输入" class="a1" @change="countChange"></el-input>
                <el-button type="primary" class="a3" @click="tianjiajiaoxueban">填写教学班信息</el-button>
                <div class="font_2 group_9">已添加的教学班:</div>
                <el-tag class="a6" v-for="(time2,index) in thisClassTime" :key="index" :type="tag">{{time2.toString()}}</el-tag>
              </div>
            </div>

            <div class="flex-row group_7 a5">
              <el-alert title="填写信息不完整" type="error" show-icon v-if="wrong" class="a7" :closable="false"></el-alert>
              <el-button type="primary" class="text-wrapper_4 a8" @click="Submit1">添加课程</el-button>

            </div>


            <div class="flex-col group_13 space-y-5">

              <span class="font_5 text_27">已添加课程</span>
            </div>

            <div class="flex-row justify-between section_8">
              <div class="flex-row">
                <div class="font_2" >课程号</div>
                <div class="font_2 text_29">课程名</div>
                <div class="font_2 a10">教学班</div>
                <div class="font_2 text_31">是否必修</div>
                <div class="font_2 text_31">操作</div>
              </div>
            </div>

            <div class="flex-row group_15" v-for="(hand,index) in handIn" :key="index">
                <div class="font_2  text_36 a8">{{ hand.classId }}</div>
                <div class="font_2  text_36 a8">{{ hand.className }}</div>
              <div class="a9">
                <el-tag class="a6" v-for="(time2,index2) in hand.classTime" :key="index2" :type="tag">{{classTimeName(time2).toString()}}</el-tag>
              </div>

                <div class="font_2 text_36 a8">{{hand.isMust?'是':'否'}}</div>
               <el-button type="danger" icon="el-icon-delete" circle class="a11" @click="deleteClass(hand.classId)"></el-button>
            </div>

          </div>
          <div class="flex-row space-x-100">
              <el-button type="success" class="a12" @click="tiaozhuan">确定</el-button>
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
      return {
        classCount:'',
        wrong:false,
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
      ...mapState(['MyClass','handIn']),
    thisClassTime(){
        let arr=[]
        for(let i=0;i<this.MyClass.classTime.length;i++){
          arr[i]=[]
          for(let k=0;k<this.MyClass.classTime[i].length;k++){
            let flag=0
            for(let n=0;n<49;n++){
              console.log(this.MyClass.classTime)
              console.log(this.MyClass.classTime[i])
              console.log(this.MyClass.classTime[i][k])
              if(this.MyClass.classTime[i][k]==this.classTime[n].value){
                arr[i][k]=this.classTime[n].label
                console.log(arr)
              }
            }
          }
        }
        return arr
    }
  },
    methods: {
      Submit1(){
        console.log('111')
        if(this.MyClass.classId!=''&&this.MyClass.className!=''&&this.MyClass.isMust!=''&&this.MyClass.classTime!=''){
          this.$store.dispatch('shoudongtianjia',this.MyClass)
          this.wrong=false
        }else this.wrong=true

      },
      tianjiajiaoxueban(){
        this.$router.push('/shoudongtianjiafianjiajiaoxueban')
      },
      countChange(){
        this.$store.dispatch('countChange',this.classCount)
      },
      classTimeName(time1){
        let arr=[]
          for(let k=0;k<time1.length;k++){
            let flag=0
            for(let n=0;n<49;n++){
              if(time1[k]==this.classTime[n].value){
                arr[k]=this.classTime[n].label
              }
            }
          }
        return arr
      },
      deleteClass(id){
        if(confirm('确定删除吗?')){
          this.$store.dispatch('handDelete',id)
          this.$store.dispatch('shanchu',id)
        }
      },
      tiaozhuan(){
        this.$router.push('/yixuankecheng')
      }
    },
  };
</script>

<style scoped lang="css">
.a1{
  width: 170px;
}
.a2{
  margin-right: 10px;
}
.a3{
  height: 40px;
}
.a4{
  margin-left: -65px;
}
.a5{
  margin-left: 500px;
}
.a6{
  margin-top: 5px;
}
.a7{
  width: 200px;
  /*margin-top: 30px;*/
  right: 1250px;
  position: absolute;
}
.a8{
  width: 145px;
}
.a9{
  width: 645px;
}
.a10{
  margin-left: 300px;
  margin-right: 300px;
}
.a11{
  height: 40px;
}
.a12{
  margin-left: 550px;
}








  .font_5 {
    font-size: 16px;
    font-family: SourceHanSansCN;
    line-height: 14.5px;
    color: #545556;
  }
  .font_1 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #ffffff;
  }
  .font_2 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #545556;
  }
  .font_3 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #c0c4cc;
  }
  .font_4 {
    font-size: 12px;
    font-family: HarmonyOSSansSC;
    line-height: 11px;
  }
  .font_9 {
    font-size: 14px;
    font-family: Roboto;
    line-height: 13px;
  }
  .font_6 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 5px;
    color: #ff4a4a;
  }
  .font_7 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #5a5e66;
  }
  .font_8 {
    font-size: 14px;
    font-family: HarmonyOSSansSC;
    line-height: 13px;
    color: #909399;
  }
  .text-wrapper {
    padding: 22px 0 20px;
    background-color: #334154;
    width: 210px;
  }
  .text_40 {
    text-transform: uppercase;
  }
  .group_9 {
    align-self: center;
    line-height: 13px;
    height: 13px;
  }
  .text-wrapper_2 {
    flex-shrink: 0;
    padding: 12px 0 14px;
    background-color: #ffffff;
    border-radius: 4px;
    width: 83px;
    height: 40px;
    border: solid 1px #d8dce6;
  }
  .text_6 {
    margin-left: 30px;
  }
  .text_16 {
    margin-left: 5px;
  }
  .page {
    background-color: #f0f2f5;
    overflow: hidden;
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
  .group_2 {
    flex: 1 1 auto;
  }
  .text {
    align-self: center;
    color: #1989fa;
    font-size: 24px;
    font-family: KingsoftCloud;
    line-height: 21.5px;
  }
  .group {
    margin-top: 15px;
  }
  .section_5 {
    background-color: #334154;
    height: 56px;
  }
  .group_5 {
    padding: 0 17px;
  }
  .section_3 {
    padding: 22px 30px 20px;
    background-color: #334154;
  }
  .section_4 {
    padding: 22px 30px 27px;
    background-color: #222d3c;
  }
  .view_2 {
    margin-top: 2px;
  }
  .image-wrapper {
    padding: 21px 0;
    background-color: #ffffff;
    box-shadow: 0px 1px 4px #0015291f;
    position: relative;
  }
  .group_4 {
    padding: 20px 24px 0;
  }
  .text_12 {
    margin-left: 8px;
    align-self: flex-start;
  }
  .section_6 {
    margin-right: 14px;
    padding: 29px 17px 50px 31px;
    background-color: #ffffff;
    border-radius: 4px;
  }
  .image {
    flex-shrink: 0;
    width: 12px;
    height: 12px;
  }
  .text_3 {
    color: #bbbec5;
  }
  .text_4 {
    color: #1989fa;
  }
  .image_2 {
    margin-right: 26px;
    width: 14px;
    height: 14px;
  }
  .text_9 {
    color: #545556;
  }
  .text_10 {
    color: #00000073;
    line-height: 9px;
  }
  .text_11 {
    color: #848587;
  }
  .text_13 {
    align-self: flex-start;
    line-height: 15px;
  }
  .group_7 {
    margin-top: 16px;
  }
  .group_13 {
    margin-top: 21px;
  }
  .section_8 {
    margin-top: 16px;
    padding: 22px 18px 20px;
    background-color: #f6f5f5;
  }
  .group_15 {
    padding: 24px 24px 4px 29px;
    position: relative;
  }
  .text-wrapper_8 {
    margin-left: 429px;
    padding: 9px 0 16px;
    border-radius: 4px;
    width: 95px;
    height: 40px;
    border: solid 1px #dcdfe6;
  }
  .text-wrapper_9 {
    padding: 10px 0 16px;
    background-color: #67c23a;
    border-radius: 4px;
    width: 95px;
    height: 40px;
  }
  .group_10 {
    margin-left: 47px;
  }
  .group_11 {
    margin-left: 54px;
    align-self: center;
  }
  .group_12 {
    margin-left: 62px;
  }
  .text-wrapper_4 {
    margin-right: 21px;
    padding: 11px 0 10px;
    align-self: flex-end;
    background-color: #1989fa;
    border-radius: 3px;
    width: 74px;
  }
  .text_27 {
    align-self: flex-start;
  }
  .text_32 {
    margin-right: 94px;
  }
  .group_16 {
    position: absolute;
    left: 29px;
    bottom: 5.5px;
  }
  .text_36 {
    align-self: center;
    line-height: 12.5px;
  }
  .group_18 {
    position: absolute;
    right: 23.5px;
    bottom: 0px;
  }
  .text_41 {
    color: #606266;
  }
  .text_42 {
    color: #ffffff;
  }
  .text-wrapper_3 {
    padding: 12px 0 14px;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 4px;
    width: 224px;
    height: 40px;
    border: solid 1px #d8dce6;
  }
  .section_7 {
    margin-left: 12px;
    flex-shrink: 0;
    border-radius: 2px;
    width: 14px;
    height: 14px;
    border: solid 1px #dcdfe6;
  }
  .text_22 {
    margin-left: 4px;
    line-height: 12.5px;
  }
  .text_26 {
    color: #ffffff;
    font-size: 12px;
    font-family: SourceHanSansCN;
    line-height: 11px;
  }
  .text_29 {
    margin-left: 102px;
  }
  .text_30 {
    margin-left: 104px;
  }
  .text_31 {
    margin-left: 107px;
  }
  .text_33 {
    margin-top: 2px;
    line-height: 10.5px;
  }
  .group_17 {
    flex-shrink: 0;
  }
  .text-wrapper_5 {
    padding: 7px 0 6px;
    background-color: #f56c6c;
    border-radius: 4px;
    width: 47px;
    height: 26px;
  }
  .text-wrapper_6 {
    padding: 7px 0 6px;
    background-color: #a5d63f;
    border-radius: 4px;
    width: 47px;
    height: 26px;
  }
  .text-wrapper_7 {
    padding: 7px 0 6px;
    background-color: #1989fa;
    border-radius: 4px;
    width: 90.5px;
    height: 26px;
  }
  .text_20 {
    margin-left: 14px;
  }
  .text_23 {
    color: #d43030;
  }
  .text_35 {
    color: #d43030;
    line-height: 13.5px;
  }
  .space-y-32 > *:not(:first-child) {
    margin-top: 32px;
  }
  .space-y-26 > *:not(:first-child) {
    margin-top: 26px;
  }
  .space-x-80 > *:not(:first-child) {
    margin-left: 80px;
  }
  .space-y-43 > *:not(:first-child) {
    margin-top: 43px;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 8px;
  }
  .space-y-344 > *:not(:first-child) {
    margin-top: 344px;
  }
  .space-x-100 > *:not(:first-child) {
    margin-left: 100px;
  }
  .space-y-5 > *:not(:first-child) {
    margin-top: 5px;
  }
  .space-x-26 > *:not(:first-child) {
    margin-left: 26px;
  }
  .space-x-19 > *:not(:first-child) {
    margin-left: 19px;
  }
  .space-x-70 > *:not(:first-child) {
    margin-left: 70px;
  }
  .space-x-15 > *:not(:first-child) {
    margin-left: 15px;
  }
  .space-x-56 > *:not(:first-child) {
    margin-left: 56px;
  }
</style>
