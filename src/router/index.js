import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{	name: 'Auth', path: '/auth', component: () => import('../views/Auth.vue'), meta: { layout: 'auth'	}	},
	{ name: 'Home', path: '/', component: () => import('../views/Home.vue'), meta: { layout: 'main' } },	
  { name: 'Help', path: '/help', component: () => import('../views/Help.vue'), meta: { layout: 'main'	} }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
