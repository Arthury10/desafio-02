/*animação scrolls*/
function initAnimacaoScroll() {
	const sections = document.querySelectorAll('.js-scroll')

	if (sections.length) {
		const windowMetade = window.innerHeight * 0.75

		function animaScroll() {
			sections.forEach(section => {
				section.classList.add('desativo')
				const sectionTop = section.getBoundingClientRect().top
				const isSectionVisible = sectionTop - windowMetade < 0
				if (isSectionVisible) {
					section.classList.add('ativo')
					section.classList.add('fade-in-fwd')
				} else {
					section.classList.remove('ativo')
					section.classList.remove('fade-in-fwd')
				}
			})
		}

		animaScroll()

		window.addEventListener('scroll', animaScroll)
	}
}

initAnimacaoScroll()

/*Open Modal Tenis*/

function modalTenisOpen() {
	const openmodalTenis = document.querySelectorAll('.tenis-modal')
	const modalTenis = document.querySelector('.modal-tenis')
	const btnClose = document.querySelector('.btnClose')

	openmodalTenis.forEach(openmodalTenis => {
		openmodalTenis.addEventListener('click', () => {
			modalTenis.classList.add('show')
			modalTenis.classList.add('fade-in-fwd')
		})
	})

	function closeModalTenis() {
		modalTenis.classList.remove('show')
		modalTenis.classList.remove('fade-in-fwd')
	}

	btnClose.addEventListener('click', closeModalTenis)
}

modalTenisOpen()
