import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
	{	name: 'Auth', path: '/auth', component: () => import('../views/Auth.vue'), meta: { layout: 'auth', auth: false	}	},
	{ name: 'Home', path: '/', component: () => import('../views/Home.vue'), meta: { layout: 'main', auth: true } },	
	{ name: 'Help', path: '/help', component: () => import('../views/Help.vue'), meta: { layout: 'main', auth: true	} },
	{ name: 'Messages', path: '/messages', component: () => import('../views/Messages.vue'), meta: { layout: 'main', auth: true	} }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
	const requireAuth = to.meta.auth

	if (requireAuth && store.getters['AuthModule/isAuthenticated']) {
		next()
	} else if (requireAuth && !store.getters['AuthModule/isAuthenticated']) {
		next('/auth?message=auth')
	} else {
		next()
	}
})

export default router
