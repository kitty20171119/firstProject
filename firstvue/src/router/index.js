import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import Account from '@/components/Account'
import Info from '@/components/Info'
import Device from '@/components/Device'
import Rent from '@/components/Rent'
import Deposit from '@/components/Deposit'
import Repair from '@/components/Repair'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
			path:'/detail',
			name:'Detail',
			component:Detail,
			children:[
				{path:'/detail/account',component:Account},
				{path:'/detail/info',component:Info},
				{path:'/detail/device',component:Device},
				{path:'/detail/deposit',component:Deposit},
				{path:'/detail/rent',component:Rent},
				{path:'/detail/repair',component:Repair}
			]
		},
		
  ]
})
