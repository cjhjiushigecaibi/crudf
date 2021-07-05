import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Homead from '../components/Homead.vue'
import Homeuser from '../components/Homeuser.vue'
import add0 from '../components/table0/add0.vue'
import dele0 from '../components/table0/dele0.vue'
import searchad0 from '../components/table0/searchad0.vue'
import searchuser0 from '../components/table0/searchuser0.vue'
import update0 from '../components/table0/update0.vue'
import add1 from '../components/table1/add1.vue'
import dele1 from '../components/table1/dele1.vue'
import searchad1 from '../components/table1/searchad1.vue'
import searchuser1 from '../components/table1/searchuser1.vue'
import update1 from '../components/table1/update1.vue'
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
			},
		  {
			  path: '/add0',
			  component: add0,
		  },
		  {
			  path: '/dele0',
			  component: dele0,
		  },

		  {
			  path: '/update0',
			  component: update0,
		  },
		  {
			  path: '/searchad0',
			  component: searchad0,
		  },
		  {
			  path: '/add1',
			  component: add1,
		  },
		  {
			  path: '/dele1',
			  component: dele1,
		  },

		  {
			  path: '/update1',
			  component: update1,
		  },
		  {
			  path: '/searchad1',
			  component: searchad1,
		  },

	  ]
	},
	{
	  path: '/home0',
	  component: Homeuser,
	  children: [
	  	{
	      path: '/searchuser2',
	      component: searchuser2,
		  },
		  {
			  path: '/searchuser1',
			  component: searchuser1,
		  },
		  {
			  path: '/searchuser0',
			  component: searchuser0,
		  },

	  ]
	},
]

const router = new VueRouter({
  routes
})


export default router
