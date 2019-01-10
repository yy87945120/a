import Vue from 'vue'
import Vuex from 'vuex'
import routerLink from '../router'
Vue.use(Vuex)
// const store = new Vuex.Store({

// })

const store = new Vuex.Store({
	state: {
		editableTabs:[
		{
			title: '系统首页',
			name: '系统首页',
			router:'pane',
			query:{}
		}
		],
		activeList:['pane'],
		editableTabsValue:'系统首页'
	},
	getters: {

	},
	mutations: {
		addTab(state,par){
			
			let name = par.name;
			let router = par.router;
			let data = par.data;
			// console.log(router,name,data)
          	//如果标签页不唯一直接新增标签页
          	let flag = state.editableTabs.some(item=>item.name == name);
          	//如果该不存在标签页则新增标签页
          	if(!flag){
          		let newTabName = name;
          		state.editableTabs.push({
          			title: name,
          			name: name,
          			router:router,
          			query:data
          		});
          		state.activeList.push(router);
          		state.editableTabsValue = newTabName;
          		// console.log(state.editableTabsValue);
          		// this.$router.push({name:router,query:query});
          		//此处可以插入并更新localstorage以防止刷新时路由丢失，待开发
          	}else{
          		//如果存在直接跳转到标签页
          		let tabArr = state.editableTabs.find(item=>item.title == name)
          		state.editableTabsValue = tabArr.title;

          	}
          },
          deleteTab(state,par){
		      	//如果是删除操作则执行以下
		      	let targetName = par.targetName;
		      	let action = par.action;
		      	
		      	if (action === 'remove') {
		      		//如果是系统首页则不删除
		      		if(targetName == '系统首页') return;
		      		//element ui 自带的删除焦点事件
		      		let tabs = state.editableTabs;
		      		let activeName = state.editableTabsValue;
		      		if (activeName === targetName) {
		      			tabs.forEach((tab, index) => {
		      				if (tab.name === targetName) {
		      					let nextTab = tabs[index + 1] || tabs[index - 1];
		      					if (nextTab) {
		      						activeName = nextTab.name;
		      					}
		      				}
		      			});
		      		}

				//计算出焦点标签并且当前激活tab
				state.editableTabsValue = activeName;

				//去除指定tab
				state.editableTabs = tabs.filter(tab => tab.name !== targetName);

				//获取当前激活路由的参数此处自动跳转的焦点标签
				//获取标签组里面的参数进行路由跳转
				let query ={};
				tabs.map(item=>{
					if(item.title == state.editableTabsValue){

						query = item.query || {};
					}
				})
				//获取标签组里面的路由进行路由跳转
				let router ='';
				tabs.map(item=>{
					if(item.title == state.editableTabsValue){

						router = item.router;
					}
				})

				//删除tab页后，刷新缓存列表防止重复加载
				state.activeList = state.activeList.filter(t => t == router);

				//跳转路由
				routerLink.push({name:router,query:query});
				//此处可以删除并更新localstorage以防止刷新时路由丢失，待开发
			}

		},
		toggleTab(state,par){
			let itemOption = par.itemOption

			//获取
			let tabArr= state.editableTabs.find(item=>item.name == itemOption.name);
			let query = tabArr.query || {};


			routerLink.push({name:tabArr.router,query:query});


		},
		replaceTab(state,par){
			//参数 1.router跳转的路由to 2、本来的路由from 可以用routerLink获取
			//方式 把edittableTabs里面的本来数组去掉，把缓存列表的数组去掉，焦点标签变为to的路由
			//

		},
		refreshTab(){
			//刷新路由待开发
		}

	},
	actions: {
		// add({commit}, router,name,query) {
  //       commit('addtab',router,name,query)    // 提交到mutations中处理    
  //   }

	}
})

export default store;