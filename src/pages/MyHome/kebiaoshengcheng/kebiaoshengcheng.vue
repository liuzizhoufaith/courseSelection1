<template>
  <div class="flex-row page">
    <div class="flex-col group_3 space-y-32">
      <div class="flex-col space-y-20">
        <div class="flex-col items-end image-wrapper">
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539561264968030.png"
          />
        </div>
        <span class="text_6">课表生成</span>
      </div>
      <div class="flex-col group_5 space-y-10">
        <span class="text_7">生成课表</span>
        <div class="flex-col section_6 space-y-57">

          <el-table :data="classTable" border style="width: 69.6%">
            <el-table-column prop="Head" label="" width="130"></el-table-column>
            <el-table-column prop="Monday" label="周一" width="130"></el-table-column>
            <el-table-column prop="Tuesday" label="周二" width="130"></el-table-column>
            <el-table-column prop="Wednesday" label="周三" width="130"></el-table-column>
            <el-table-column prop="Thursday" label="周四" width="130"></el-table-column>
            <el-table-column prop="Friday" label="周五" width="130"></el-table-column>
            <el-table-column prop="Saturday" label="周六" width="130"></el-table-column>
            <el-table-column prop="Sunday" label="周日" width="130"></el-table-column>
          </el-table>
          <div class="a1 text_7">共有{{classSize}}种排课方法,其中可行的有{{this.$store.state.count}}种</div>
          <div class="flex-row justify-around group_47">
            <el-button type="primary">下载课表</el-button>
            <el-button type="primary" @click="tiaozhuanyixuan">修改课程</el-button>
            <el-button type="primary" @click="shangyizhong">上一种</el-button>
            <el-button type="primary" @click="xiayizhong">下一种</el-button>
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
        num:0,
      };
    },
    computed:{
      ...mapState(['final','className','count','classSize']),
      classTable(){
          let arr=[]
          arr[0]= {Head:'12节',Monday:'', Tuesday:'', Wednesday:'', Thursday:'', Friday:'', Saturday:'', Sunday:'',}
          arr[1]= {Head:'34节',Monday:'', Tuesday:'', Wednesday:'', Thursday:'', Friday:'', Saturday:'', Sunday:'',}
          arr[2]= {Head:'5节',Monday:'', Tuesday:'', Wednesday:'', Thursday:'', Friday:'', Saturday:'', Sunday:'',}
          arr[3]= {Head:'67节',Monday:'', Tuesday:'', Wednesday:'', Thursday:'', Friday:'', Saturday:'', Sunday:'',}
          arr[4]= {Head:'89节',Monday:'', Tuesday:'', Wednesday:'', Thursday:'', Friday:'', Saturday:'', Sunday:'',}
          arr[5]= {Head:'10,11节',Monday:'', Tuesday:'', Wednesday:'', Thursday:'', Friday:'', Saturday:'', Sunday:'',}
          arr[6]= {Head:'12节',Monday:'', Tuesday:'', Wednesday:'', Thursday:'', Friday:'', Saturday:'', Sunday:'',}
        console.log(this.className+'****'+this.final[this.num][0]+'****'+this.final[this.num][0][0])
          for(let i=0;i<this.className.length;i++){
            for(let j=0;j<this.final[this.num][i].length;j++){
              let a=parseInt(this.final[this.num][i][j]/10)
              let b=parseInt(this.final[this.num][i][j]%10)-1
              if(a===1) arr[b].Monday=this.className[i]
              if(a===2) arr[b].Tuesday=this.className[i]
              if(a===3) arr[b].Wednesday=this.className[i]
              if(a===4) arr[b].Thursday=this.className[i]
              if(a===5) arr[b].Friday=this.className[i]
              if(a===6) arr[b].Saturday=this.className[i]
              if(a===7) arr[b].Sunday=this.className[i]
            }
          }
          console.log(arr)
          return arr
        },
    },
    methods: {
      shangyizhong(){
        if(this.num>0) this.num--
      },
      xiayizhong(){
        if(this.num<this.$store.state.count-1) this.num++
      },
      tiaozhuanyixuan(){
        this.$router.push('/yixuankecheng')
      }
    },
  };
</script>

<style scoped lang="css">
.a1{
  margin-left: 600px;
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
  .font_3 {
    font-size: 14px;
    font-family: Roboto;
    line-height: 13px;
    color: #303133;
  }
  .font_4 {
    font-size: 14px;
    font-family: Roboto;
    line-height: 10px;
    color: #303133;
  }
  .font_8 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #6379df;
  }
  .font_9 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 10px;
    color: #6379df;
  }
  .font_6 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 1.5px;
    color: #ffb514;
  }
  .font_7 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 1.5px;
    color: #71bfbf;
  }
  .font_5 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
    color: #39d592;
  }
  .text-wrapper {
    padding: 22px 0 20px;
    background-color: #334154;
    width: 210px;
  }
  .text-wrapper_12 {
    padding: 12px 0 10px;
    background-color: #1989fa;
    border-radius: 4px;
    width: 137px;
    height: 36px;
  }
  .text-wrapper_2 {
    padding: 16px 0 15px;
    width: 110.5px;
    height: 45px;
    border: solid 1px #dcdfe6;
  }
  .text-wrapper_3 {
    padding: 14px 0 16px;
    width: 110.5px;
    height: 45px;
    border: solid 1px #dcdfe6;
  }
  .text-wrapper_6 {
    padding: 14px 0 18px;
    background-color: #e5e5e5;
    border-radius: 4px 0px 0px 4px;
    width: 122.5px;
    height: 45px;
    border: solid 1px #e5e5e5;
  }
  .section_24 {
    width: 110.5px;
    height: 45px;
    border: solid 1px #dcdfe6;
  }
  .section_25 {
    border-radius: 0px 4px 4px 0px;
    width: 110.5px;
    height: 45px;
    border: solid 1px #dcdfe6;
  }
  .text-wrapper_8 {
    padding: 14px 0 19px;
    background-color: #e5e5e5;
    border-radius: 4px 0px 0px 4px;
    width: 122.5px;
    height: 45px;
    border: solid 1px #e5e5e5;
  }
  .section_28 {
    background-color: #ffffff;
    width: 110.5px;
    height: 45px;
    border: solid 1px #dcdfe6;
  }
  .group_16 {
    width: 110.5px;
  }
  .group_31 {
    padding-bottom: 44px;
    width: 110.5px;
    position: relative;
  }
  .group_19 {
    position: relative;
  }
  .section_8 {
    height: 45px;
    border: solid 1px #dcdfe6;
  }
  .section_29 {
    height: 45px;
    position: absolute;
    left: 0;
    right: 0;
    top: 43.5px;
    border: solid 1px #dcdfe6;
  }
  .section_12 {
    padding: 14px 22px 34px;
    background-color: #fff6e7;
    width: 79.5px;
    position: absolute;
    left: 3.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .group_14 {
    width: 110.5px;
    position: relative;
  }
  .group_15 {
    width: 110.5px;
    height: 88.5px;
    position: relative;
  }
  .section_21 {
    background-color: #7fd8d8;
    height: 77.5px;
    position: absolute;
    left: 0;
    right: 106px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_14 {
    height: 43.5px;
    border: solid 1px #dcdfe6;
  }
  .section_15 {
    height: 43px;
    border: solid 1px #dcdfe6;
  }
  .section_9 {
    margin-top: -90px;
    flex-shrink: 0;
    height: 43.5px;
    border: solid 1px #dcdfe6;
    position: relative;
  }
  .text-wrapper_9 {
    padding: 14px 0 62px;
    background-color: #d4f7f7;
    width: 79.5px;
    position: absolute;
    left: 3.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_16 {
    margin-top: -90px;
    flex-shrink: 0;
    height: 43px;
    border: solid 1px #dcdfe6;
    position: relative;
  }
  .text_20 {
    font-size: 13px;
    width: 59px;
  }
  .text_8 {
    line-height: 12.5px;
  }
  .text_22 {
    align-self: flex-start;
    font-size: 13px;
  }
  .text_24 {
    align-self: center;
    font-size: 13px;
  }
  .text_31 {
    font-size: 13px;
  }
  .text_3 {
    margin-left: 30px;
  }
  .view_44 {
    margin-top: 44px;
    flex-shrink: 0;
  }
  .view_12 {
    margin-top: 44px;
    flex-shrink: 0;
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
  .group_5 {
    padding: 0 24px;
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
    align-self: flex-start;
    color: #545556;
    font-size: 12px;
    font-family: HarmonyOSSansSC;
    line-height: 11px;
  }
  .text_7 {
    align-self: flex-start;
    color: #545556;
    font-size: 16px;
    font-family: SourceHanSansCN;
    line-height: 15px;
  }
  .section_6 {
    padding: 34px 148px 39px;
    background-color: #ffffff;
    border-radius: 4px;
  }
  .section_3 {
    padding: 22px 30px 21px;
    background-color: #334154;
  }
  .image {
    margin-right: 26px;
    width: 14px;
    height: 14px;
  }
  .group_47 {
    padding: 0 157px;
  }
  .section_4 {
    flex-shrink: 0;
    background-color: #00000000;
    width: 12px;
    height: 12px;
  }
  .section_7 {
    background-color: #e5e5e5;
    border-radius: 4px 0px 0px 4px;
    width: 122.5px;
    height: 45px;
    border: solid 1px #e5e5e5;
  }
  .text-wrapper_4 {
    padding: 13px 0 18px;
    border-radius: 0px 4px 4px 0px;
    width: 110.5px;
    height: 45px;
    border: solid 1px #dcdfe6;
  }
  .text_12 {
    line-height: 12.5px;
  }
  .text_13 {
    line-height: 12.5px;
  }
  .text_15 {
    line-height: 12.5px;
  }
  .text-wrapper_11 {
    padding: 15px 0 18px;
    background-color: #e5e5e5;
    border-radius: 4px 0px 0px 4px;
    width: 122.5px;
    height: 45px;
    border: solid 1px #e5e5e5;
  }
  .section_38 {
    background-color: #ffffff;
    border-radius: 0px 4px 4px 0px;
    width: 110.5px;
    height: 45px;
    border: solid 1px #dcdfe6;
  }
  .group_11 {
    flex: 1 1 auto;
  }
  .view_41 {
    flex-shrink: 0;
  }
  .group_20 {
    flex-shrink: 0;
  }
  .text-wrapper_10 {
    padding: 14px 0 20px;
    background-color: #e5e5e5;
    border-radius: 4px 0px 0px 4px;
    width: 122.5px;
    height: 45px;
    border: solid 1px #e5e5e5;
  }
  .group_39 {
    padding: 2px 0 8px;
    width: 110.5px;
    position: relative;
  }
  .section_30 {
    padding: 6px 2px 24px 7px;
    background-color: #f2f4fc;
    width: 79.5px;
    position: absolute;
    left: 3.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_31 {
    background-color: #7588e3;
    height: 77.5px;
    position: absolute;
    left: 1.5px;
    right: 106px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_32 {
    background-color: #ffb514;
    height: 77.5px;
    position: absolute;
    left: 1.5px;
    right: 106.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_33 {
    margin-left: 4px;
    background-color: #f2f4fc;
    width: 79.5px;
    height: 77.5px;
  }
  .image_2 {
    width: 4px;
    height: 80.5px;
    position: absolute;
    left: 1.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_34 {
    width: 110.5px;
    height: 45px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    border: solid 1px #dcdfe6;
  }
  .section_35 {
    width: 110.5px;
    height: 45px;
    position: absolute;
    left: 0;
    right: 0;
    top: 43.5px;
    border: solid 1px #dcdfe6;
  }
  .text_44 {
    font-size: 13px;
    line-height: 13.5px;
    width: 58px;
    position: absolute;
    top: 11.5px;
    left: 50%;
    transform: translateX(-50%);
  }
  .text_45 {
    font-size: 13px;
    line-height: 12px;
    position: absolute;
    left: 10.5px;
    top: 29px;
  }
  .text_46 {
    font-size: 13px;
    line-height: 11px;
    position: absolute;
    left: 20px;
    bottom: 29.5px;
  }
  .section_36 {
    background-color: #fdebff;
    height: 77.5px;
    position: absolute;
    left: 2.5px;
    right: 28.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_37 {
    background-color: #bc8acf;
    height: 77.5px;
    position: absolute;
    left: 0;
    right: 107px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_22 {
    width: 110.5px;
    height: 43.5px;
    border: solid 1px #dcdfe6;
  }
  .section_23 {
    border-radius: 0px 4px 4px 0px;
    width: 110.5px;
    height: 43.5px;
    border: solid 1px #dcdfe6;
  }
  .section_26 {
    width: 110.5px;
    height: 43px;
    border: solid 1px #dcdfe6;
  }
  .section_27 {
    border-radius: 0px 4px 4px 0px;
    width: 110.5px;
    height: 43px;
    border: solid 1px #dcdfe6;
  }
  .text_37 {
    align-self: center;
    font-size: 13px;
    line-height: 13.5px;
  }
  .text_38 {
    align-self: flex-start;
    font-size: 13px;
    line-height: 12px;
  }
  .text_39 {
    align-self: center;
    font-size: 13px;
    line-height: 11px;
  }
  .text-wrapper_5 {
    padding: 14px 0 18px;
    background-color: #e5e5e5;
    border-radius: 4px 0px 0px 4px;
    width: 122.5px;
    height: 43.5px;
    border: solid 1px #e5e5e5;
  }
  .section_11 {
    background-color: #7de6b9;
    height: 77.5px;
    position: absolute;
    left: 0;
    right: 106.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_13 {
    background-color: #ffb514;
    height: 77.5px;
    position: absolute;
    left: 1.5px;
    right: 106px;
    top: 50%;
    transform: translateY(-50%);
  }
  .text-wrapper_7 {
    padding: 14px 0 16px;
    background-color: #e5e5e5;
    border-radius: 4px 0px 0px 4px;
    width: 122.5px;
    height: 43px;
    border: solid 1px #e5e5e5;
  }
  .section_18 {
    background-color: #bc8acf;
    height: 77.5px;
    position: absolute;
    left: 2px;
    right: 105.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_20 {
    background-color: #7de6b9;
    height: 77.5px;
    position: absolute;
    left: 1.5px;
    right: 106px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_10 {
    padding: 7px 0 5px;
    background-color: #e6fdf2;
    position: absolute;
    left: 2.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_17 {
    flex-shrink: 0;
    background-color: #fdebff;
    height: 77.5px;
    position: absolute;
    left: 3.5px;
    right: 27px;
    top: 50%;
    transform: translateY(-50%);
  }
  .section_19 {
    padding: 7px 0 5px;
    background-color: #e6fdf2;
    position: absolute;
    left: 3.5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .text_18 {
    font-size: 13px;
    line-height: 12px;
  }
  .text_19 {
    font-size: 13px;
    line-height: 12px;
  }
  .text_28 {
    font-size: 13px;
    line-height: 12px;
  }
  .text_29 {
    font-size: 13px;
    line-height: 12px;
  }
  .space-y-166 > *:not(:first-child) {
    margin-top: 166px;
  }
  .space-y-32 > *:not(:first-child) {
    margin-top: 32px;
  }
  .space-y-15 > *:not(:first-child) {
    margin-top: 15px;
  }
  .space-y-20 > *:not(:first-child) {
    margin-top: 20px;
  }
  .space-y-10 > *:not(:first-child) {
    margin-top: 10px;
  }
  .space-y-5 > *:not(:first-child) {
    margin-top: 5px;
  }
  .space-y-57 > *:not(:first-child) {
    margin-top: 57px;
  }
  .space-x-80 > *:not(:first-child) {
    margin-left: 80px;
  }
  .space-y-27 > *:not(:first-child) {
    margin-top: 27px;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 8px;
  }
</style>
