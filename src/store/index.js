import vuex from 'vuex'
import Vue from "vue";
Vue.use(vuex)

const actions={
  tianjia(context,value){
    context.commit("TIANJIA",value)
  },
  shanchu(context,value){
    context.commit("SHANCHU",value)
  },
  shengcheng(context,value){
    //用户输入的课程信息
      let arr=value
  //n表示一共有多少种排列组合方式
  //finalArr是将课程所有排列的输出
  //holdArr是每次向finalArr中填充课程时,预填充的内容
  //infoArr表示上课的顺序
      let n=1,finalArr=[],holdArr=[],infoArr=[],FArr=[]

  //计算课程的所有排列方式数量
      for(let i=0;i<arr.length;i++){
        n*=arr[i].time.length
        infoArr[infoArr.length]=arr[i].info
      }

  //创建一个可以容纳所有排列方式的数组
      for(let i=0;i<n;i++){
        finalArr[finalArr.length]=[]
        FArr[FArr.length]=[]
      }

  //count表示要在finalArr的第几个位置进行填充
      let count=0
  //通过深度优先搜索(递归)的形式对所有可能性进行遍历
  //arr是可查信息
  //classNum是本次排列进行到了第几门课程
  //finalArr和holdArr即之前的描述
      function dfs(arr,classNum,finalArr,holdArr){
        //如果classNum的大小等于arr的数组长度,就说明已经进行到本次排列的最后一门课程,就可以返回了
        if(classNum==arr.length){
          count++
          return
        }
        //遍历当前课程的每个时段
        for(let i=0;i<arr[classNum].time.length;i++){
          //当前要判断是否有冲突的课程,记为filter1
          let filter1=[...holdArr,arr[classNum].time[i]]

          //将filter1转为一维数组,记为filter2,准备剪枝
          let filter2=filter1.reduce(function (a,b){
            return a.concat(b)
          })
          //num表示,如果没有时段重复,filter2应有的长度
          let num=filter2.length
          //将filter去重,目的是如果有课程时段重复,那么在去重后,filter该项的长度应该减少
          let newArr11=[...new Set(filter2)]

          //如果课程没有冲突,就继续进行迭代,不进行剪枝
          if(newArr11.length==num){
            //将这个时段加入到finalArr中
            finalArr[count]=[...holdArr,arr[classNum].time[i]]
            //将这个时段作为添加下一门课程的预输入
            holdArr=filter1
            //在下一次递归中,进行到下一门课程
            let a=classNum+1
            //进行下一次递归
            dfs(arr,a,finalArr,holdArr)
            //当一轮递归结束时,将预输入的最后一门课程删除,避免下一次for循环时重复添加
            holdArr.pop()
          }
        }
      }

  // let time=Date.now()
  // //测试代码运行时间时使用

  //调用递归得到所有排列数
      dfs(arr,0,finalArr,holdArr)

  // console.log(Date.now()-time)
  // //测试算法运行时间时使用

  // 输出所有可能性
  //     for(let i=0;i<count;i++){
  //       for(let j=0;j<finalArr[0].length;j++){
  //         console.log(infoArr[j]+':'+finalArr[i][j])
  //       }
  //       console.log("*********************************")
  //     }
  //
  //     console.log('共'+n+'种可能的上课方式,其中可行的有'+count+'种')

    context.commit("SHENGCHENG", {finalArr,count})
    },
  shoudongtianjia(context,value){
    context.commit("SHOUDONGTIANJIA",value)
  },
  countChange(context,value){
    context.commit("COUNTCHANGE",value)
  }
}
const mutations={
  TIANJIA(state,value){
    let a=0,b=0
    for(let i=0;i<value.length;i++){
      let flag=0
      for(let j=0;j<state.want.length;j++){
        if(state.want[j]===value[i]){
          a=1
          flag=1
        }
      }
      if(flag===0){
        b=1
        state.want.push(value[i])
      }
    }
    if(a==1&&b==1) {
      alert('部分课程已添加,已经将未添加课程加入')
    }

    if(a==0&&b==1) {
      alert('添加成功')
    }
    if(a==1&&b==0) alert('不能重复添加')
    if(a==0&&b==0) alert('添加失败,未选择课程')
  },
  SHANCHU(state,value){
    state.want=state.want.filter((a)=>{
      return a.id!=value
    })
  },
  SHENGCHENG(state,value){
    state.final=value.finalArr
    state.count=value.count
    for(let i=0;i<state.want.length;i++){
      let flag=0
      for(let j=0;j<state.className.length;j++){
        if(state.want[i].info===state.className[j]) flag=1
      }
      if(flag==0) state.className.push(state.want[i].info)
    }
  },
  SHOUDONGTIANJIA(state,value){
    state.want.push(value)
  },
  COUNTCHANGE(state,value){
    state.classNum=value
  }
}
const state={
  all:[
    {id:'1',info:'计算机视觉',time:[[24,25],[31,32]],isMust:false},
    {id:'2',info:'概A',time:[[21,41],[22,41],[22,42],[24,41],[32,51],[12,51]],isMust:true},
    {id:'3',info:'毛概',time:[[21],[31],[44],[51],[11],[12],[14]],isMust:true},
    {id:'4',info:'习概',time:[[22,23],[24,25],[32,33],[34,35],[52,53],[12,13],],isMust:true},
    {id:'5',info:'数据库',time:[[24,25,52],[12,13,24]],isMust:true},
    {id:'6',info:'计算机网络',time:[[22,42],[14,44]],isMust:true},
    {id:'7',info:'操作系统',time:[[25,52],[31,44]],isMust:true},
    {id:'8',info:'英语',time:[[31],[32],[11],[12]],isMust:false},
    {id:'9',info:'体育',time:[[11],[14],[21],[22],[34],[32],[42],[44],[45],[52]],isMust:false},
    {id:'10',info:'离散',time:[[31],[32],[42],[44]],isMust:true},
  ],
  want:[],
  final:[],
  className:[],
  count:0,
  classNum:0
}
const getters={}

export default new vuex.Store({
  actions,
  mutations,
  state,
  getters
})
