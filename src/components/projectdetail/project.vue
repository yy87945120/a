<template>
	<div class="project">
		<el-row>
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
				<el-breadcrumb-item>项目基本信息</el-breadcrumb-item>

			</el-breadcrumb>
		</el-row>
		<el-row style='margin-top: 10px'>
			<el-form>
				<el-col :span="12" style='border-right:1px dashed rgb(229,229,229)'>
					<el-row class=''><el-col :span='24' style='color: rgb(150,150,150);font-size:12px;background: rgb(239,239,239);text-align: left;padding-left: 20px'>人员基本信息</el-col></el-row>
					<el-row class='row'>

						<el-col :span="6" class='project_item'>创建人</el-col>
						<el-col :span="14"><el-input size="small" value='姚展锋'></el-input></el-col>

						
					</el-row>

					<el-row class='row'>
						<el-col :span="6" class='project_item'>审核人</el-col>
						<el-col :span="14"><el-input size="small" value='姚展锋'></el-input></el-col>
						

						
						
						
					</el-row>

					<el-row class='row'>
						<el-col :span="6" class='project_item'>总负责人</el-col>
						<el-col :span="14"><el-input size="small" value='姚展锋'></el-input></el-col>
					</el-row>

					<el-row class='row'>
						<el-col :span="6" class='project_item'>隶属医院</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'><el-col :span='24' style='color: rgb(150,150,150);font-size:12px;background: rgb(239,239,239);text-align: left;padding-left: 20px'>项目基本信息</el-col></el-row>


					<el-row class='row'>
						<el-col :span="6" class='project_item'>标题</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'>
						<el-col :span="6" class='project_item'>研究疾病</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'>
						<el-col :span="6" class='project_item'>研究人群</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'>
						<el-col :span="6" class='project_item'>暴露/干预</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'>
						<el-col :span="6" class='project_item'>对照</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'>
						<el-col :span="6" class='project_item'>结局</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'>
						<el-col :span="6" class='project_item'>预计最大病例数</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'>
						<el-col :span="6" class='project_item'>研究类型</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'>
						<el-col :span="6" class='project_item'>项目类型</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>

					<el-row class='row'>
						<el-col :span="6" class='project_item'>研究注册号</el-col>
						<el-col :span="14"><el-input size="small" value='无'></el-input></el-col>
					</el-row>
					<el-row class='row'>
						<el-col :span="20" class='project_item'><el-button type='primary' size='mini'>保存</el-button></el-col>
						
					</el-row>
					
				</el-col>
				<el-col :span="12">
					<el-row class=''><el-col :span='24' style='color: rgb(150,150,150);font-size:12px;background: rgb(239,239,239);text-align: left;padding-left: 20px'>操作日志</el-col></el-row>
					<el-row class='row' >
						<el-table
    :data="log"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="发起人">
            <span>{{ props.row.from }}</span>
          </el-form-item>
          <el-form-item label="审核人">
            <span>{{ props.row.to }}</span>
          </el-form-item>
          <el-form-item label="申请时间">
            <span>{{ props.row.beginTime }}</span>
          </el-form-item>
          <el-form-item label="审核时间">
            <span>{{ props.row.endTime }}</span>
          </el-form-item>
          <el-form-item label="申请意见">
            <span>{{ props.row.fromMsg }}</span>
          </el-form-item>

          <el-form-item label="审核意见">
            <span>{{ props.row.toMsg }}</span>
          </el-form-item>

        
          
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="事由"
      prop="reasonse">
    </el-table-column>
    
    <el-table-column
      label="状态"
      prop="status">
    </el-table-column>
    <el-table-column
      label="结果"
      prop="res">
    </el-table-column>
  </el-table>
					</el-row>
					
				</el-col>
			</el-form>


		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'project',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
				log:[
					{	
						logId:1,
						reasonse:'新建项目申请',
						res:'申请通过',
						from:'姚展锋',
						to:'姚展锋',
						beginTime:'2018-12-28 23:00',
						endTime:'2019-1-1 7:00',
						fromMsg:'无',
						toMsg:'同意申请',
						status:'完成',
						toread:true,
						fromread:true
					},
					{	
						logId:2,
						reasonse:'随访内容修改',
						res:'申请不通过',
						from:'姚展锋',
						to:'姚展锋',
						beginTime:'2019-1-1 23:00',
						endTime:'2019-1-2 7:00',
						fromMsg:'无',
						toMsg:'修改不合适',
						status:'完成'
					},
					{	
						logId:3,
						reasonse:'随访内容修改',
						res:'申请通过',
						from:'姚展锋',
						to:'姚展锋',
						beginTime:'2019-1-2 23:00',
						endTime:'2019-1-4 7:00',
						fromMsg:'重新修改',
						toMsg:'同意申请',
						status:'完成'
					},
				]
			}
		},
		methods:{

		},
		created(){
    
    console.log(this.$route.query.id);
  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project_item{
	line-height: 30px;
	font-size: 14px;
	text-align: right;
	padding-right: 15px
}
.row{
	margin-top: 15px
}
.demo-table-expand {
    font-size: 0;
  }
 .demo-table-expand /deep/ label {
    width: 60px;
    color: #99a9bf;
    font-size: 12px
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
    font-size: 12px !important;
  }
   .demo-table-expand /deep/ .el-form-item__content {
    
    font-size: 12px !important;
  }
</style>
