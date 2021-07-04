import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Homead from '../components/Homead.vue'
import Homeuser from '../components/Homeuser.vue'
import add2 from '../components/table2/add2.vue'
import dele2 from '../components/table2/dele2.vue'
import searchad2 from '../components/table2/searchad2.vue'
import searchuser2 from '../components/table2/searchuser2.vue'
import update2 from '../components/table2/update2.vue'

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
	      path: '/add2',
	      component: add2,
			},
	  	  {
		  path: '/dele2',
	  	  component: dele2,
	  		},
			
			{
			path: '/update2',
			component: update2,
			},
			{
			path: '/searchad2',
			component: searchad2,
			},]
	},
	{
	  path: '/home0',
	  component: Homeuser,
	  children: [{
	      path: '/searchuser2',
	      component: searchuser2,
		  }]  
	},
]

const router = new VueRouter({
  routes
})


export default router
