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
                <el-input v-model="classId" placeholder="请输入" class="a1"></el-input>
              </div>
              <div class="flex-row group_10 space-x-26">
                <div class="group_9">
                  <span class="font_6">*</span>
                  <span class="font_7">课程名</span>
                </div>
                <el-input v-model="className" placeholder="请输入" class="a1"></el-input>
              </div>
              <div class="flex-row group_11">
                <div class="group_9 a2">
                  <span class="font_6">*</span>
                  <span class="font_7">是否必修</span>
                </div>
                <el-radio v-model="isMust" label="1">是</el-radio>
                <el-radio v-model="isMust" label="2">否</el-radio>
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
              </div>
            </div>
            <div class="flex-row group_7 a5">
              <el-button type="primary" class="text-wrapper_4" @click="Submit">添加课程</el-button>
              <el-alert title="错误提示的文案" type="error" show-icon v-if="wrong"></el-alert>
            </div>


            <div class="flex-col group_13 space-y-5">

              <span class="font_5 text_27">已添加课程</span>
            </div>

            <div class="flex-row justify-between section_8">
              <div class="flex-row">
                <span class="font_2">课程号</span>
                <span class="font_2 text_29">课程名</span>
                <span class="font_2 text_30">已添加教学班数量</span>
                <span class="font_2 text_31">是否必修</span>
              </div>
              <span class="font_2 text_32">操作</span>
            </div>

            <div class="flex-row justify-center group_15">
              <div class="flex-row group_16 space-x-70">
                <span class="font_2 text_33">C01129</span>
                <div class="flex-row group_17 space-x-56">
                  <span class="font_2">数据挖掘技术</span>
                  <span class="font_2 text_35">3（请输入教学班信息！）</span>
                </div>
              </div>
              <span class="font_2 text_36">是</span>
              <div class="flex-row group_18 space-x-15">
                <div class="flex-col items-center text-wrapper_5"><span class="font_1">删除</span></div>
                <div class="flex-col items-center text-wrapper_6"><span class="font_1">编辑</span></div>
                <div class="flex-col items-center text-wrapper_7"><span class="font_1">添加教学班</span></div>
              </div>
            </div>
          </div>
          <div class="flex-row space-x-100">
            <div class="flex-col items-center text-wrapper_8"><span class="font_9 text_40 text_41">取消</span></div>
            <div class="flex-col items-center text-wrapper_9"><span class="font_9 text_40 text_42">确定</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        classId:'',
        className:'',
        classCount:'',
        isMust:false,
        wrong:false,
        newClass:{
          id:'',
          info:'',
          time:[],
          isMust:false
        }
      };
    },

    methods: {
      Submit(){
        this.newClass.id=this.classId
        this.newClass.info=this.className
        this.newClass.time=this.classTime
        this.$store.dispatch('shoudingtianjia',this.newClass)
        this.classId=''
        this.className=''
        this.classTime=[]
      },
      tianjiajiaoxueban(){
        this.$router.push('/shoudongtianjiafianjiajiaoxueban')
      },
      countChange(){
        this.$store.dispatch('countChange',this.classCount)
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
