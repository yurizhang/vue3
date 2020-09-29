import { createStore } from 'vuex'

export default createStore({
  state: {
    //this.$store.state 访问
    text:"Hello vuex"
  },
  mutations: {
        // mutations的第一个参数即为 state对象，并且可以向mutation传入额外的参数
        // 只能执行同步方法，不要去执行异步方法 通过 this.$store.commit('checkText','参数') 方法去调用
        checkText: (state, n) => {
          state.text = n || '没有传参数';
        },
  },
  actions: {
    // 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch("checkText",'参数') 的方式调用
    // 可以用来执行异步操作，可以跟踪异步数据状态变化
    checkText: (context, n) => {
      // 调用 mutation
      setTimeout(() => {
        context.commit('checkText',n);
      }, 2000);
      
    },    
  },
  modules: {
  }
})
