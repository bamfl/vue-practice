<template>
	<Form v-slot="{ errors, isSubmitting, submitCount }" class="card" @submit="submit" :validation-schema="schema">
		<h1>Войти в систему</h1>
		
		<div class="form-control" :class="{invalid: errors.email}">
			<label for="email">E-mail</label>
			<Field name="email" placeholder="Введите email" type="email" id="email" />
			<small v-if="errors.email"><ErrorMessage name="email" /></small>
		</div>

		<div class="form-control" :class="{invalid: errors.password}">
			<label for="password">Пароль</label>
			<Field name="password" placeholder="Введите пароль" type="password" id="password" v-model="password" />
			<small v-if="errors.password"><ErrorMessage name="password" />{{passwordLength}}</small>
		</div>

		<button class="btn primary" type="submit" :disabled="isSubmitting || submitCount > 3">Войти</button>
		<small v-if="submitCount > 3">Вы привысили лимит неправильных вводов, подождите 1 минуту</small>
	</Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { configure } from 'vee-validate'
import * as yup from 'yup'
import {customError} from '../utils/customError'

export default {
	data() {
		const schema = yup.object({
      email: yup.string().trim().required('Обязательное поле').email('Неверный email'),
      password: yup.string().required('Обязательное поле').min(6, `Минимум 6 символов, а у вас `),
		})	
		
		configure({
			validateOnBlur: true,
			validateOnChange: true,
			validateOnInput: true,
			validateOnModelUpdate: true
		})

		return {
			schema,
			password: ''
		}
	},
	mounted() {
		if (this.$route.query.message) {
			this.$store.dispatch('setMessage', {
				value: customError(this.$route.query.message),
				type: 'warning'
			})
		}
	},
	methods: {
		async submit(val) {
			try {
				await this.$store.dispatch('AuthModule/login', val)
				this.$router.push('/')				
			} catch (error) {}
		}
	},
	computed: {
		passwordLength() {
			return this.password.length
		}		
	},
	components: {
    Form,
    Field,
    ErrorMessage
  }
}
</script>

<style>

</style>
