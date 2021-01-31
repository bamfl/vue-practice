const ERROR_CODES = {
	EMAIL_NOT_FOUND: 'Такой email не зарегистрирован',
	INVALID_PASSWORD: 'Неверный пароль',
	auth: 'Вам недоступна эта страница, сначала войдите'
}

export function customError(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}