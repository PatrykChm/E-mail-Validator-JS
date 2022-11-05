const mailInput = document.querySelector('.card__input')
const sendButton = document.querySelector('.card__button')
const error = document.querySelector('.card__error')
const confirm = document.querySelector('.card__confirm')

const clearError = () => {
	error.classList.remove('error-active')
	confirm.classList.remove('confirm-active')
}

const checkEmail = () => {
	clearError()

	const reg =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (reg.test(mailInput.value)) {
		confirm.classList.add('confirm-active')

		startConfetti()

		setTimeout(() => {
			stopConfetti()
		}, 2000)
	} else {
		error.classList.add('error-active')
	}
}

sendButton.addEventListener('click', checkEmail)

