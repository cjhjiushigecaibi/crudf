import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'//引入login组件
import Homead from '../components/Homead.vue'//导入homead组件
import Homeuser from '../components/Homeuser.vue'//导入homeuser组件
import add from '../components/add.vue'//导入add组件
import dele from '../components/dele.vue'//导入delete组件
import searchad from '../components/searchad.vue'//导入search组件
import searchuser from '../components/searchuser.vue'//导入search组件
import update from '../components/update.vue'//导入update组件

Vue.use(VueRouter)

const routes = [
	{
		path:"/",
		redirect:"/login"
	},
	{
		path: '/login',
		component: Login
	},
	{
	  path: '/home1',
	  component: Homead,
	  children: [
		  {
	      path: '/add',
	      component: add,
			},
	  	  {
		  path: '/dele',
	  	  component: dele,
	  		},
			
			{
			path: '/update',
			component: update,
			},
			{
			path: '/searchad',
			component: searchad,
			},]
	},
	{
	  path: '/home0',
	  component: Homeuser,
	  children: [{
	      path: '/searchuser',
	      component: searchuser,
		  }]  
	},
]

const router = new VueRouter({
  routes
})


export default router
