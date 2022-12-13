<template>
  <div class="flex-col">
    <div class="flex-col group_10 space-y-26">
<!--      表头-->
      <div class="flex-row space-x-206">
        <div class="flex-row space-x-20">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"> </el-checkbox>
          <div class="flex-row">
            <span class="font_6">课程号</span>
          </div>
        </div>
        <div class="flex-row group_17 space-x-185">
          <div class="flex-row group_18 space-x-170">
            <div class="flex-row group_19">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span class="font_7">课程名</span>
            </div>
            <span class="font_7">教学班数量</span>
          </div>
          <span class="font_7">是否必修</span>
          <span class="font_7">查看教学班(仅查看,不需选择)</span>
        </div>
      </div>
    </div>

<!--    显示课程信息-->
      <el-checkbox-group v-model="checked" @change="handleCheckedChange">

        <el-checkbox v-for="(class1,index1) in all" :label="class1" :key="index1" class="a2">
          <br><div class="divider"></div><br><br>
<!--          列表信息-->
          <div class="a4">
            <div class="font_8 text_26 a3">{{ class1.classId }}</div>
            <div class="font_2 a3">{{ class1.className }}</div>
            <div class="font_2 a3">{{class1.classTime.length}}</div>
            <div class="font_2 a3">{{class1.isMust?'是':'否'}}</div>
<!--            教学班-->
            <div class="font_2 a5">
              <el-select placeholder="教学班">
              <el-option v-for="(time1,index2) in classTime[index1]" :key="index2" :value="Undress(time1)"></el-option>
              </el-select>
            </div>
          </div>
        </el-checkbox>

      </el-checkbox-group>

    <br>
    <div class="flex-col items-center "><el-button type="primary" @click="Submit">确认添加</el-button></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "xuanzekecheng",
  data(){
    return {
      checkAll:false,
      isIndeterminate: true,
      checked: [],
    }
  },
  computed:{
    ...mapState(['all','want']),
    classTime(){
      let a=[]
      for(let i=0;i<this.all.length;i++){
        a[i]=[]
        for(let j=0;j<this.all[i].classTime.length;j++){
          a[i][j]=[]
          for(let k=0;k<this.all[i].classTime[j].length;k++){
            if(parseInt(this.all[i].classTime[j][k]/10)===1) a[i][j][k]='周一'
            if(parseInt(this.all[i].classTime[j][k]/10)===2) a[i][j][k]='周二'
            if(parseInt(this.all[i].classTime[j][k]/10)===3) a[i][j][k]='周三'
            if(parseInt(this.all[i].classTime[j][k]/10)===4) a[i][j][k]='周四'
            if(parseInt(this.all[i].classTime[j][k]/10)===5) a[i][j][k]='周五'
            if(parseInt(this.all[i].classTime[j][k]/10)===6) a[i][j][k]='周六'
            if(parseInt(this.all[i].classTime[j][k]/10)===7) a[i][j][k]='周日'
            if(this.all[i].classTime[j][k]%10===1) a[i][j][k]+='12节'
            if(this.all[i].classTime[j][k]%10===2) a[i][j][k]+='34节'
            if(this.all[i].classTime[j][k]%10===3) a[i][j][k]+='第5节'
            if(this.all[i].classTime[j][k]%10===4) a[i][j][k]+='67节'
            if(this.all[i].classTime[j][k]%10===5) a[i][j][k]+='89节'
            if(this.all[i].classTime[j][k]%10===6) a[i][j][k]+='10,11节'
            if(this.all[i].classTime[j][k]%10===7) a[i][j][k]+='第12节'
          }
        }
      }
      return a
    },
  },
  methods:{
    handleCheckAllChange(val) {
      this.checked = val ? this.all : [];
      this.isIndeterminate = false;

    },
    handleCheckedChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.all.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.all.length;
    },
    Submit(){
      this.$store.dispatch('tianjia',this.checked)
      this.$router.push('/yixuankecheng')
    },
    Undress(arr){
      let a=''
      for(let i=0;i<arr.length;i++){
        a+=arr[i]+','
      }
      return a
    },
  }
}
</script>

<style scoped lang="css">
.a5{
  display: inline-block;
  margin-right: 100px;
  margin-left: -60px;
}
.a2{
  display: block;
}
.a3{
  display: inline-block;
  width: 250px;
}
.a4{
  display: flex;
  justify-content:left;
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
  color: #606266;
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
  line-height: 10.5px;
}
.font_5 {
  font-size: 14px;
  font-family: SourceHanSansCN;
  line-height: 13px;
  color: #303133;
}
.font_9 {
  font-size: 14px;
  font-family: HarmonyOSSansSC;
  line-height: 13px;
  color: #606266;
}
.font_10 {
  font-size: 14px;
  font-family: Roboto;
  line-height: 10.5px;
  color: #606266;
}
.font_6 {
  font-size: 14px;
  font-family: SourceHanSansCN;
  line-height: 13px;
  color: #909399;
}
.font_8 {
  font-size: 14px;
  font-family: SourceHanSansCN;
  line-height: 10.5px;
  color: #606266;
}
.font_7 {
  font-size: 14px;
  font-family: Roboto;
  line-height: 13px;
  color: #909399;
}
.text-wrapper {
  padding: 22px 0 20px;
  background-color: #334154;
  width: 210px;
}
.section_7 {
  flex-shrink: 0;
  padding: 12px 10px 12px 14px;
  background-color: #ffffff;
  border-radius: 4px;
  height: 40px;
  border: solid 1px #dcdfe6;
}
.divider {
  margin-right: 40px;
  background-color: #ebeef5;
  height: 1px;
}
.group_20 {
  padding: 17px 0;
}
.image_12 {
  align-self: center;
  width: 7px;
  height: 11px;
}
.image_3 {
  flex-shrink: 0;
  width: 8px;
  height: 5px;
}
.section_11 {
  border-radius: 2px;
  width: 14px;
  height: 14px;
  border: solid 1px #dcdfe6;
}
.text_30 {
  margin-left: 243px;
  line-height: 12.5px;
}
.text_6 {
  margin-left: 30px;
}
.image_4 {
  margin: 4px 0 4px 132px;
}
.text_26 {
  margin: 2px 0 2px 20px;
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
  padding-left: 24px;
  padding-right: 4px;
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
  margin-left: 10px;
  align-self: flex-start;
  color: #545556;
  font-size: 16px;
  font-family: SourceHanSansCN;
  line-height: 15px;
}
.section_6 {
  margin-right: 20px;
  margin-top: 26px;
  padding: 12px 18px 14px 116px;
  background-color: #ffffff;
  border-radius: 4px;
}
.section_8 {
  margin-left: 20px;
  margin-top: 7px;
  padding: 41px 4px 7px;
  background-color: #ffffff;
  border-radius: 4px;
}
.image {
  flex-shrink: 0;
  width: 12px;
  height: 12px;
}
.text_3 {
  color: #1989fa;
}
.text_4 {
  color: #bbbec5;
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
.group_6 {
  margin-top: 2px;
}
.group_7 {
  margin-bottom: 2px;
}
.group_8 {
  margin-top: 2px;
}
.group_29 {
  padding: 0 40px;
}
.text_13 {
  align-self: center;
}
.text_15 {
  align-self: center;
}
.text_17 {
  align-self: center;
}
.group_10 {
  padding-bottom: 17px;
}
.text-wrapper_2 {
  margin-top: 24px;
  padding: 14px 0 13px;
  align-self: flex-start;
  background-color: #0486fe;
  border-radius: 4px;
  width: 95px;
}
.text_45 {
  margin-right: 39px;
  align-self: center;
}
.text_46 {
  margin-right: 4px;
  align-self: center;
}
.section_12 {
  margin-right: 6px;
  padding: 7px 4px 8px 10px;
  border-radius: 3px;
  height: 28px;
  border: solid 1px #dcdfe6;
}
.text_48 {
  margin-right: 30px;
  align-self: center;
  line-height: 12.5px;
}
.image_13 {
  margin-right: 28px;
}
.text_49 {
  margin-right: 32px;
  align-self: center;
  color: #1989fa;
  line-height: 10px;
}
.text_50 {
  margin-right: 31px;
  align-self: center;
  line-height: 10px;
}
.text_51 {
  margin-right: 32px;
  align-self: center;
  line-height: 10px;
}
.text_52 {
  margin-right: 32px;
  align-self: center;
  line-height: 10px;
}
.text_53 {
  margin-right: 32px;
  align-self: center;
  line-height: 10px;
}
.text_54 {
  margin-right: 30px;
  align-self: center;
  line-height: 2px;
}
.text_55 {
  margin-right: 28px;
  align-self: center;
  line-height: 10px;
}
.image_14 {
  margin-right: 30px;
}
.text_56 {
  margin-right: 4px;
  align-self: center;
}
.text-wrapper_3 {
  margin-right: 6px;
  padding: 8px 0;
  border-radius: 3px;
  width: 60px;
  height: 28px;
  border: solid 1px #dcdfe6;
}
.text_58 {
  align-self: center;
  line-height: 12px;
}
.group_22 {
  margin-left: 208px;
}
.group_24 {
  margin-left: 207px;
}
.group_26 {
  margin-left: 207px;
}
.group_28 {
  margin-left: 208px;
}
.text_43 {
  margin-left: 240px;
}
.text_44 {
  text-transform: uppercase;
}
.text_47 {
  line-height: 10.5px;
}
.image_11 {
  margin: 4px 0 2px 20px;
}
.text_57 {
  line-height: 10px;
}
.section_9 {
  padding: 8px 14px 10px;
  border-radius: 4px;
  width: 197px;
  height: 36px;
  border: solid 1px #dcdfe6;
}
.group_13 {
  align-self: center;
}
.group_17 {
  margin-bottom: 2px;
}
.view_9 {
  flex-shrink: 0;
}
.text_29 {
  margin-top: 2px;
}
.view_12 {
  flex-shrink: 0;
}
.view_15 {
  flex-shrink: 0;
}
.text_38 {
  margin-top: 2px;
}
.view_18 {
  flex-shrink: 0;
}
.text_20 {
  margin-top: 2px;
}
.image_8 {
  flex-shrink: 0;
  width: 15px;
  height: 15px;
}
.text_21 {
  margin-top: 2px;
}
.group_18 {
  flex-shrink: 0;
}
.text_19 {
  margin-top: 2px;
  color: #5e6166;
}
.section_10 {
  flex-shrink: 0;
  background-color: #dcdfe6;
  width: 1px;
  height: 16px;
}
.image_9 {
  margin: 4px 0;
}
.group_19 {
  flex-shrink: 0;
}
.image_10 {
  margin: 6px 0 2px 2px;
}
.space-y-40 > *:not(:first-child) {
  margin-top: 40px;
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
.space-y-187 > *:not(:first-child) {
  margin-top: 187px;
}
.space-x-14 > *:not(:first-child) {
  margin-left: 14px;
}
.space-x-13 > *:not(:first-child) {
  margin-left: 13px;
}
.space-y-26 > *:not(:first-child) {
  margin-top: 26px;
}
.space-x-27 > *:not(:first-child) {
  margin-left: 27px;
}
.space-x-206 > *:not(:first-child) {
  margin-left: 206px;
}
.space-x-193 > *:not(:first-child) {
  margin-left: 193px;
}
.space-x-95 > *:not(:first-child) {
  margin-left: 95px;
}
.space-x-165 > *:not(:first-child) {
  margin-left: 165px;
}
.space-x-140 > *:not(:first-child) {
  margin-left: 140px;
}
.space-x-40 > *:not(:first-child) {
  margin-left: 40px;
}
.space-x-10 > *:not(:first-child) {
  margin-left: 10px;
}
.space-x-20 > *:not(:first-child) {
  margin-left: 20px;
}
.space-x-185 > *:not(:first-child) {
  margin-left: 185px;
}
.space-x-16 > *:not(:first-child) {
  margin-left: 16px;
}
.space-x-170 > *:not(:first-child) {
  margin-left: 170px;
}
</style>
