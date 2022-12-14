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
          <span class="font_5 text_9">添加课程</span>
          <span class="font_5 text_10">/</span>
          <span class="font_5 text_11">已选课程</span>
        </div>
      </div>
      <div class="flex-col group_5 space-y-18">
        <span class="font_6 text_12">已经添加的课程</span>
        <div class="flex-col section_6 space-y-248">
          <div class="flex-col">
            <span class="font_6 text_13">已添加课程</span>
            <div class="flex-row justify-between section_7">
              <div class="flex-row group_7">
                <div class="flex-row group_8 space-x-102">
                  <span class="font_3">课程号</span>
                  <span class="font_3">课程名</span>
                </div>
<!--                <span class="font_3 text_16">教室</span>-->
<!--                <span class="font_3 text_17">老师</span>-->
                <span class="font_3 text_18 a1">时间</span>
                  <span class="font_3 text_18 a2">是否必修</span>
                  <span class="font_3 text_20 a2">操作</span>
              </div>
            </div>

            <div class="flex-row justify-between group_11" v-for="(class1,index) in want" :key="index" >
              <div class="a8">
                <div class="font_7 text_21 a4">{{ class1.classId }}</div>
                <div class="font_3 text_22 a5">{{ class1.className }}</div>
                <el-select placeholder="查看时间" class="a3">
                  <el-option v-for="(time1,index2) in classTime[index]" :key="index2" :value="Undress(time1)"></el-option>
                </el-select>
                <div class="font_3 text_26 a6">{{class1.isMust?'是':'否'}}</div>
                <el-button type="danger" icon="el-icon-delete" circle class="a7" @click="shanChu(class1.classId)"></el-button>
              </div>
            </div>

          </div>
          <div class="flex-row space-x-98">
            <div class="flex-col items-center text-wrapper_4"><span class="font_9 text_61 text_62">设置偏好</span></div>
<!--            <div class="flex-col items-center text-wrapper_5"><span class="font_9 text_61 text_63">直接生成</span></div>-->
            <el-button type="success" @click="shengCheng">直接生成</el-button>
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
      ...mapState(['want','final']),
    classTime(){
      let a=[]
      for(let i=0;i<this.want.length;i++){
        a[i]=[]
        for(let j=0;j<this.want[i].classTime.length;j++){
          a[i][j]=[]
          for(let k=0;k<this.want[i].classTime[j].length;k++){
            if(parseInt(this.want[i].classTime[j][k]/10)===1) a[i][j][k]='周一'
            if(parseInt(this.want[i].classTime[j][k]/10)===2) a[i][j][k]='周二'
            if(parseInt(this.want[i].classTime[j][k]/10)===3) a[i][j][k]='周三'
            if(parseInt(this.want[i].classTime[j][k]/10)===4) a[i][j][k]='周四'
            if(parseInt(this.want[i].classTime[j][k]/10)===5) a[i][j][k]='周五'
            if(parseInt(this.want[i].classTime[j][k]/10)===6) a[i][j][k]='周六'
            if(parseInt(this.want[i].classTime[j][k]/10)===7) a[i][j][k]='周日'
            if(this.want[i].classTime[j][k]%10===1) a[i][j][k]+='12节'
            if(this.want[i].classTime[j][k]%10===2) a[i][j][k]+='34节'
            if(this.want[i].classTime[j][k]%10===3) a[i][j][k]+='第5节'
            if(this.want[i].classTime[j][k]%10===4) a[i][j][k]+='67节'
            if(this.want[i].classTime[j][k]%10===5) a[i][j][k]+='89节'
            if(this.want[i].classTime[j][k]%10===6) a[i][j][k]+='10,11节'
            if(this.want[i].classTime[j][k]%10===7) a[i][j][k]+='第12节'
          }
        }
      }
      return a
    },
  },
    methods: {
      Undress(arr){
        let a=''
        for(let i=0;i<arr.length;i++){
          a+=arr[i]+','
        }
        return a
      },
      shanChu(id){
        if(confirm('确定删除课程吗?')){
          this.$store.dispatch('shanchu',id)
        }
      },
      shengCheng(){
        this.$store.dispatch('shengcheng',this.$store.state.want)
        if(this.final.length==0||this.final==undefined){
          this.$router.push('/shengchengshibai')
        }else this.$router.push('/kebiaoshengcheng')
      },
    },
  };
</script>

<style scoped lang="css">
.a1{
  margin-left: 200px;
  margin-right: 100px;
}
.a2{
  margin-left: 100px;
}
.a3{
  margin-left: 50px;
}
.a4{
  width: 50px;
}
.a5{
  width: 100px;
}
.a6{
  margin-left: 120px;
  width: 100px;
}
.a7{
  margin-left: 30px;
}
.a8{
  display: flex;
  justify-content:left;
}
  .font_6 {
    font-size: 16px;
    font-family: SourceHanSansCN;
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
    color: #bbbec5;
  }
  .font_3 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #545556;
  }
  .font_4 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #c0c4cc;
  }
  .font_5 {
    font-size: 12px;
    font-family: HarmonyOSSansSC;
    line-height: 10.5px;
  }
  .font_9 {
    font-size: 14px;
    font-family: Roboto;
    line-height: 13px;
  }
  .font_7 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 10.5px;
    color: #545556;
  }
  .font_8 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 14.5px;
    color: #545556;
  }
  .text-wrapper {
    padding: 22px 0 20px;
    background-color: #334154;
    width: 210px;
  }
  .text_61 {
    text-transform: uppercase;
  }
  .text-wrapper_2 {
    padding: 7px 0 6px;
    background-color: #f56c6c;
    border-radius: 4px;
    width: 47px;
    height: 26px;
  }
  .text-wrapper_3 {
    padding: 7px 0 6px;
    background-color: #a5d63f;
    border-radius: 4px;
    width: 47px;
    height: 26px;
  }
  .text_6 {
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
    line-height: 15px;
  }
  .section_6 {
    margin-right: 14px;
    padding: 21px 17px 42px 30px;
    background-color: #ffffff;
    border-radius: 4px;
  }
  .image {
    flex-shrink: 0;
    width: 12px;
    height: 12px;
  }
  .text_5 {
    color: #1989fa;
  }
  .image_2 {
    margin-right: 26px;
    width: 14px;
    height: 14px;
  }
  .text_9 {
    color: #545556;
    line-height: 11px;
  }
  .text_10 {
    color: #00000073;
    line-height: 9px;
  }
  .text_11 {
    color: #848587;
    line-height: 11px;
  }
  .text_13 {
    align-self: flex-start;
    line-height: 14.5px;
  }
  .section_7 {
    margin-top: 28px;
    padding: 22px 18px 18px;
    background-color: #f6f5f5;
  }
  .group_11 {
    padding: 20px 0 10px 29px;
  }
  .section_8 {
    padding: 18px 0 12px 28px;
    background-color: #f6f5f5;
  }
  .group_19 {
    padding: 20px 0 10px 30px;
  }
  .section_9 {
    padding: 20px 0 10px 30px;
    background-color: #f6f5f5;
  }
  .group_28 {
    padding-left: 30px;
    padding-top: 20px;
  }
  .text-wrapper_4 {
    margin-left: 430px;
    padding: 12px 0 14px;
    border-radius: 4px;
    width: 95px;
    height: 40px;
    border: solid 1px #dcdfe6;
  }
  .text-wrapper_5 {
    padding: 13px 0 14px;
    background-color: #67c23a;
    border-radius: 4px;
    width: 95px;
    height: 40px;
  }
  .group_7 {
    margin-bottom: 3px;
  }
  .group_9 {
    margin-right: 20px;
  }
  .group_12 {
    margin-top: 2px;
  }
  .text_25 {
    margin: 4px 0 8px;
    line-height: 14px;
  }
  .group_15 {
    align-self: center;
  }
  .text_33 {
    margin: 5px 0 8px;
    line-height: 13.5px;
  }
  .group_20 {
    margin-top: 2px;
  }
  .group_22 {
    margin: 3px 0 8px;
  }
  .group_25 {
    margin-top: 2px;
  }
  .text_49 {
    margin: 4px 0 8px;
    line-height: 14px;
  }
  .group_29 {
    flex-shrink: 0;
    align-self: center;
  }
  .text_57 {
    margin: 5px 0 8px 115px;
    line-height: 13.5px;
  }
  .group_30 {
    margin-left: 129px;
    flex-shrink: 0;
  }
  .text_62 {
    color: #606266;
  }
  .text_63 {
    color: #ffffff;
  }
  .group_8 {
    flex-shrink: 0;
  }
  .text_16 {
    margin-left: 133px;
  }
  .text_17 {
    margin-left: 139px;
  }
  .text_18 {
    margin-bottom: 3px;
  }
  .group_10 {
    flex-shrink: 0;
  }
  .text_21 {
    margin-bottom: 2px;
  }
  .text_22 {
    margin-left: 70px;
  }
  .text_23 {
    margin-left: 69px;
    line-height: 14px;
  }
  .text_24 {
    margin-left: 76px;
  }
  .text_26 {
    align-self: center;
    line-height: 12px;
  }
  .group_14 {
    flex-shrink: 0;
  }
  .group_16 {
    flex-shrink: 0;
  }
  .text_31 {
    margin-left: 116px;
    margin-bottom: 2px;
    line-height: 12px;
  }
  .text_32 {
    margin-left: 109px;
  }
  .text_34 {
    align-self: center;
    line-height: 12.5px;
  }
  .group_18 {
    flex-shrink: 0;
  }
  .group_21 {
    flex-shrink: 0;
  }
  .text_39 {
    margin-top: 2px;
    line-height: 12px;
  }
  .text_41 {
    line-height: 14px;
  }
  .text_42 {
    align-self: center;
    line-height: 12.5px;
  }
  .group_24 {
    flex-shrink: 0;
  }
  .text_45 {
    margin-bottom: 2px;
  }
  .text_46 {
    margin-left: 69px;
  }
  .text_47 {
    margin-left: 69px;
    line-height: 14px;
  }
  .text_48 {
    margin-left: 76px;
  }
  .text_50 {
    align-self: center;
    line-height: 12.5px;
  }
  .group_27 {
    flex-shrink: 0;
  }
  .text_53 {
    margin-bottom: 4px;
  }
  .text_55 {
    line-height: 14px;
  }
  .text_58 {
    align-self: center;
    line-height: 12px;
  }
  .group_31 {
    flex-shrink: 0;
  }
  .text_19 {
    margin-top: 3px;
  }
  .text_20 {
    margin-bottom: 3px;
  }
  .text_29 {
    margin-bottom: 2px;
  }
  .text_37 {
    margin-top: 2px;
  }
  .text_38 {
    color: #606266;
  }
  .space-y-32 > *:not(:first-child) {
    margin-top: 32px;
  }
  .space-y-18 > *:not(:first-child) {
    margin-top: 18px;
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
  .space-y-248 > *:not(:first-child) {
    margin-top: 248px;
  }
  .space-x-98 > *:not(:first-child) {
    margin-left: 98px;
  }
  .space-x-168 > *:not(:first-child) {
    margin-left: 168px;
  }
  .space-x-74 > *:not(:first-child) {
    margin-left: 74px;
  }
  .space-x-64 > *:not(:first-child) {
    margin-left: 64px;
  }
  .space-x-90 > *:not(:first-child) {
    margin-left: 90px;
  }
  .space-x-54 > *:not(:first-child) {
    margin-left: 54px;
  }
  .space-x-102 > *:not(:first-child) {
    margin-left: 102px;
  }
  .space-x-84 > *:not(:first-child) {
    margin-left: 84px;
  }
  .space-x-7 > *:not(:first-child) {
    margin-left: 7px;
  }
  .space-x-32 > *:not(:first-child) {
    margin-left: 32px;
  }
</style>
