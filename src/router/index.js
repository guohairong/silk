import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import resource from 'vue-resource'

import Classify from '../components/Classify'
import sousuo from '../components/sousuo'
import xiangqing from '../components/xiangqing'
import shoucang from '../components/shoucang'
import dianpuxiangqing from '../components/dianpuxiangqing'
import shangpinxiangqingye from '../components/shangpinxiangqingye'
import supply from '../components/supply'
import home from '..//components/home'
import zhuce from '../components/zhuce'
import agreement from '../components/agreement'
import hstrip from '../components/hstrip'
import details from '../components/details'
import dlinedetails from '../components/dlinedetails'


Vue.use(Router)
Vue.use(resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/shoucang',
      name: 'shoucang',
      component: shoucang
    },
    {
      path: '/shangpinxiangqingye',
      name: 'shangpinxiangqingye',
      component: shangpinxiangqingye
    },
    {
      path: '/dianpuxiangqing',
      name: 'dianpuxiangqing',
      component: dianpuxiangqing
    },
    {
      path: '/supply',
      name: 'supply',
      component: supply
    },
    {
      path: '/shoucang',
      name: 'shoucang',
      component: shoucang
    },
     {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    },
    {
      path: '/hstrip',
      name: 'hstrip',
      component: hstrip
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/dlinedetails',
      name: 'dlinedetails',
      component: dlinedetails
    }
    
  ]
})
