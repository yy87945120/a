import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import portal from '@/views/portal'
import project from '@/views/project'
import project2 from '@/views/project2'
import detail from '@/views/detail'
import back from '@/views/back'
import user from '@/views/user'
import pane from '@/views/pane'
import dep from '@/views/dep'
import form from '@/views/form'
import message from '@/views/message'

import crf from '@/views/crf'

import newcrf from '@/views/newcrf'

import power from '@/views/power'

import newproject from '@/views/newproject'

import visit from '@/views/visit'

import projectdetail from '@/views/projectdetail';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
  	{
      path: '/portal',
      name: 'portal',
      component: portal,
      redirect:'/back',
      children:[

          {
              path: '/message',
              name: 'message',
              component : message
          },
          {
              path: '/back',
              name: 'back',
              component:back,
              redirect: '/pane',
              children: [
                {
                  path: '/pane',
                  name: 'pane',
                  component:pane
                },
                {
                  path: '/user',
                  name: 'user',
                  component:user
                },
                {
                  path: '/dep',
                  name: 'dep',
                  component:dep
                },
                {
                  path: '/form',
                  name: 'form',
                  component:form
                },
                {
                  path: '/crf',
                  name: 'crf',
                  component:crf
                },
                {
                  path: '/newcrf',
                  name: 'newcrf',
                  component:newcrf
                },
                {
                  path: '/power',
                  name: 'power',
                  component:power
                },
                {
                  path: '/newproject',
                  name: 'newproject',
                  component:newproject
                },
                {   
        path: '/visit ',
        name: 'visit',
        component:visit
       } ,{
              path: '/project',
              name: 'project',
              component : project
          },
          {
              path: '/project2',
              name: 'project2',
              component : project2
          },
          {
              path: '/detail',
              name: 'detail',
              component : detail
          },
          {
              path: '/projectdetail',
              name: 'projectdetail',
              component : projectdetail
          }
                 
              ] 
                
          }
      ]
    }
  ]
})
