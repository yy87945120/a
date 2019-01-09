<template>
	<div class="projectprogress">
		<el-row>
			<el-col :span='8'>
				
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
					<el-breadcrumb-item>进度管理</el-breadcrumb-item>

				</el-breadcrumb>
			</el-col>
			<el-col :span='16' style='text-align: right;'>
				<span style='color: rgb(100,100,100);font-size: 14px'>患者总数：1200</span>
			</el-col>
		</el-row>
		<el-row :gutter="20" style='margin-top: 10px;'>
			<el-col :span='8'>

				<el-card shadow="always" style='height: 280px'>
					<el-row style='text-align: left;'><h4>题目</h4></el-row>
					<ve-histogram :data="histogramData" height='280px' ></ve-histogram>
				</el-card>
			</el-col>
			<el-col :span='8'>
				<el-card shadow="always" style='height: 280px'>
					总是显示
				</el-card>
			</el-col>
			<el-col :span='8'>
				<el-card shadow="always" style='height: 359px'>
					<ve-pie :data="pieData" height='359px'></ve-pie>
				</el-card>
			</el-col>
		</el-row>
		<el-row style='margin-top: 10px;text-align: left;font-weight: bold;'>
			队列1
		</el-row>

		<el-row style='margin-top: 10px;' :gutter='20'>
			<el-col :span='12' style='height:300px'>
				<el-card shadow="always" style='height: 280px'>
					总是显示
				</el-card>
			</el-col>
			<el-col :span='12' style='height:300px'>
				<el-card shadow="always" style='height: 280px'>
					总是显示
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import "echarts/lib/component/title";
	export default {
		name: 'projectprogress',
		
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
				histogramData: {
          columns: [ '访问用户', '下单用户', '下单率'],
          rows: [
            { '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },pieData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
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
