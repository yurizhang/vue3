<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>vuex: {{$store.state.text}}</h3>
    <a-button type="primary" @click="changeStore">changeStore</a-button>
  </div>
</template>
<script>

export default {
  created(){
     console.log("about created")
  },
  setup(){
    console.log("about setup")
  },
  methods: {
    changeStore(){
      this.$trend.welcome();
      this.$store.dispatch('checkText','异步修改commit修改');
    }
  },
}
</script>