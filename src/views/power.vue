<template>
  <div class="power">

  </div>
</template>

<script>
export default {
  name: 'power',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods:{
  	set(data){
        console.log(1);
        this._data = [];
        this._data.push(data);
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
