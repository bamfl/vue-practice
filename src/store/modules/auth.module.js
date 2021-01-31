import axios from 'axios'
import {customError} from '../../utils/customError'

const TOKEN_KEY = 'jwt-token'

export default {
	namespaced: true,
	state() {
		return {
			token: localStorage.getItem(TOKEN_KEY)
		}
	},
	getters: {
		token(state) {
			return state.token
		},
		isAuthenticated(_, getters) {
			return !!getters.token
		}
	},
	mutations: {
		setToken(state, token) {
			state.token = token
			localStorage.setItem(TOKEN_KEY, token)
		},
		logout(state) {
			state.token = null
			localStorage.removeItem(TOKEN_KEY)
		}
	},
	actions: {
		async login({ commit, dispatch }, payload) {			
			try {
				const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
				const { data } = await axios.post(URL, {...payload, returnSecureToken: true})
				commit('setToken', data.idToken)
				commit('clearMessage', null, {root: true})
			} catch (error) {
				dispatch('setMessage', {
					value: customError(error.response.data.error.message),
					type: 'danger',
					delay: 1000
				}, {root: true})
				throw new Error()
			}
		}
	}
}