<template>
  <div class="visit">
    <el-row>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/project' }">科研立项</el-breadcrumb-item>
  <el-breadcrumb-item>随访安排</el-breadcrumb-item>
</el-breadcrumb>

    </el-row>
      
  </div>
</template>

<script>
export default {
  name: 'visit',
  data () {
    return {
      userId:0,
    }
  },
  methods:{

  },
  mounted(){
      this.userId = this.$route.params.userId;
      console.log(this.userId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
