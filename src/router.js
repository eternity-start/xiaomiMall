import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart.vue'
import Order from  './pages/order.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'
import Login from './pages/login.vue'
import Alipay from './pages/alipay.vue'
Vue.use(VueRouter)

const routes = [
	
	{
		path: '/',
		component: Home,
		redirect: '/index',
		children: [
			{ 
				path: 'index',
				component: Index,
			},
			{
				path: 'product/:id',
				component: Product
			},
			{
				path: 'detail/:id',
				component: Detail
			}
		]
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/order',
		component: Order,
		children: [
			{
				path: 'list',
				component: OrderList
			},
			{
				path: 'confirm',
				component: OrderConfirm
			},
			{
				path: 'pay',
				component: OrderPay
			},
			{
				path: 'alipay',
				component: Alipay
			}
		]
	},
	{
		path: '/login',
		component: Login
	}
]

let router = new VueRouter({
	routes
})

export default router