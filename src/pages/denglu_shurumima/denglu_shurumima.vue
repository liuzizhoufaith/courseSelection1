<template>
  <div class="flex-row justify-center page space-x-15">
    <div class="flex-col group">
      <div class="flex-row items-start group_2 space-x-70">
        <img
          class="image"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539569933703984.png"
        />
        <img
          class="image_3"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539567402684588.png"
        />
      </div>
      <span class="text">定制选课系统</span>
      <span class="text_2">高效、便捷地生成你想要的课程表</span>
      <div class="flex-row group_3 space-x-353">
        <img
          class="image_4"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539567315849482.png"
        />
        <img
          class="image_6 image_7"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539568903062738.png"
        />
      </div>
      <img
        class="image_8 image_9"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539568022659732.png"
      />
    </div>
    <div class="flex-col section_2">
      <div class="flex-row">
        <img
          class="image_4 image_10"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539567315849482.png"
        />
        <img
          class="image_6 image_11"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539568903062738.png"
        />
        <img
          class="image_8 image_12"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539568629110697.png"
        />
      </div>
      <div class="flex-col group_5">
<!--        <button class="flex-col items-center text-wrapper font_1 text_3 aaaaa" @click="signIn">免登录即刻使用</button>-->
        <el-button type="primary" @click="signIn">免登录即刻使用</el-button>
        <div class="flex-row group_6 space-x-11">
          <span class="font_1 text_4">分享我们</span>
          <img
            class="image_13"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539571278992788.png"
          />
          <img
            class="image_14"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539571595547654.png"
          />
        </div>
      </div>
      <img
        class="image image_15"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6375a2fc5a7e3f03107db36a/6375a30c993a3600116d6461/16686539570045644442.png"
      />
    </div>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {};
    },

    methods: {
      signIn(){
        this.$router.push('/MyHome')
      }
    },
  };
</script>

<style scoped lang="css">
  .font_1 {
    font-size: 14px;
    font-family: SourceHanSansCN;
    line-height: 13px;
  }
  .image_8 {
    opacity: 0.8;
    width: 66px;
    height: 73px;
  }
  .image {
    opacity: 0.33;
    width: 317px;
    height: 283px;
  }
  .image_4 {
    opacity: 0.8;
    width: 150px;
    height: 105px;
  }
  .image_6 {
    opacity: 0.85;
    width: 49px;
    height: 49px;
  }
  .page {
    padding-left: 65px;
    background-color: #f0f2f5;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group {
    margin-top: 62px;
    height: 703px;
  }
  .section_2 {
    padding: 24px 43px 0;
    background-color: #ffffff;
    width: 720px;
    height: 900px;
  }
  .group_2 {
    padding-left: 18px;
  }
  .text {
    margin-top: 6px;
    align-self: center;
    color: #1989fa;
    font-size: 72px;
    font-family: KingsoftCloud;
    line-height: 64.5px;
  }
  .text_2 {
    margin-top: 36px;
    align-self: center;
    color: #00000073;
    font-size: 21.5px;
    font-family: HarmonyOSSansSC;
    line-height: 20px;
  }
  .group_3 {
    margin-top: 162px;
  }
  .image_9 {
    margin-right: 263px;
    margin-top: -175px;
    flex-shrink: 0;
    align-self: flex-end;
  }
  .group_5 {
    margin-top: 227px;
  }
  .image_15 {
    margin: 82px 77px -46px 0;
    align-self: flex-end;
  }
  .image_3 {
    margin-top: 113px;
    width: 235px;
    height: 196px;
  }
  .image_7 {
    margin-top: 3px;
  }
  .image_10 {
    margin-top: 46px;
  }
  .image_11 {
    margin-left: 154px;
    align-self: center;
  }
  .image_12 {
    margin-left: 204px;
  }
  .text-wrapper {
    padding: 14px 0 12px;
    align-self: center;
    background-color: #1989fa;
    border-radius: 4px;
    width: 240px;
  }
  .group_6 {
    padding-top: 21px;
  }
  .text_3 {
    color: #ffffff;
  }
  .text_4 {
    margin-left: 202px;
    margin-top: 8px;
    color: #000000a6;
  }
  .image_13 {
    width: 30px;
    height: 30px;
  }
  .image_14 {
    width: 134px;
    height: 118px;
  }
  .space-x-15 > *:not(:first-child) {
    margin-left: 15px;
  }
  .space-x-70 > *:not(:first-child) {
    margin-left: 70px;
  }
  .space-x-353 > *:not(:first-child) {
    margin-left: 353px;
  }
  .space-x-11 > *:not(:first-child) {
    margin-left: 11px;
  }
  .aaaaa:hover{
    background-color: #6379df;
  }
</style>
